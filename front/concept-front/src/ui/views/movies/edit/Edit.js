import { defineAsyncComponent, onBeforeMount, onBeforeUnmount } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import movieState from '../../../../application/states/movies'
import titleState from '../../../../application/states/titleState'

export default {
	components: {
		FormMovie: defineAsyncComponent(() => import('../form/Form.vue')),
	},
	setup() {
		const { loadMovieById, putMovie, movie, loadingMovies, resetMovies } = movieState()
		const route = useRoute()
		const router = useRouter()
		const { setTitle } = titleState()

		// Load the movie by ID and set Title in top of sidebar title
		const getMovieById = async () => {
			try {
				await loadMovieById(route.params.id)
				setTitle(`Edit movie ${movie.value.title}`)
			} catch (e) {
				console.error(e)
			}
		}
		// Call update of movie
		const updateMovie = async (movieItem) => {
			if (movieItem) {
				try {
					await putMovie(movieItem)
					router.push({ name: 'movies' })
				} catch (e) {
					console.error(e)
				}
			}
		}

		onBeforeMount(() => {
			getMovieById()
		})

		onBeforeUnmount(() => {
			resetMovies()
		})

		return {
			updateMovie,
			movie,
			loadingMovies,
		}
	},
}
