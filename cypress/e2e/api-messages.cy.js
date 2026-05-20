describe("API messages", () => {
  it("should user can access all messages", () => {
    const authorization = Cypress.env("authorization");

    cy.request({
      method: "GET",
      url: "https://adopet-api-i8qu.onrender.com/mensagem/7cbc3cbb-8236-47ae-8600-3fb9667ddb87",
      headers: {
        Authorization: `Bearer ${authorization}`,
      },
    }).then((response) => {
      expect(response.status).to.equal(200);
      expect(response.body).to.not.be.empty;
      expect(response.body).to.have.property("msg");
    });
  });
});
