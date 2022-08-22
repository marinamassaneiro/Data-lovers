# Data Lovers

**Objetivo principal:** 

Criar uma página para visualizar um conjunto de dados que se adeque às necessidades do nosso usuário, além da visualização a página deve permitir filtrá-los, ordená-los e fazer algum cálculo agregado, a fim de tirarmos uma mínima ou média das informações mais relevantes para o usuário.

Para isso devemos entender quem é o usuário que busca esse tipo de informação, o que ele precisa saber e ver. (Pesquisar sobre história de usuário)

Dados escolhidos:

* [Studio Ghibli](src/data/ghibli/ghibli.json).
  Lista de animações e personagens do [Studio Ghibli](https://ghiblicollection.com/).
  - [Pesquisa com seguidores de Studio Ghibli](src/data/ghibli/README.pt-BR.md)

## 1. **Apresentação** ✨ 

O projeto apresenta o universo dos Studio Ghibli a partir de 20 longas, suas sinopses, informação de personagens, locais e veículos únicos. Na página é possível filtrar os filmes por minutagem, onde será possível escolher um filme que caiba no seu tempo disponível. Ordená-los por nota e visualizar os filmes que possuem uma maior aceitação pelo público. Com isso, a pessoa usuária terá a possibilidade de analisar os filmes que já visualizou ou mesmo decidir qual próximo filme gostaria de assistir.

Como ideia inicial focamos na construção de uma página única com a função de exibir os pôsteres dos filmes e informações detalhadas de cada um deles. Proposta suficiente para atender as necessidades da nossa *História de Usuário 1*. Desta ideia surgiu nosso protótipo inicial de baixa e alta fidelidade.

Produto inicial:
- Catálogo completo;
- 2 opções de filtro.

### 1.1 **História de Usuário 1**
>Como usuário quero escolher um filme pela duração para que caiba no meu tempo livre atual.

Critérios de aceitação:
- filtro para minutos

Elementos:
- inserir minutagem na base de dados (duração);
- opção de filtro;
- comunicação com os novos dados;

Definição de pronto:
- o código está de acordo com o guia e estilos;
- o código está no repositório;
- o código tem e passa os testes necessários;
- o código foi feito, ao menos em parte, em pair programming e/ou feito em code review;
- a história implementada foi testada com, pelo menos 3 usuários, e foram incorporados os melhoramentos necessários identificados nos testes de usabilidade.
### 1.2 Protótipo de Baixa Fidelidade
<img src="https://github.com/marinamassaneiro/Data-lovers/blob/readme/src/img/Readme/baixa%20fidelidade%20mobile.png" width = 200>      <img src="https://github.com/marinamassaneiro/Data-lovers/blob/readme/src/img/Readme/baixa%20fidelidade%20desktop.png" width = 350>

### 1.3 Protótipo de Alta Fidelidade

## 2. **Ampliação da Proposta Inicial**
De modo a atender *histórias de usuários* mais detalhadas, assim como tornar a navegabilidade mais fluída optamos por dividir as informações (filmes, personagens e veículos/locais) em páginas específicas.

- 🏠 **Home** com uma breve introdução do projeto e uma apresentação de dados numérico sobre os dados apresentados, tais como a quantidade de filmes, personagens, veículos e locais apresentados nas páginas seguintes. 

- 🎬 **Filmes:** apresenta os 20 longas presentes na base de dados e ao clicar em cada um dos banners é possível adquirir informações como sinopse do filme, direção, tempo de duração, nota e quantidade de personagens envolvidos na história. Nessa página é possível ordernar os filmes por nota de avaliação de forma decrescente e filtra-los por tempo de duração.

- 🦸🏾‍♀️ **Personagens:** apresenta informações sobre personagens do filme escolhidos, tais como: foto, nome, gênero, idade e raça.

- 🛩️🏞️ **Veículos e Locais:** apresenta os locais descritos onde os filmes estão ambientados e os veículos particulares adotados em alguns desses filmes com foto, nome do filme e nome do local/veículo. Nessa página é possível filtrar a visualização apenas por veículos ou por locais.

### 2.1 **História de Usuário 2**
> Como pessoa usuária quero ler a sinopse do filme para tomar a decisão de qual assistir.

Critérios de aceitação:
- ao clicar no filme surge um pop-up com suas informações, incluindo sinopse.

Elementos:
- Comunicação com os novos dados;
- caixa pop up (modal);

Definição de pronto
- o código está de acordo com o guia e estilos;
- o código está no repositório;
- o código tem e passa os testes necessários;
- o código foi feito, ao menos em parte, em pair programming e/ou feito em code review;

### 2.2 **História de Usuário 3**
>Como pessoa usuária gostaria de saber visualizar informações de personagens do filme que assisti para aprender o nome de todos.


~~A ideia é de um catálogo dos filmes do Studio Ghibli (como exemplo o site IMDB), o usuário terá a possibilidade de marcar se já viu determinado filme ou mesmo utilizar o site para decidir qual próximo filme gostaria de assistir. Com filtragens como: minutagem (no banco de dados fornecido essa informação não consta, buscaremos entender se é possível inseri-la), filme com mais personagens femininos, filme com um personagem específico, filmes com menos ou mais personagens humanos, nota.

Produto inicial:
- Catálogo completo;
- 2 opções de filtro
- botão para efetivar a filtragem (?)

Ideias produto: 
- top 5 filmes com melhor pontuação; 
- Saber mais sobre os personagens;
- linha do tempo dos filmes;
- comunicação com o usuário (input de nome, cor do olho, cabelo e pele que gera o seu proprio card) - sugestão: avatar que insere as características do input;

Ideias design:
- cabeçalho com imagem de todos os personagens juntos ou montagem dos cartazes;~~

## 2. Protótipos de baixa fidelidade:

<img src="https://github.com/marinamassaneiro/Data-lovers/blob/readme/src/img/Readme/baixa%20fidelidade%20mobile.png" width = 200>      <img src="https://github.com/marinamassaneiro/Data-lovers/blob/readme/src/img/Readme/baixa%20fidelidade%20desktop.png" width = 350>

## 3. Histórias de Usuário:

Definição de pronto:
- o código está de acordo com o guia e estilos;
- o código está no repositório;
- o código tem e passa os testes necessários;
- o código foi feito, ao menos em parte, em pair programming e/ou feito em code review;
- a história implementada foi testada com, pelo menos 3 usuários, e foram incorporados os melhoramentos necessários identificados nos testes de usabilidade.

### História 1: 
#### Como usuário quero escolher um filme pela duração para que caiba no meu tempo livre atual.

Critérios de aceitação:
- filtro para minutos

Elementos:
- inserir dado no banco (minutos);
- opção de filtro;
- comunicação com os novos dados;
- possibilidade de ordenar o resultado por nota/ano (prioridade baixa);

Definição de pronto()

### História 2: 
##### Como usuário quero ler a sinopse do filme para tomar a decisão de qual assistir.

Critérios de aceitação:
- ao clicar no filme surge um pop-up com os detalhes, incluindo sinopse.

Elementos:
- Comunicação com os novos dados;
- caixa pop up (modal);

Definição de pronto()

### História 3: 
#### Como pessoa usuária gostaria de escolher um filme onde as personagens principais são mulheres e crianças, para discutir gênero com minha filha. (Adulto)

Critérios de aceitação:
- filtro para idade e gênero;
- o usuário consegue selecionar tanto idade quanto gênero nos filtros;
- campo para exibição dos filmes que se encaixam nos filtros;
- ao dar o ok da seleção os filmes que não se encaixam no filtro sairão do catálogo; 

Elementos:
- Barra de rolagem;
- Botão para efetivar a filtragem (?)
- Comunicação com os dados;

Definição de pronto()

## 4. Estrutura dos Dados:

Passo a passo do algoritmo:
- Iterar o objeto para capturar os nome de cada filme (chave title e seu valor) e seu poster (chave poster e seu valor - src da img) correspondente para gerar a miniatura no catálogo geral da página principal.

#### Card Filme:
<img src="https://github.com/marinamassaneiro/Data-lovers/blob/readme/src/img/Readme/CardFilme.png" width = 450>

Ideia de como criar o cartão:
- Criar a estrutura do card ampliado em html e estilizar no css;
- Capturar os valor das chaves (ex: description, director, poster, release_date, rt_score) e inserí-los em campos específicos do html (innerHTML);
- realizar uma contagem de elementos do array (ex: people) para gerar a contagem de personagens do filme;
- realizar um count unique dos valores (ex: specie de personagens no array people) para ver quais espécies há naquele filme;

## 5. Protótipos de alta fidelidade:

<img src="https://github.com/marinamassaneiro/Data-lovers/blob/readme/src/img/Readme/Pagina%20incial%20-%20expandido.png" width = 600><br>
<img src="https://github.com/marinamassaneiro/Data-lovers/blob/readme/src/img/Readme/Filmes%20-%20expandido.png" width = 400>     <img src="https://github.com/marinamassaneiro/Data-lovers/blob/readme/src/img/Readme/Modal%20-%20vers%C3%A3o%20final.png" width = 400><br>
<img src="https://github.com/marinamassaneiro/Data-lovers/blob/readme/src/img/Readme/Personagens%20-%20expandido.png" width = 400>     <img src="https://github.com/marinamassaneiro/Data-lovers/blob/readme/src/img/Readme/Locais%20e%20Veiculos%20-%20expandido.png" width = 400>
