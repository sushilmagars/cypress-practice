import Button from '../../src/components/Button';

describe('Button component testing', () => {
  it('playground', () => {
    cy.mount(<Button />);
    cy.getElementAndClick('[data-aid=FORM_BUTTON]');
  });
})