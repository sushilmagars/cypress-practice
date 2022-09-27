import Form from '../../src/components/Form';

describe('Form component testing', () => {
  it('should not allow user to submit form with invalid email', () => {
    cy.mount(<Form />);
    cy.get('[data-aid=USER_NAME]').type('Sushil M');
    cy.get('[data-aid=USER_EMAIL]').type('sushil');
    cy.get('[data-aid=SUBMIT_FORM]')
      .should('be.visible')
      .click();
    cy.get('.registration-form').contains('please');
  });
});
