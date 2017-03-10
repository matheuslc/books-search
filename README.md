# Books Search

Este é um projeto feito utilizando as seguintes tecnologias

* React.js
* Redux
* Sass
* webpack

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
* Usar o coneito de adapters para o storage.
* Melhorar a UI (muito).
* A estrutura de pastas foi pensada para uma aplicação pequena. Caso cresça, mudar para uma estrutura de módulos.
* Melhorar o estado de loading com elementos "Fake" (que descrevem o original mas sem o conteúdo).
* Dispersar a responsabilidade de fazer o load do "seu estilo" para cada componente.
