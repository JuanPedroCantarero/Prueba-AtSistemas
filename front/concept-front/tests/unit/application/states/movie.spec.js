import useMovie from '../../../../src/application/states/movies'
import { Movie } from '../../../../src/domain/movie/movie'

describe('State Movie', () => {
	const {
		resetMovies,
		loadMovies,
		createNewMovie,
		loadMovieById,
		putMovie,
		deleteMovie,
		loadingMovies,
		movie,
		errorMovies,
		movies,
	} = useMovie()

	let idOfCreation = null
	let movieTest = new Movie({
		title: 'Test movie',
		poster: 'http://test.com',
		genre: ['fantasy', 'test'],
		year: 2003,
		duration: 120,
		company: { id: 2 },
		imdbRating: 6,
		actors: [{ id: 1, name: 'actor1' }],
	})

	beforeEach(() => {
		resetMovies()
	})

	it('Initial state movie', () => {
		expect(errorMovies.value).toStrictEqual(false)
		expect(loadingMovies.value).toStrictEqual(false)
		expect(movie.value).toStrictEqual(null)
		expect(movies.value).toStrictEqual([])
	})

	it('Calling movie get all service (need to back to works)', async () => {
		await loadMovies()
		expect(movies.value.length).toBeGreaterThan(0)
	})

	it('Calling movie create service (need to back to works)', async () => {
		const { id } = await createNewMovie(movieTest)
		idOfCreation = id
		expect(idOfCreation).not.toBe(null)
		expect(idOfCreation).toBe(id)
	})

	it('Calling movie getById service (need to back to works)', async () => {
		await loadMovieById(idOfCreation)
		expect(movie.value.id).toStrictEqual(idOfCreation)
		expect(movie.value.title).toStrictEqual(movieTest.title)
		expect(movie.value.poster).toStrictEqual(movieTest.poster)
		expect(movie.value.genre).toStrictEqual(movieTest.genre)
		expect(movie.value.year).toStrictEqual(movieTest.year)
		expect(movie.value.duration).toStrictEqual(movieTest.duration)
		expect(movie.value.company.id).toStrictEqual(movieTest.company.id)
		expect(movie.value.imdbRating).toStrictEqual(movieTest.imdbRating)
		expect(movie.value.actors.map((actor) => actor.id)).toStrictEqual(movieTest.actors.map((actor) => actor.id))
	})

	it('Calling movie put service (need to back to works)', async () => {
		const moviePut = new Movie({
			id: idOfCreation,
			title: 'Title test edited',
			poster: 'http://test-edited.com',
			genre: ['test-edited'],
			company: { id: 2 },
			year: 2300,
			duration: 160,
			imdbRating: 10,
			actors: [{ id: 2, name: 'actor2' }],
		})
		await putMovie(moviePut)
		await loadMovieById(idOfCreation)
		expect(movie.value.title).toStrictEqual(moviePut.title)
		expect(movie.value.poster).toStrictEqual(moviePut.poster)
		expect(movie.value.genre).toStrictEqual(moviePut.genre)
		expect(movie.value.year).toStrictEqual(moviePut.year)
		expect(movie.value.duration).toStrictEqual(moviePut.duration)
		expect(movie.value.company.id).toStrictEqual(moviePut.company.id)
		expect(movie.value.imdbRating).toStrictEqual(moviePut.imdbRating)
		expect(movie.value.actors.map((actor) => actor.id)).toStrictEqual(moviePut.actors.map((actor) => actor.id))
		movieTest = movie.value
	}, 15000)

	it('Calling movie deleteMovie service (need to back to works)', async () => {
		await deleteMovie(movieTest)
		expect(movie.value).toStrictEqual(null)
	})
})
