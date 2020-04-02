describe("Not Found", () => {
  it("should render 'Go home' message", () => {
    cy.visit("/nowhere");
    cy.findByText(/go home/i).should("exist");
  });
});
