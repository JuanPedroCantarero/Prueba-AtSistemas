import useActors from '../../../../src/application/states/actors'

describe('State Actors', () => {
	const { resetActors, loadActorsToSelect, loadingActors, actorsToSelect, errorActors } = useActors()
	beforeEach(() => {
		resetActors()
	})

	it('Initial state actors', () => {
		expect(loadingActors.value).toStrictEqual(false)
		expect(errorActors.value).toStrictEqual(false)
		expect(actorsToSelect.value).toStrictEqual([])
	})

	it('Calling actor service (need to back to works)', async () => {
		await loadActorsToSelect()
		expect(actorsToSelect.value.length).toBeGreaterThan(0)
	})
})
