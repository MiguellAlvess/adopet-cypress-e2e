describe("Login page", () => {
  beforeEach(() => {
    cy.visit("https://adopet-frontend-cypress.vercel.app");

    cy.get('[data-test="login-button"]');

    cy.intercept(
      "POST",
      "https://adopet-api-i8qu.onrender.com/adotante/login",
      {
        statusCode: 400,
      },
    ).as("stubPost");
  });
  it("should login a user successfully", () => {
    cy.login("miguelteste983213@gmail.com", "Me12345678");
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
  it("should display an error even if the fields are correct", () => {
    cy.login("miguelteste983213@gmail.com", "Me1234567");
    cy.wait("@stubPost");
    cy.contains("Falha no login. Consulte suas credenciais").should(
      "be.visible",
    );
  });
});
