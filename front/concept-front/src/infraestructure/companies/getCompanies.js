import { get } from '../axios'

export const getCompanies = async (params) => {
	try {
		const { data } = await get(`companies${params ? '?' + params : ''}`)

		return data
	} catch (e) {
		console.error(e)
	}
}
