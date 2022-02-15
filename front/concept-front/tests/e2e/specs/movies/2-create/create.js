const { MOCK_MOVIES } = require('../../../commons/mockMovie')

describe('Create Movie', () => {
	it('Visits new movie page', () => {
		cy.visit('http://localhost:8080/movies')
		cy.get('#add-movie').click()
		cy.get('#create-movie')
		cy.get('#create-movie-form')
	})

	it('If submit without complete fields, errors appear', () => {
		cy.get('#submit-movie').click()
		cy.get('#error-title').should('visible')
		cy.get('#error-poster').should('visible')
		cy.get('#error-genres').should('visible')
		cy.get('#error-actors').should('visible')
		cy.get('#error-company').should('visible')
		cy.get('#error-year').should('visible')
		cy.get('#error-duration').should('visible')
		cy.get('#error-imdbRating').should('visible')
	})

	it('Fill and submit new movie form', () => {
		// Fill inputs
		cy.get('#title').type(MOCK_MOVIES.title).should('have.value', MOCK_MOVIES.title)
		cy.get('#poster').type(MOCK_MOVIES.poster).should('have.value', MOCK_MOVIES.poster)
		cy.get('#year').type(MOCK_MOVIES.year).should('have.value', MOCK_MOVIES.year)
		cy.get('#duration').type(MOCK_MOVIES.duration).should('have.value', MOCK_MOVIES.duration)
		//Fill genres
		MOCK_MOVIES.genres.forEach((genre) => {
			cy.get('#genre').type(genre).should('have.value', genre)
			cy.get('#add-genre').trigger('click')
			cy.get('#genre').should('be.empty')
		})
		// Fill selects
		cy.get('#actors').click()
		cy.get('#actors .multiselect-dropdown').first().click()
		cy.get('#company').click()
		cy.get('#company .multiselect-dropdown').first().click()
		// Fill starts
		cy.get('#imdbRating .stars-outer > :nth-child(6) > path').click()

		// submit button
		cy.get('#submit-movie').click()
		// Created successfully and navigate to detail
		cy.url().should('include', '/detail')
	})

	it('Show details of movie created', () => {
		cy.get('#movie-detail')
		cy.get('#detail-movie-duration').contains(`${MOCK_MOVIES.duration} mins`)
		cy.get('#detail-movie-imdbRating').invoke('text').should('not.be.empty')
		cy.get('#detail-movie-actor-0').invoke('text').should('not.be.empty')
		cy.get('#detail-movie-company').invoke('text').should('not.be.empty')
		cy.get('#detail-movie-genre-0').invoke('text').should('not.be.empty')
	})

	it('Delete created movie ', () => {
		cy.get('#go-remove-movie').click()
		cy.get('#accept-modal').click()
		cy.url().should('include', '/movies')
		cy.get('#movie-list')
	})
})
