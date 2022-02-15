import { put } from '../axios'
import { addMovieToCompany } from '../companies/addMovieToCompany'
import { deleteMovieOfCompany } from '../companies/deleteMovieOfCompany'
import { getMovieById } from './getMovieById'

export const updateMovie = async (movie) => {
	try {
		const previousMovie = await getMovieById(movie.id)
		const { data } = await put(`movies/${movie.id}`, movie.payloadItem())
		if (movie?.company && movie.company.id !== previousMovie.company.id) {
			await deleteMovieOfCompany(previousMovie)
			await addMovieToCompany(movie)
		}

		return data
	} catch (e) {
		console.error(e)
	}
}
