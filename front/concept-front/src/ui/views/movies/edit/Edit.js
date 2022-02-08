import { defineAsyncComponent, onBeforeMount } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import movieState from '../../../../application/states/movies'
import titleState from '../../../../application/states/titleState'

export default {
	components: {
		FormMovie: defineAsyncComponent(() => import('../form/Form.vue')),
	},
	setup() {
		const { loadMovieById, putMovie, movie, loadingMovies } = movieState()
		const route = useRoute()
		const router = useRouter()
		const { setTitle } = titleState()

		const getMovieById = async () => {
			try {
				await loadMovieById(route.params.id)
				setTitle(`Edit movie ${movie.value.title}`)
			} catch (e) {
				console.error(e)
			}
		}

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

		return {
			updateMovie,
			movie,
			loadingMovies,
		}
	},
}
