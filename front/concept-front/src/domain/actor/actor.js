export class Actor {
	id = null
	first_name = ''
	last_name = ''
	gender = ''
	bornCity = ''
	birthdate = null
	img = null
	rating = null
	movies = []

	constructor({ id, first_name, last_name, gender, bornCity, birthdate, img, rating, movies }) {
		this.id = id ? id : this.id
		this.first_name = first_name ? first_name : this.first_name
		this.last_name = last_name ? last_name : this.last_name
		this.gender = gender ? gender : this.gender
		this.bornCity = bornCity ? bornCity : this.bornCity
		this.birthdate = birthdate ? birthdate : this.birthdate
		this.img = img ? img : this.img
		this.rating = rating ? rating : this.rating
		this.movies = movies ? movies : this.movies
	}
}
