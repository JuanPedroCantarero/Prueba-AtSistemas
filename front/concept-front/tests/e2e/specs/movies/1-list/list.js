// https://docs.cypress.io/api/introduction/api.html

describe('List test', () => {
	it('Visits movie page', () => {
		cy.visit('http://localhost:8080/movies')
		cy.get('#movie-list')
	})

	it('Has more than one movie', () => {
		cy.get('#movie-list').children().its('length').should('be.gte', 1)
	})

	it('Has a button to create', () => {
		cy.get('#add-movie').get('.flex > .fas.fa-plus')
	})

	it('Can click movie and navigate', () => {
		cy.get('#movie_1').click()
		cy.url().should('include', '/detail')
	})
})
