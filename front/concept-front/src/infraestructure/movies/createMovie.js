import { Movie } from '../../domain/movie/movie'
import { post } from '../axios'
import { addMovieToCompany } from '../companies/addMovieToCompany'

export const createMovie = async (movie) => {
	try {
		const { data } = await post('movies', movie.payloadItem())
		if (movie?.company && data?.id) {
			const createdMovie = new Movie({ id: data.id, company: movie.company })
			await addMovieToCompany(createdMovie)
		}
		return data
	} catch (e) {
		console.error(e)
	}
}
