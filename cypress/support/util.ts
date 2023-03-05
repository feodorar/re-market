export function getFirstVoteButton() {
  return cy.get('.offer-votes button').first();
}
export function getLoginModal() {
  return cy.get('.login-modal');
}
