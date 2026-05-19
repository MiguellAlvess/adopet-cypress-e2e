describe("Login page", () => {
  beforeEach(() => {
    cy.visit("https://adopet-frontend-cypress.vercel.app/");
    cy.get('[data-test="login-button"]');
  });
  it("should login a user successfully", () => {
    cy.get('[data-test="login-button"]').click();
    cy.get('[data-test="input-loginEmail"]').type(
      "miguelteste983213@gmail.com",
    );
    cy.get('[data-test="input-loginPassword"]').type("Me12345678");
    cy.get('[data-test="submit-button"]').click();
  });
  it("should display an error when trying to login a user without filling in the email field", () => {
    cy.get('[data-test="login-button"]').click();
    cy.get('[data-test="input-loginPassword"]').type("Me12345678");
    cy.get('[data-test="submit-button"]').click();
    cy.contains("É necessário informar um endereço de email");
  });
  it("should display an error when trying to login a user without filling in the password field", () => {
    cy.get('[data-test="login-button"]').click();
    cy.get('[data-test="input-loginEmail"]').type(
      "miguelteste983213@gmail.com",
    );
    cy.get('[data-test="submit-button"]').click();
    cy.contains("Insira sua senha");
  });
});
