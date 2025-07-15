describe('Testes de Backend com Cypress - Fake Store API', () => {

  it('Deve retornar todos os produtos', () => {
    cy.request('/products').then((res) => {
      expect(res.status).to.eq(200);
      expect(res.body).to.be.an('array');
      expect(res.body.length).to.be.greaterThan(0);
    });
  });

  it('Deve retornar um produto específico', () => {
    cy.request('/products/1').then((res) => {
      expect(res.status).to.eq(200);
      expect(res.body).to.have.property('id', 1);
      expect(res.body).to.have.property('title');
    });
  });

  it('Deve criar um novo usuário', () => {
    cy.request({
      method: 'POST',
      url: '/users',
      body: {
        email: 'teste@teste.com',
        username: 'testadorQA',
        password: '123456',
        name: {
          firstname: 'Kaue',
          lastname: 'Dota'
        },
        address: {
          city: 'São Paulo',
          street: 'Rua 1',
          number: 123,
          zipcode: '12345-678'
        },
        phone: '11999999999'
      }
    }).then((res) => {
      expect(res.status).to.eq(200);
      expect(res.body).to.have.property('id');
    });
  });

  it('Deve simular login com sucesso', () => {
    cy.request({
      method: 'POST',
      url: '/auth/login',
      body: {
        username: 'mor_2314',
        password: '83r5^_'
      }
    }).then((res) => {
      expect(res.status).to.eq(200);
      expect(res.body).to.have.property('token');
    });
  });

});
