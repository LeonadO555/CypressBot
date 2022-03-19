class LogoutPage {
  clickMenuAndLogout() {
    cy.get('button.MuiButtonBase-root:nth-child(6) > span:nth-child(1) > svg:nth-child(1)').click();
    cy.wait(500);
    cy.contains('Logout').click();
  }
}
export default LogoutPage;
