describe("API messages", () => {
  const authorization =
    "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI3Y2JjM2NiYi04MjM2LTQ3YWUtODYwMC0zZmI5NjY3ZGRiODciLCJhZG9wdGVyTmFtZSI6Ik1pZ3VlbCBBbHZlcyIsImlhdCI6MTc3OTI5NDYzNywiZXhwIjoxNzc5NTUzODM3fQ.2jVSC5rmiOFPdvp_gG7P9dezfz27Yo_F_gYF9nPvUcE";

  it("should user can access all messages", () => {
    cy.request({
      method: "GET",
      url: "https://adopet-api-i8qu.onrender.com/mensagem/7cbc3cbb-8236-47ae-8600-3fb9667ddb87",
      headers: {
        Authorization: authorization,
      },
    }).then((response) => {
      expect(response.status).to.equal(200);
      expect(response.body).to.not.be.empty;
      expect(response.body).to.have.property("msg");
    });
  });
});
