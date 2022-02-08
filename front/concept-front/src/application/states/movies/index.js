import { reactive, toRefs } from 'vue'
import { createMovie } from '../../../infraestructure/movies/createMovie'
import { getMovieById } from '../../../infraestructure/movies/getMovieById'
import { getMovies } from '../../../infraestructure/movies/getMovies'
import { updateMovie } from '../../../infraestructure/movies/updateMovie'

const state = reactive({
	loadingMovies: false,
	errorMovies: false,
	movie: null,
	movies: [],
})

export default () => {
	const loadMovies = async () => {
		try {
			state.loadingMovies = true
			state.movies = await getMovies()
		} catch (error) {
			state.errorMovies = true
		} finally {
			state.loadingMovies = false
		}
	}

	const loadMovieById = async (id) => {
		try {
			state.loadingMovies = true
			state.movie = await getMovieById(id)
		} catch (error) {
			state.errorMovies = true
		} finally {
			state.loadingMovies = false
		}
	}

	const createNewMovie = async (movie) => {
		try {
			state.loadingMovies = true
			await createMovie(movie)
			state.movie = movie
		} catch (error) {
			state.errorMovies = true
		} finally {
			state.loadingMovies = false
		}
	}

	const putMovie = async (movie) => {
		try {
			state.loadingMovies = true
			await updateMovie(movie)
			state.movie = movie
		} catch (error) {
			state.errorMovies = true
		} finally {
			state.loadingMovies = false
		}
	}

	return {
		...toRefs(state),
		loadMovies,
		loadMovieById,
		createNewMovie,
		putMovie,
	}
}
