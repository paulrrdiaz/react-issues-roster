describe("Home", () => {
  it("ensure that no svg failed to load", () => {
    cy.visit("/");
    cy.get("svg").each(svg => expect(svg[0].clientWidth).to.not.equal(0));
  });
});

describe("Home - Header", () => {
  it("should navigate to '/repo' and update the current repo", () => {
    const newRepo = "facebook/create-react-app";
    cy.visit("/");
    cy.findByText(/Update repo/i).click();
    cy.url().should("match", /repo/);
    cy.findByLabelText(/Update Repo/i)
      .clear()
      .type(newRepo);
    cy.findByRole("button").click();
    cy.url().should("eq", "http://localhost:3000/");
    cy.findByTestId("current-repo").should("include.text", newRepo);
  });
});

describe("Home - SearchBox", () => {
  it("should show you filtered issues related to the current repo", () => {
    cy.visit("/");
    cy.findByLabelText(/want some troubles/i).type("react");
  });

  it("should render details for selected issue", () => {
    cy.visit("/");
    cy.findByTestId("details").should("not.exist");
    cy.findByLabelText(/want some troubles/i).type(
      "react{del}{downarrow}{downarrow}{downarrow}{uparrow}{enter}",
    );
    cy.findByTestId("details").should("exist");
  });

  it("should clear all info after press 'esc'", () => {
    cy.visit("/");
    cy.findByLabelText(/want some troubles/i)
      .type("react{esc}")
      .should("be.empty");
    cy.findByTestId("details").should("not.exist");
  });

  it("should clear all info after click 'clear' button", () => {
    cy.visit("/");
    cy.findByLabelText(/want some troubles/i).type("react");
    cy.findByTestId("search-box-clear").click();
    cy.findByLabelText(/want some troubles/i).should("be.empty");
    cy.findByTestId("details").should("not.exist");
  });
});
