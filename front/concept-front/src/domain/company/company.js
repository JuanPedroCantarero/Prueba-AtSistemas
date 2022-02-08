export class Company {
	id = null
	name = ''
	country = ''
	createYear = null
	employees = null
	rating = null
	movies = []

	constructor({ id, name, country, createYear, employees, rating, movies }) {
		this.id = id ? id : this.id
		this.name = name ? name : this.name
		this.country = country ? country : this.country
		this.createYear = createYear ? createYear : this.createYear
		this.employees = employees ? employees : this.employees
		this.rating = rating ? rating : this.rating
		this.movies = movies ? movies : this.movies
	}
}
