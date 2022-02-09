import { post } from '../axios'
import { updateCompany } from '../companies/updateCompany'

export const createMovie = async (movie) => {
	try {
		const { data } = await post('movies', movie.payloadItem())
		if (movie?.company?.movies && !movie.company.movies.includes(data.id)) {
			movie?.company?.movies.push(data.id)
			await updateCompany(movie.company)
		}
		return data
	} catch (e) {
		console.error(e)
	}
}
