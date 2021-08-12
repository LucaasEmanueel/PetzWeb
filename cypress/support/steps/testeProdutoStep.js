/* global Given, When, And, Then */

import ResultadoPage from "../PageElements/resultadosPage";
import CarrinhoPage from "../PageElements/carrinhoPage";
import HomePage from "../PageElements/homePage";

const resultadoDoProd = new ResultadoPage;
const carrinho = new CarrinhoPage;
const inicioDaPag = new HomePage;

Given("que acesso o site",()=>{
    inicioDaPag.abrirUrl();
});

And("pesquiso o produto e depois filtro o preço com limite de 100 reais", () =>{
    inicioDaPag.pesquisarProduto()
    inicioDaPag.clicaNoBotaoPesquisa()
    resultadoDoProd.filtroPreco()
    resultadoDoProd.clicaNoProduto()
    
});

When("coloco no carrinho", ()=>{
    resultadoDoProd.clicaAddCarrinho()
});

Then("verifico se a quantidade do carrinho é = 1", () =>{
    carrinho.quantProduto().should('have.text', "1");
})