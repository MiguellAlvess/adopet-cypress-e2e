describe("Registration page", () => {
  it("should register a user successfully", () => {
    cy.visit("https://adopet-frontend-cypress.vercel.app/");
    cy.get('[data-test="register-button"]').click();
    cy.get('[data-test="input-name"]').type("Miguel Alves");
    cy.get('[data-test="input-email"]').type("miguelteste983213@gmail.com");
    cy.get('[data-test="input-password"]').type("Me12345678");
    cy.get('[data-test="input-confirm-password"]').type("Me12345678");
    cy.get('[data-test="submit-button"]').click();
  });
});
