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
  it("should display an error when trying to create a user without filling in the email field", () => {
    cy.visit("https://adopet-frontend-cypress.vercel.app/");
    cy.get('[data-test="register-button"]').click();
    cy.get('[data-test="input-name"]').type("Miguel Alves");
    cy.get('[data-test="input-password"]').type("Me12345678");
    cy.get('[data-test="input-confirm-password"]').type("Me12345678");
    cy.get('[data-test="submit-button"]').click();
    cy.contains("É necessário informar um endereço de email");
  });
  it("should display an error when trying to create a user without filling in the password field", () => {
    cy.visit("https://adopet-frontend-cypress.vercel.app/");
    cy.get('[data-test="register-button"]').click();
    cy.get('[data-test="input-name"]').type("Miguel Alves");
    cy.get('[data-test="input-email"]').type("miguelteste983213@gmail.com");
    cy.get('[data-test="input-confirm-password"]').type("Me12345678");
    cy.get('[data-test="submit-button"]').click();
    cy.contains("Crie uma senha");
  });
  it("should display an error when trying to create a user without filling in the confirm password field", () => {
    cy.visit("https://adopet-frontend-cypress.vercel.app/");
    cy.get('[data-test="register-button"]').click();
    cy.get('[data-test="input-name"]').type("Miguel Alves");
    cy.get('[data-test="input-email"]').type("miguelteste983213@gmail.com");
    cy.get('[data-test="input-password"]').type("Me12345678");
    cy.get('[data-test="submit-button"]').click();
    cy.contains("Repita a senha criada acima");
  });
  it("should display an error when trying to create a user with incorrect email format", () => {
    cy.visit("https://adopet-frontend-cypress.vercel.app/");
    cy.get('[data-test="register-button"]').click();
    cy.get('[data-test="input-name"]').type("Miguel Alves");
    cy.get('[data-test="input-email"]').type("miguel");
    cy.get('[data-test="input-password"]').type("Me12345678");
    cy.get('[data-test="input-confirm-password"]').type("Me12345678");
    cy.get('[data-test="submit-button"]').click();
    cy.contains("Por favor, verifique o email digitado");
  });
  it("should display an error when trying to create a user with a password that is at least 6 characters long but does not include an uppercase letter", () => {
    cy.visit("https://adopet-frontend-cypress.vercel.app/");
    cy.get('[data-test="register-button"]').click();
    cy.get('[data-test="input-name"]').type("Miguel Alves");
    cy.get('[data-test="input-email"]').type("miguelteste983213@gmail.com");
    cy.get('[data-test="input-password"]').type("me12345");
    cy.get('[data-test="input-confirm-password"]').type("me12345");
    cy.get('[data-test="submit-button"]').click();
    cy.contains(
      "A senha deve conter pelo menos uma letra maiúscula, um número e ter entre 6 e 15 caracteres",
    );
  });
  it.only("should display an error when trying to create a user with a password that is at least 6 characters long but contains no numbers", () => {
    cy.visit("https://adopet-frontend-cypress.vercel.app/");
    cy.get('[data-test="register-button"]').click();
    cy.get('[data-test="input-name"]').type("Miguel Alves");
    cy.get('[data-test="input-email"]').type("miguelteste983213@gmail.com");
    cy.get('[data-test="input-password"]').type("meeeeeee");
    cy.get('[data-test="input-confirm-password"]').type("meeeeeee");
    cy.get('[data-test="submit-button"]').click();
    cy.contains(
      "A senha deve conter pelo menos uma letra maiúscula, um número e ter entre 6 e 15 caracteres",
    );
  });
});
