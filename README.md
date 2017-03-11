# Books Search

Este é um projeto feito utilizando as seguintes tecnologias

* React.js
* Redux
* Sass
* webpack

# Considerações
Utilizei aqui o Redux como arquitetura da aplicação (uma grande máquina de estados com a responsabilidade de cuidar dos
estados da nossa aplicação).

A estrutura de arquivos não foi dividida em módulos pelo tamanho do projeto. Caso fosse um projeto maior, seria melhor
quebrar a estrutura da pasta em módulos e nesta pasta os componentes de cada módulo.

A ideia inicial do projeto era estiliza-lo totalmente, apenas usando um sistema de grid. Mas, trabalho, faculdade etc, me
obrigaram a usar o Bootstrap V4 (via CDN) para deixar o projeto minimamente utilizável :(

## Marcar livro como favorito
Esta funcionalidade está implementada, porém, não foi liberada para a interface. O motivo disso foi que não deu
tempo de estilizar minimamente decente a página de favoritos, então, preferi deixar escondida.
Apesar de escondida, no código é possível ver toda a implementação, desde os componentes, actions e persistência em localStorage.
A persistência no localStorage é feita com um objetos de objetos (uma tabela hash).
 A chave do objeto é o id de um livro e o valor é o objeto todo do livro.

### Mas por que isso?
Desta maneira fica fácil identificar se um livro já está marcado como favorito e também de retirá-lo. Fazendo uma analogia,
esta estrutura imita uma estrutura básica de um índice de um banco de dados.

# Como subir o ambiente de desenvolvimento?

Execute os seguintes comandos:

* npm install
* npm start

# Como gerar uma versão de produção?
* npm install
* npm run build

# Como publicar uma versão?
* npm install
* npm install -g surge
* surge (criei ou faça o login com sua conta)
* npm run build
* surge -p dist --domain <SEU DOMINIO DO SURGE>

# Rodando os testes
* npm install
* npm test

# Melhorias e comentários

Este foi um projeto de 4 dias, então, temos várias melhorias que poderiam ser implementadas aqui, como:

* Foi testado apenas o fluxo de dados, então, usando Redux, as actions e os reducers. É preciso testar os components e
mais algumas coisas.
* Usar o pattern adapter para o storage.
* Melhorar a UI (muito, muito mesmo, sério, muito).
* A estrutura de pastas foi pensada para uma aplicação pequena. Caso cresça, mudar para uma estrutura de módulos.
* Melhorar o estado de loading com elementos "Fake" (que descrevem o original mas sem o conteúdo).
* Dispersar a responsabilidade de fazer o load do "seu estilo" para cada componente.
