describe('My First Test', () => {
    it('Visit BDD Atlass Web', () => {
        cy.visit('http://bdd.atlasid.tech/');
        cy.url().should('eq', 'http://bdd.atlasid.tech/');
        cy.url().then(url => {
            expect(url).to.equal('http://bdd.atlasid.tech/');
        });
    });

    it('Type something in text area', (() => {
        cy.get('#inputQuote').type('Something to think about, if you know what to say..')

        cy.get('#colorSelect').select('Yellow')
        cy.get('#buttonAddQuote').click()

        cy.get('.container div:nth-of-type(2) [name="quoteText"]').should('have.text', 'Something to think about, if you know what to say..')
        cy.get('.container div:nth-of-type(2) .panel-default').should('have.css', 'background-color', 'rgb(255, 255, 0)')
    }))
})