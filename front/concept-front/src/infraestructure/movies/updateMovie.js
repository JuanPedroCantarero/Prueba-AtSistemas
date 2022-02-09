import { put } from '../axios'
import { updateCompany } from '../companies/updateCompany'

export const updateMovie = async (movie) => {
	try {
		const { data } = await put(`movies/${movie.id}`, movie.payloadItem())
		if (movie?.company?.movies && !movie.company.movies.includes(data.id)) {
			movie?.company?.movies.push(data.id)
			await updateCompany(movie.company)
		}

		return data
	} catch (e) {
		console.error(e)
	}
}
