describe("Modal", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.getDataTest("nav-contact").click();
  });

  it("check validation while filling the form", () => {
    cy.getDataTest("input-name").click().type("User Test");
    cy.getDataTest("send-button").click();
    cy.getDataTest("form-error").should("exist");

    cy.getDataTest("input-name").click().type("User Test");
    cy.getDataTest("form-error").should("not.exist");
    cy.getDataTest("send-button").click();

    cy.getDataTest("input-email").click().type("test@mail.com");
    cy.getDataTest("send-button").click();
    cy.getDataTest("form-error").should("exist");

    cy.getDataTest("input-message").click().type("Hello World!");
    cy.getDataTest("form-error").should("not.exist");

    cy.getDataTest("send-button").click();

    cy.getDataTest("modal-loading")
      .should("exist")
      .and("contain", "Sending your message...");

    cy.getDataTest("modal-success")
    .should("exist")
    .and("contain", "Message sent")
  });
});
