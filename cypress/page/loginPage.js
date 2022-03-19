class LoginPage {
  loginUser(userName, userPassword) {
    cy.contains('Login').should('be.visible').click();
    cy.get('input[name="email"]').should('be.visible').type(userName).should('have.value', userName);
    cy.get('input[name="password"]').should('be.visible').type(userPassword).should('have.value', userPassword);
    cy.get('button[type="submit"]').should('be.visible').click();
  }
}
export default LoginPage;
