describe('Remover item do carrinho', () => {
  it('deve adicionar e depois remover o item do carrinho', () => {
    // 1. Visita o site
    cy.visit('https://automationexercise.com/');

    // 2. Vai até a página de produtos
    cy.contains('Products').click();

    // 3. Verifica que está na página de produtos
    cy.url().should('include', '/products');
    cy.contains('All Products').should('be.visible');

    // 4. Passa o mouse sobre o primeiro produto e clica em "Add to cart"
    cy.get('.product-overlay').first().invoke('show'); // mostra o botão
    cy.contains('Add to cart').first().click();

    // 5. Clica em "View Cart"
    cy.contains('View Cart').click();

    // 6. Valida que o produto está no carrinho
    cy.url().should('include', '/view_cart');
    cy.get('.cart_description').should('be.visible');

    // 7. Clica no botão de remover (ícone X)
    cy.get('.cart_delete a').first().click();

    // 8. Aguarda a remoção e valida que o carrinho está vazio
    cy.contains('Cart is empty!').should('be.visible');
  });
});
