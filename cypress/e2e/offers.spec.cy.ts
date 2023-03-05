import { getFirstVoteButton, getLoginModal } from 'cypress/support/util';

describe('Offers', () => {
  it('Should open the login modal when visitor attempts to vote', () => {
    cy.visit('/');
    getFirstVoteButton().click();
    expect(getLoginModal()).to.exist;
  });
});
