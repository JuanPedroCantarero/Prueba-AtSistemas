import { post } from '../axios'

export const createMovie = async (movie) => {
	try {
		const { data } = await post('movies', movie)

		return data
	} catch (e) {
		console.error(e)
	}
}
