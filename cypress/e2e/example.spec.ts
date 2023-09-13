describe("Example spec", () => {
  it("should open a page", () => {
    cy.visit("https://launchdarkly.com/");
    cy.get("a").contains("Get started").should("be.visible");
  });
});
