context('User Onboarding Emails', () => {
    it('Verification email', () => {
        cy.mhGetMailsBySubject('Test email')
            .should('have.length', 1).as("content");
        cy.get('@content').then(val => {
            cy.log(val[0].Content.Body)           // user alias is valid
        })
    })
})
