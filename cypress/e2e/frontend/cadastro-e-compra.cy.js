describe('Cadastro e compra completa de novo usuário', () => {
  it('deve registrar novo usuário, adicionar produto e finalizar pedido', () => {
    // 1. Acessa o site
    cy.visit('https://automationexercise.com/');

    // 2. Clica em Signup/Login
    cy.contains('Signup / Login').click();
    cy.contains('New User Signup!').should('be.visible');

    // 3. Preenche nome e email únicos
    const nome = 'Teste Cypress';
    const email = `teste_${Date.now()}@email.com`;

    cy.get('[data-qa="signup-name"]').type(nome);
    cy.get('[data-qa="signup-email"]').type(email);
    cy.get('[data-qa="signup-button"]').click();

    // 4. Preenche o formulário de registro
    cy.get('#id_gender1').check();
    cy.get('#password').type('senha123');

    cy.get('#days').select('10');
    cy.get('#months').select('May');
    cy.get('#years').select('1995');

    cy.get('#newsletter').check();
    cy.get('#optin').check();

    cy.get('#first_name').type('Cypress');
    cy.get('#last_name').type('Tester');
    cy.get('#company').type('Empresa X');
    cy.get('#address1').type('Rua de Teste, 123');
    cy.get('#address2').type('Bloco B');
    cy.get('#state').type('SP');
    cy.get('#city').type('São Paulo');
    cy.get('#zipcode').type('12345678');
    cy.get('#mobile_number').type('11999999999');

    cy.get('[data-qa="create-account"]').click();

    // 5. Verifica se conta foi criada
    cy.contains('Account Created!').should('be.visible');
    cy.get('[data-qa="continue-button"]').click();

    // 6. Verifica se está logado
    cy.contains('Logged in as').should('contain.text', nome);

    // 7. Vai para "Products"
    cy.contains('Products').click();
    cy.url().should('include', '/products');

    // 8. Adiciona primeiro item ao carrinho
    cy.get('.product-overlay').first().invoke('show');
    cy.contains('Add to cart').first().click();

    // 9. Clica em "View Cart"
    cy.contains('View Cart').click();
    cy.url().should('include', '/view_cart');

    // 10. Vai para checkout
    cy.contains('Proceed To Checkout').click();
    cy.contains('Review Your Order').should('be.visible');
    cy.get('textarea[name="message"]').type('Teste automatizado completo');

    // 11. Clica em "Place Order"
    cy.contains('Place Order').click();

    // 12. Preenche pagamento
    cy.get('[data-qa="name-on-card"]').type('Teste Cypress');
    cy.get('[data-qa="card-number"]').type('4111111111111111');
    cy.get('[data-qa="cvc"]').type('123');
    cy.get('[data-qa="expiry-month"]').type('12');
    cy.get('[data-qa="expiry-year"]').type('2028');
    cy.get('[data-qa="pay-button"]').click();

    // 13. Valida mensagem final
    cy.contains('Your order has been confirmed!').should('be.visible');

    // 14. Logout
    cy.contains('Logout').click();
  });
});
