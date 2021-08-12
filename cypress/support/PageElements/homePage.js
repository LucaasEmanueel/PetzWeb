/// <reference types="Cypress"/>

import TestElementos from "../ElementsPage/Elementos";
const elementos = new TestElementos;
const NavegadorURL = Cypress.config("baseUrl");

class HomePage{

    abrirUrl(){
        cy.visit(NavegadorURL)
    }

    pesquisarProduto(){
        cy.get(elementos.campoPesquisa()).type('casinha');
        
    }

    clicaNoBotaoPesquisa(){
        cy.get(elementos.botaoPesquisa()).click();
    }


}

export default HomePage;
