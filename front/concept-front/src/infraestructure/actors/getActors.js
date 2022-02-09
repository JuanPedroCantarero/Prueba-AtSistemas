import { get } from '../axios'

export const getActors = async (params) => {
	try {
		const { data } = await get(`actors${params ? '?' + params : ''}`)

		return data
	} catch (e) {
		console.error(e)
	}
}
