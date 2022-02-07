import { getMovies } from '../../../../infraestructure/movies/getMovies'

export default {
	name: 'Movies',
	setup() {
		getMovies()
	},
}
