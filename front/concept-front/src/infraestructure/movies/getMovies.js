import { get } from '../axios'

export const getMovies = async (params) => {
	try {
		const { data } = await get(`movies${params ? '?' + params : ''}`)

		return data
	} catch (e) {
		console.error(e)
	}
}
