import { get } from '../axios'

export const getCompanyById = async (id) => {
	try {
		const { data } = await get(`companies/${id}`)

		return data
	} catch (e) {
		console.error(e)
	}
}
