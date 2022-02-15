import useTitle from '../../../../src/application/states/titleState'

describe('State Title', () => {
	const { setTitle, title } = useTitle()

	it('Initial state title', () => {
		expect(title.value).toStrictEqual('')
	})

	it('Calling setTitle', async () => {
		setTitle('Test title')
		expect(title.value).toStrictEqual('Test title')
	})
})
