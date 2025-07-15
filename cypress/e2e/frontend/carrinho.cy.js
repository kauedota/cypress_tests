describe('Adicionar produto ao carrinho', () => {
  it('deve adicionar um produto ao carrinho e validar', () => {
    // 1. Visita o site
    cy.visit('https://automationexercise.com/');

    // 2. Clica no menu "Products"
    cy.contains('Products').click();

    // 3. Verifica se estamos na página de produtos
    cy.url().should('include', '/products');
    cy.contains('All Products').should('be.visible');

    // 4. Passa o mouse sobre o primeiro produto e clica em "Add to cart"
    cy.get('.product-overlay').first().invoke('show'); // força aparecer
    cy.contains('Add to cart').first().click();

    // 5. Espera o modal e clica em "View Cart"
    cy.contains('View Cart').click();

    // 6. Valida se o produto está no carrinho
    cy.url().should('include', '/view_cart');
    cy.get('.cart_description').should('be.visible');
    cy.contains('Blue Top').should('exist'); // nome do produto padrão

    // 7. Valida se preço e quantidade estão visíveis
    cy.get('.cart_price').should('be.visible');
    cy.get('.cart_quantity').should('contain', '1');
  });
});
