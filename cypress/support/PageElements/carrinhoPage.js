/// <reference types="Cypress"/>

import TestElementos from "../ElementsPage/Elementos";
const elementos = new TestElementos;

class CarrinhoPage{

    quantProduto(){
        return cy.get(elementos.numeroDeProdutos())
    }
}

export default CarrinhoPage;