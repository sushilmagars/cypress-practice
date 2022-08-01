describe('empty spec', () => {
  it('passes', () => {
    cy.visit('websites.godaddy.com');
    cy.get('#login-link', { timeout: 10000 }).click();
    cy.get('#label-username').type('n5z');
    cy.get('#label-password').type('Fullerton2020!');
    cy.get('#submitBtn').click();
  })
})