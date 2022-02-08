import { put } from '../axios'

export const updateCompany = async (company) => {
	try {
		const { data } = await put(`companies/${company.id}`, company)

		return data
	} catch (e) {
		console.error(e)
	}
}
