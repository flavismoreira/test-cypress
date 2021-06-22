describe("Autenticacao", () => {

  it("senha invalida", () => {
    const senhaInvalida = {				
      email: "flavia_mf@icloud.com",
      senha: "senhainvalida"
    };
    cy.login(senhaInvalida);
    cy.alertaLoginInvalido(senhaInvalida);
  });

  it("email invalido", () => {
    const emailInvalido = {				
      email: "flavia_mficloud.com",
      senha: "141102"
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
      email: "flavia_mf@icloud.com",
      senha: "141102"
    };
    cy.login(loginValido);
    cy.alertaLoginValido(loginValido)
    cy.get(".logout").click();
    //este teste deve falhar, pois nao consigui criar uma conta na plataforma
  });
})
    
  