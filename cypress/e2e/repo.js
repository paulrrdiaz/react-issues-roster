describe("Repo", () => {
  it("should update the current repo", () => {
    const newRepo = "facebook/create-react-app";

    cy.visit("/repo");
    cy.findByLabelText(/Update Repo/i)
      .clear()
      .type(newRepo);
    cy.findByRole("button").click();
    cy.url().should("eq", "http://localhost:3000/");
    cy.findByTestId("current-repo").should("include.text", newRepo);
  });
});
