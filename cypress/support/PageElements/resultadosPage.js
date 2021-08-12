/// <reference types="Cypress"/>

import TestElementos from "../ElementsPage/Elementos";
const elementos = new TestElementos;

class ResultadoPage{
    
    filtroPreco(){
        cy.get(elementos.filtro50_100()).click();
    }

    clicaNoProduto(){
        cy.get(elementos.produto()).click();
    }

    clicaAddCarrinho(){
        cy.get(elementos.botaoCarrinho()).click();
    }
}

export default ResultadoPage;