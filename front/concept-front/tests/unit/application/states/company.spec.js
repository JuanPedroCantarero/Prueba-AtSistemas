import useCompany from '../../../../src/application/states/company'

describe('State Company', () => {
	const { loadCompanies, resetCompanies, loadingCompanies, companies, errorCompanies } = useCompany()
	beforeEach(() => {
		resetCompanies()
	})

	it('Initial state company', () => {
		expect(loadingCompanies.value).toStrictEqual(false)
		expect(errorCompanies.value).toStrictEqual(false)
		expect(companies.value).toStrictEqual([])
	})

	it('Calling company get all service (need to back to works)', async () => {
		await loadCompanies()
		expect(companies.value.length).toBeGreaterThan(0)
	})
})
