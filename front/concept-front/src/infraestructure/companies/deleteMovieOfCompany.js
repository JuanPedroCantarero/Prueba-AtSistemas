import { getCompanyById } from './getCompanyById'
import { updateCompany } from './updateCompany'

export const deleteMovieOfCompany = async (movie) => {
	try {
		const company = await getCompanyById(movie.company.id)
		if (company?.movies && company.movies.includes(movie.id)) {
			company.movies = company.movies.filter((movieId) => movieId !== +movie.id)
			await updateCompany(company)
		}
	} catch (e) {
		console.error(e)
	}
}
