import Form from '../../src/components/Form';

describe('Form component testing', () => {
  it('playground', () => {
    cy.mount(<Form />);
    cy.get('[data-aid=USER_NAME]').type('Sushil');
    cy.get('[data-aid=SUBMIT_FORM]').should('be.visible');
  });
})