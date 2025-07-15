describe('Finalizar compra completa após login', () => {
  it('deve logar, adicionar produto ao carrinho e concluir pedido', () => {
    // 1. Visita o site
    cy.visit('https://automationexercise.com/');

    // 2. Acessa a página de login
    cy.contains('Signup / Login').click();

    // 3. Faz login com dados válidos
    cy.get('[data-qa="login-email"]').type('kaueteste@gmail.com');
    cy.get('[data-qa="login-password"]').type('kauedota123');
    cy.get('[data-qa="login-button"]').click();

    // 4. Confirma login
    cy.contains('Logged in as').should('be.visible');

    // 5. Vai para a página de produtos
    cy.contains('Products').click();

    // 6. Adiciona primeiro produto ao carrinho
    cy.get('.product-overlay').first().invoke('show');
    cy.contains('Add to cart').first().click();

    // 7. Clica em "View Cart"
    cy.contains('View Cart').click();

    // 8. Clica em "Proceed To Checkout"
    cy.contains('Proceed To Checkout').click();

    // 9. Verifica que está na página de entrega e resumo
    cy.contains('Review Your Order').should('be.visible');

    // 10. Adiciona um comentário no pedido
    cy.get('textarea[name="message"]').type('Pedido automatizado via Cypress.');

    // 11. Clica em "Place Order"
    cy.contains('Place Order').click();

    // 12. Preenche os dados do cartão de crédito (fake)
    cy.get('[data-qa="name-on-card"]').type('Teste Cypress');
    cy.get('[data-qa="card-number"]').type('4111111111111111');
    cy.get('[data-qa="cvc"]').type('123');
    cy.get('[data-qa="expiry-month"]').type('12');
    cy.get('[data-qa="expiry-year"]').type('2028');

    // 13. Clica em "Pay and Confirm Order"
    cy.get('[data-qa="pay-button"]').click();

    // 14. Verifica mensagem de sucesso
    cy.contains('Your order has been confirmed!').should('be.visible');

    // 15. Logout
    cy.contains('Logout').click();
  });
});
