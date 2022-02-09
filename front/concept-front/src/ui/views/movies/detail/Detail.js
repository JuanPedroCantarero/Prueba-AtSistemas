import movieState from '../../../../application/states/movies'
import titleState from '../../../../application/states/titleState'
import { useRoute, useRouter } from 'vue-router'
import { defineAsyncComponent, onBeforeMount, onBeforeUnmount, ref } from 'vue'
import { useI18n } from 'vue-i18n'

export default {
	components: {
		IconButton: defineAsyncComponent(() => import('../../../components/iconButton/IconButton.vue')),
		Modal: defineAsyncComponent(() => import('../../../components/modal/Modal.vue')),
	},
	setup() {
		const { loadMovieById, loadingMovies, movie, resetMovies, deleteMovie } = movieState()
		const { setTitle } = titleState()
		const route = useRoute()
		const router = useRouter()
		const showModal = ref(false)
		const { t } = useI18n()

		// Load the movie by ID and set Title in top of sidebar title
		const getMovieDetail = async () => {
			try {
				await loadMovieById(route.params.id)
				setTitle(t('titles.movies.details', { title: movie.value.title }))
			} catch (e) {
				console.error(e)
			}
		}

		// Delete using movie ID and redirect to list
		const deleteMovieById = async (event) => {
			showModal.value = false
			if (event) {
				try {
					await deleteMovie(+route.params.id)
					router.push({ name: 'movies' })
				} catch (e) {
					console.error(e)
				}
			}
		}

		onBeforeMount(() => {
			getMovieDetail()
		})

		onBeforeUnmount(() => {
			resetMovies()
		})

		return {
			movie,
			loadingMovies,
			showModal,
			deleteMovieById,
		}
	},
}
