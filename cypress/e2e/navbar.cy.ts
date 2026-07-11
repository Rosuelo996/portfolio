describe("Navbar", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("navigates to each section from the navbar", () => {
    cy.getDataTest("nav-gallery").click();
    cy.url().should("include", "#gallery");

    cy.getDataTest("nav-projects").click();
    cy.url().should("include", "#projects");

    cy.getDataTest("nav-contact").click();
    cy.getDataTest("modal").should("exist");

    cy.getDataTest("modal-close-button").click();
    cy.getDataTest("modal").should("not.exist");

    cy.getDataTest("theme-toggle").click();
    cy.getDataTest("app").should("have.class", "dark");

    cy.getDataTest("theme-toggle").click();
    cy.getDataTest("app").should("not.have.class", "dark");
  });
});
