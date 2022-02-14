import { deleteItem } from '../axios'
import { deleteMovieOfCompany } from '../companies/deleteMovieOfCompany'

export const removeMovie = async (movie) => {
	try {
		await deleteMovieOfCompany(movie)
		await deleteItem(`movies/${movie.id}`)

		return true
	} catch (e) {
		console.error(e)
	}
}
