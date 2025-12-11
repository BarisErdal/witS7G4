/*describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://example.cypress.io')
  })
})
*/

describe("Login Form", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173/");
  });

  it(" Başarılı form doldurulduğunda submit edebiliyorum: success sayfasını açabiliyorum.", () => {
    cy.get('[data-cy="email"]').type("test@test.com");
    cy.get('[data-cy="password"]').type("Test123");
    cy.get('[data-cy="accept"]').check();
    cy.get('[data-cy="submit"]').should("not.be.disabled").click();

    cy.get('[data-cy="success"]').should("be.visible");
  })

    it("Yanlış email girilirse", () => {
    cy.get('[data-cy="email"]').type("test");
    cy.get('[data-cy="error-email"]').should("contain", "Geçerli bir email");
    cy.get("p").should("have.length", 1);
    cy.get('[data-cy="submit"]').should("be.disabled");
  });


    it("Email ve password yanlış girilirse", () => {
    cy.get('[data-cy="email"]').type("aaa");
    cy.get('[data-cy="password"]').type("123");
    cy.get("p").should("have.length", 2);
    cy.get('[data-cy="error-pass"]').should("contain", "Parola");
  });

  it("Checkbox seçilmediğinde", () => {
    cy.get('[data-cy="email"]').type("test@test.com");
    cy.get('[data-cy="password"]').type("Test123");

    cy.get('[data-cy="submit"]').should("be.disabled");
  });
});
