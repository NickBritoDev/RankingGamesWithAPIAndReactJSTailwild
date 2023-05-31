# Readme - Aplicação Web com API do RAWG

Este é o readme para uma aplicação web desenvolvida em React JS que se conecta à API do RAWG para trazer informações sobre jogos, métricas, gêneros, banners e muito mais. O projeto também utiliza Tailwind CSS e React Icons para estilização e ícones.

## Funcionalidades

A aplicação possui as seguintes funcionalidades:

- Pesquisa de jogos: os usuários podem pesquisar por jogos específicos e obter informações detalhadas sobre eles.
- Listagem de jogos populares: exibe uma lista dos jogos mais populares do momento.
- Detalhes do jogo: permite aos usuários visualizar detalhes como a descrição, classificação, data de lançamento, desenvolvedores e plataformas suportadas para cada jogo.
- Métricas do jogo: mostra estatísticas sobre o jogo, como classificação média, avaliações e número de jogadores.
- Gêneros de jogos: lista os gêneros disponíveis e permite aos usuários filtrar os jogos com base nesses gêneros.
- Banners de jogos: exibe banners atraentes para destacar os jogos em destaque.

## Instalação e Uso

Para instalar e executar a aplicação localmente, siga as etapas abaixo:

1. Clone este repositório em sua máquina local.
2. Certifique-se de ter o Node.js e o npm (gerenciador de pacotes do Node) instalados em sua máquina.
3. Abra o terminal na pasta raiz do projeto.
4. Execute o comando `npm install` para instalar as dependências do projeto.
5. Após a conclusão da instalação, execute o comando `npm start` para iniciar o servidor de desenvolvimento.
6. Acesse `http://localhost:3000` em seu navegador para visualizar a aplicação.

## Configuração da API do RAWG

Para se conectar à API do RAWG, você precisará obter uma chave de API válida. Siga as etapas abaixo para configurar a chave de API:

1. Acesse o site do RAWG (https://rawg.io/apidocs) e crie uma conta.
2. Depois de criar uma conta, obtenha sua chave de API.
3. Crie um arquivo chamado `.env` na raiz do projeto.
4. Dentro do arquivo `.env`, adicione a seguinte linha: `REACT_APP_RAWG_API_KEY=SuaChaveDeAPI`.
5. Substitua "SuaChaveDeAPI" pela chave de API que você obteve anteriormente.

## Personalização e Estilização

A aplicação utiliza o Tailwind CSS para estilização. Para personalizar o estilo ou adicionar novas classes de estilo, você pode editar os arquivos `.css` na pasta `src/styles`. Consulte a documentação do Tailwind CSS (https://tailwindcss.com/docs) para mais informações sobre como estilizar a aplicação.

## Conclusão

Esta aplicação web desenvolvida em React JS com a API do RAWG permite aos usuários pesquisar e obter informações detalhadas sobre jogos, métricas, gêneros e banners. Com a utilização do Tailwind CSS e React Icons, é possível personalizar e estilizar a aplicação de acordo com as necessidades do projeto. Sinta-se à vontade para explorar e aprimorar a aplicação de
