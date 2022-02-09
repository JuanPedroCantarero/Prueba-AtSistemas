import { Movie } from '../../domain/movie/movie'
import { getActorById } from '../actors/getActorById'
import { getCompanies } from '../companies/getCompanies'
import { get } from '../axios'

export const getMovieById = async (id) => {
	try {
		const { data } = await get(`movies/${id}`)
		data.actors = await Promise.all(
			data.actors.map(async (actorId) => {
				const actor = await getActorById(actorId)
				return {
					id: actorId,
					name: `${actor.first_name} ${actor.last_name}`,
				}
			}),
		)
		const companies = await getCompanies()
		data.company = companies.find((company) => company.movies.includes(+id))
		return new Movie(data)
	} catch (e) {
		console.error(e)
	}
}
