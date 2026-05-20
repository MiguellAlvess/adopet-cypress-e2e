import { users } from "../fixtures/users";

describe("Bulk user registration", () => {
  beforeEach(() => {
    cy.visit("https://adopet-frontend-cypress.vercel.app/");
    cy.get('[data-test="register-button"]').click();
  });

  users.forEach((user) => {
    it(`should register ${user.name} successfully`, () => {
      cy.get('[data-test="input-name"]').clear().type(user.name);
      cy.get('[data-test="input-email"]').clear().type(user.email);
      cy.get('[data-test="input-password"]').clear().type(user.password);
      cy.get('[data-test="input-confirm-password"]')
        .clear()
        .type(user.password);
      cy.get('[data-test="submit-button"]').click();
    });
  });
});
