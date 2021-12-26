const locators = require('../locators/homepage-locators')

// class HomePage {
//     navigate() {
//         cy.visit('http://bdd.atlasid.tech/');
//     }

//     inputText(inputText) {
//         cy.get(locators.inputQuote).type(inputText)
//     }

//     selectOption(color) {
//         cy.get(locators.selectColor).select(color)
//     }

//     clickSubmitButton() {
//         cy.get(locators.buttonSubmit).click()
//     }

//     assertQuote(equalText) {
//         cy.get(locators.textQuote).should('have.text', equalText)
//     }

//     assertColor(equalColor) {
//         cy.get('.container div:nth-of-type(2) .panel-default').should('have.css', 'background-color', 'rgb(255, 255, 0)')
//     }
// }


class HomePage {
    navigate() {
        cy.visit('http://bdd.atlasid.tech/');
    }

    inputText() {
        cy.get('#inputQuote').type('Something')
    }

    selectOption() {
        cy.get('#colorSelect').select('White')
    }

    clickSubmitButton() {
        cy.get('#buttonAddQuote').click()
    }
}

module.exports = HomePage;