describe('Teste de login com Dados Inválidos', () => {
  
  it('deve exibir mensagem de erro ao tentar logar com email/senha incorretos', () => {

// 1. Visita o site principal
 cy.visit('https://automationexercise.com/');

// 2. Clica em "Signup / Login"
 cy.contains('Signup / Login').click();

// 4. Preenche email e senha inválidos
 cy.get('[data-qa="login-email"]').type('emailfalso@teste.com');
 cy.get('[data-qa="login-password"]').type('senhaerrada');

// 5. Clica no botão de login
 cy.get('[data-qa="login-button"]').click();

// 6. Valida que a mensagem de erro aparece
 cy.contains('Your email or password').should('be.visible');
   });
});