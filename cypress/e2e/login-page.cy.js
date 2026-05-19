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
});
