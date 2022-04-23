/// <reference types="cypress" />
import EntregaPage from '..//support//page_objects/dadosentrega,page'

context('Exercicio - Testes End-to-end - Fluxo de pedido', () => {
    /*  Como cliente 
        Quero acessar a Loja EBAC 
        Para fazer um pedido de 4 produtos 
        Fazendo a escolha dos produtos
        Adicionando ao carrinho
        Preenchendo todas opções no checkout
        E validando minha compra ao final */


        beforeEach(() => {
            cy.visit('minha-conta')
            cy.fixture('perfil').then(dados => {
                cy.login(dados.usuario, dados.senha)
                cy.visit('/produtos/')
            
            })
            
       });
           
       it('Deve fazer o fluxo de compras',()=> {
           cy.comprar()
           cy.get('.woocommerce-message > .button').click()
           cy.get('.checkout-button').click()
           EntregaPage.dadosdeEntregaDaCompra('Danielle', 'Sousa', 'Magalu', 'Brasil', 'Rua Afonso Pena', '2022', 'Barueri', 'São Paulo', '06435000', '11-98765-4321', 'daniellesousa@magalu.com')
           cy.get('.woocommerce-notice').should('contain','Obrigado. Seu pedido foi recebido.')
       
    
      

    });
});
    