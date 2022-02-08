import { get } from '../axios'

export const getMovies = async () => {
	try {
		const { data } = await get('movies')

		return data
	} catch (e) {
		console.error(e)
	}
}
