// ***********************************************************
// https://on.cypress.io/configuration
// ***********************************************************
/// <reference types="cypress" />
import "cypress-cloud/support";

beforeEach(() => {
  cy.intercept(
    { method: "POST", hostname: /.*events.launchdarkly.com/ },
    { body: {} }
  ).as("LDEvents");
});
