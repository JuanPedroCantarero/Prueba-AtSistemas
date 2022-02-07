import { get } from '../axios'

export const getActorById = async (id) => {
	try {
		const { data } = await get(`actors/${id}`)

		return data
	} catch (e) {
		console.error(e)
	}
}
