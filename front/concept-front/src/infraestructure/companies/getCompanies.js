import { get } from '../axios'

export const getCompanies = async () => {
	try {
		const { data } = await get('comapnies')

		return data
	} catch (e) {
		console.error(e)
	}
}
