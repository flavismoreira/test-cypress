describe("Navegacao", () => {
  beforeEach(() => cy.visit(''));

  it("deve clicar na logo e ir para pagina inicial", () => {
    cy.get("#header_logo").click();
    cy.get("head title").should("contain", "My Store");
  });

  it("deve realizar uma busca no campo search", () => {
    cy.get("#search_query_top").type("pants");
    cy.get(".btn.btn-default.button-search").click();
  });
});