import HomePage from './../../support/pages/homepage'

const homepage = new HomePage();
const textTest = 'Going somewhere?'

describe('My First Test', () => {
    it('Visit BDD Atlass Web', () => {
        // cy.visit('http://bdd.atlasid.tech/');
        homepage.navigate();
        cy.url().should('eq', 'http://bdd.atlasid.tech/');
    });

    it('Type something in text area', (() => {
        // homepage.inputText(textTest)
        cy.get('#inputQuote').type('Something to think about, if you know what to say..')

        homepage.selectOption('Yellow');
        // cy.get('#colorSelect').select('White')

        homepage.clickSubmitButton();
        // cy.get('#buttonAddQuote').click()

        homepage.assertQuote('Going somewhere?dsds');
        // cy.get('.container div:nth-of-type(2) .panel-default').should('have.text', 'Something to think about, if you know what to say..').and('have.css', 'background-color', 'rgb(255, 255, 0)')
    }))
})