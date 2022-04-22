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
         cy.visit("/produtos/")
    });
        

    it('Deve fazer um pedido na loja Ebac Shop de ponta a ponta', () => {
        cy.get('[class="product-block grid"]')
        .last()
        .click()
        cy.get('.button-variable-item-XS').click()
        cy.get(':nth-child(2) > .value > .variable-items-wrapper > .variable-item').click()
        cy.get('.input-text').clear().type('1')
        cy.get('.single_add_to_cart_button').click()
        cy.visit("/produtos/")
        cy.get('[class="product-block grid"]')
        .first()
        .click()
        cy.get('.button-variable-item-XS').click()
        cy.get('.button-variable-item-Red').click()
        cy.get('.input-text').clear().type('1')
        cy.get('.single_add_to_cart_button').click()
        cy.visit("/produtos/")
        cy.get(':nth-child(2) > .page-numbers').click()
        cy.get('[class="product-block grid"]')
        .first()
        .click()
        cy.get('.button-variable-item-XS').click()
        cy.get('.button-variable-item-Black').click()
        cy.get('.input-text').clear().type('1')
        cy.get('.single_add_to_cart_button').click()
        cy.visit("/produtos/")
        cy.get(':nth-child(3) > .page-numbers').click()
        cy.get('[class="product-block grid"]')
        .first()
        .click()
        cy.get('.single_add_to_cart_button').click()
        cy.get('.dropdown-toggle > .text-skin > .icon-basket').click()
        cy.get('#cart > .dropdown-menu > .widget_shopping_cart_content > .mini_cart_content > .mini_cart_inner > .mcart-border > .buttons > .checkout').click()
        cy.get('.showlogin').click()
        cy.get('#username').type('aluno_ebac@teste.com')
        cy.get('#password').type('teste@teste.com')
        cy.get('.woocommerce-button').click()
        EntregaPage.dadosdeEntregaDaCompra('Danielle', 'Sousa', 'Magalu', 'Brasil', 'Rua Afonso Pena', '2022', 'Barueri', 'São Paulo', '06435000', '11-98765-4321', 'daniellesousa@magalu.com')
        cy.get('.woocommerce-notice').should('contain','Obrigado. Seu pedido foi recebido.')
    
    });
    
  
        
});