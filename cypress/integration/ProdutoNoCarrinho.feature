Feature: Colocar produto no carrinho

Como usuario da plataforma
Desejo que seja póssivel pesquisar um produto
Para que eu possa adicionar no carrinho e analisar sua quantidade

Scenario: Encontrar produto "casinha" com filtro e colocar no carrinho
    Given que acesso o site
    And pesquiso o produto e depois filtro o preço com limite de 100 reais
    When  coloco no carrinho
    Then verifico se a quantidade do carrinho é = 1

