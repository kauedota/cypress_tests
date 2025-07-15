describe('Cadastro de novo usuário', () => {
  it('deve criar uma conta com sucesso', () => {
    // 1. Acessa o site
    cy.visit('https://automationexercise.com/');

    // 2. Clica em "Signup / Login"
    cy.contains('Signup / Login').click();

    // 3. Verifica que a tela de cadastro apareceu
    cy.contains('New User Signup!').should('be.visible');

    // 4. Preenche nome e email (email precisa ser único)
    const nome = 'Teste Cypress';
    const email = `teste_${Date.now()}@email.com`; // email único

    cy.get('[data-qa="signup-name"]').type(nome);
    cy.get('[data-qa="signup-email"]').type(email);
    cy.get('[data-qa="signup-button"]').click();

    // 5. Preenche o formulário de cadastro
    cy.get('#id_gender1').check(); // Sr.
    cy.get('#password').type('senha123');

    cy.get('#days').select('10');
    cy.get('#months').select('May');
    cy.get('#years').select('1990');

    // Marcar newsletter e ofertas
    cy.get('#newsletter').check();
    cy.get('#optin').check();

    // Dados de endereço
    cy.get('#first_name').type('Cypress');
    cy.get('#last_name').type('Tester');
    cy.get('#company').type('Empresa X');
    cy.get('#address1').type('Rua de Teste, 123');
    cy.get('#address2').type('Complemento A');
    cy.get('#state').type('São Paulo');
    cy.get('#city').type('São Paulo');
    cy.get('#zipcode').type('12345678');
    cy.get('#mobile_number').type('11999999999');

    // 6. Clica em "Create Account"
    cy.get('[data-qa="create-account"]').click();

    // 7. Valida se apareceu a mensagem de sucesso
    cy.contains('Account Created!').should('be.visible');

    // 8. Clica em "Continue"
    cy.get('[data-qa="continue-button"]').click();

    // 9. Valida se está logado
    cy.contains('Logged in as').should('be.visible');

    // 10. Faz logout
    cy.contains('Logout').click();

    // 11. Confirma que voltou para a tela de login
    cy.url().should('include', '/login');
  });
});
