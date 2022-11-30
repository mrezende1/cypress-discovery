describe ('home page', () => {
    it ('home page', () => {
        cy.visit("/")
        cy.get('h1').should('have.text', "Seja um parceiro entregador pela Buger Eats")
    })
})

