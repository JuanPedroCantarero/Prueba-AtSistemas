import { getMovies } from '../../../../infraestructure/movies/getMovies'
import { onMounted, reactive } from 'vue'
export default {
	name: 'Movies',
	setup() {
		let state = reactive({
			movies: [],
		})

		onMounted(async () => {
			state.movies = await getMovies()
		})
		return {
			state,
		}
	},
}
