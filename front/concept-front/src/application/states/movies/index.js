import { reactive, toRefs } from 'vue'
import { createMovie } from '../../../infraestructure/movies/createMovie'
import { getMovieById } from '../../../infraestructure/movies/getMovieById'
import { getMovies } from '../../../infraestructure/movies/getMovies'
import { updateMovie } from '../../../infraestructure/movies/updateMovie'
import loadingState from '../loadingState'

const { setLoading } = loadingState()

const state = reactive({
	loadingMovies: false,
	errorMovies: false,
	movie: null,
	movies: [],
})

export default () => {
	const loadMovies = async () => {
		try {
			setLoading(true)
			state.loadingMovies = true
			state.movies = await getMovies()
		} catch (error) {
			state.errorMovies = true
		} finally {
			setLoading(false)
			state.loadingMovies = false
		}
	}

	const loadMovieById = async (id) => {
		try {
			setLoading(true)
			state.loadingMovies = true
			state.movie = await getMovieById(id)
		} catch (error) {
			state.errorMovies = true
		} finally {
			state.loadingMovies = false
			setLoading(false)
		}
	}

	const createNewMovie = async (movie) => {
		try {
			setLoading(true)
			state.loadingMovies = true
			await createMovie(movie)
			state.movie = movie
		} catch (error) {
			state.errorMovies = true
		} finally {
			state.loadingMovies = false
			setLoading(false)
		}
	}

	const putMovie = async (movie) => {
		try {
			setLoading(true)
			state.loadingMovies = true
			await updateMovie(movie)
			state.movie = movie
		} catch (error) {
			state.errorMovies = true
		} finally {
			state.loadingMovies = false
			setLoading(false)
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
