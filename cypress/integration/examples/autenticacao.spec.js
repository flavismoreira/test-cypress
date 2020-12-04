describe("autenticacao", () => {

  it("senha invalida", () => {
    const senhaInvalida = {				
      Email: "flavia_mf@icloud.com",
      Senha: "senhainvalida"
    };
    cy.login(senhaInvalida);
    cy.alertaLoginInvalido(senhaInvalida);
  });

  it("email invalido", () => {
    const emailInvalido = {				
      Email: "flavia_mficloud.com",
      Senha: "141102"
    };
    cy.login(emailInvalido);
    cy.alertaLoginInvalido(emailInvalido);
  });

  it("conta existente", () => {
    cy.get("#email_create").type("flavia_mf@icloud.com")
    cy.alertaLoginInvalido();
  });

  it("login valido", () => {
    const loginValido = {				
      Email: "flavia_mf@icloud.com",
      Senha: "141102"
    };
    cy.login(loginValido);
    cy.alertaLoginValido(loginValido)
    cy.get(".logout").click();
  });
})
    
  