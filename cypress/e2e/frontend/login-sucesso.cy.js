describe('Login com dados válidos e logout', () => {
  it('deve logar com sucesso e fazer logout', () => {
    // 1. Acessa o site
    cy.visit('https://automationexercise.com/');

    // 2. Clica em "Signup / Login"
    cy.contains('Signup / Login').click();

    // 3. Verifica que estamos na tela de login
    cy.contains('Login to your account').should('be.visible');

    // 4. Preenche email e senha válidos
    cy.get('[data-qa="login-email"]').type('kaueteste@gmail.com');
    cy.get('[data-qa="login-password"]').type('kauedota123');

    // 5. Clica no botão Login
    cy.get('[data-qa="login-button"]').click();

    // 6. Verifica se apareceu "Logged in as <nome>"
    cy.contains('Logged in as').should('be.visible');

    // 7. Clica em Logout
    cy.contains('Logout').click();

    // 8. Verifica que voltou pra página de login
    cy.url().should('include', '/login');
    cy.contains('Login to your account').should('be.visible');
  });
});
