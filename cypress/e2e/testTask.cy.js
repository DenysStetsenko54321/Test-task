describe('test task for QA Automation position', () => {
  it('test task', () => {
    
    cy.visit('https://demo.vercel.store')

    cy.contains('New Arrivals').click({force: true})
    cy.contains('ACME Cup').click()
    cy.contains('Accept cookies').click()
    cy.get('[aria-label="Add to Cart"]').click()
    cy.get('.Quantity_actions__C9fVt').eq(2).click({force: true})
    cy.get('.Quantity_actions__C9fVt').eq(2).click({force: true})
    cy.get('.Quantity_actions__C9fVt').eq(2).click({force: true})
    cy.get('.Quantity_actions__C9fVt').eq(2).click({force: true})
    cy.get('[class="flex justify-between border-t border-accent-2 py-3 font-bold mb-2"]').should('contain', '125')
    cy.get('[aria-label="Close"]').click()
    cy.contains('Featured').click({force: true})
    cy.get('[alt="Quarter Zip"]').click()
    cy.get('[aria-label="size m"]').click()
    cy.get('[aria-label="Add to Cart"]').click()
    cy.get('[class="px-4 sm:px-6 flex-1"]').should('contain', 'Quarter Zip')
    cy.get('[class="px-4 sm:px-6 flex-1"]').should('contain', 'ACME Cup')
    cy.get('.mx-2').eq(1).should('contain', 'M')
    cy.get('[class="flex justify-between border-t border-accent-2 py-3 font-bold mb-2"]').should('contain', '215')
    cy.contains('Proceed to Checkout').click()
    cy.get('[placeholder="Email or mobile phone number"]').type('+380999999999')
    cy.get('[placeholder="First name (optional)"]').type('test')
    cy.get('[placeholder="Last name"]').type('testenko')
    cy.get('[placeholder="Address"]').type('1 Khreschatyk street')
    cy.get('[placeholder="Apartment, suite, etc. (optional)"]').type('17')
    cy.get('[placeholder="City"]').type('Kyiv')
    cy.get('[placeholder="Postal code"]').type('12345')
    cy.get('[data-continue-button-content="true"]').click({force: true})
    cy.get('.input-radio').eq(1).click()
    cy.get('#continue_button').click()
    cy.get('#blank-slate').should('contain', 'This store can’t accept payments right now.')
  })
})




