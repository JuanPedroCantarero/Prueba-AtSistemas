import { get } from '../axios'

export const getMovieById = async (id) => {
	try {
		const { data } = await get(`movies/${id}`)

		return data
	} catch (e) {
		console.error(e)
	}
}
