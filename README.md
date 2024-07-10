# API Adoceirinha - Frontend

Este projeto estabelecer controles de uma confeitaria, onde fará o cadastro do portfólio de produtos, controle de produção, custos de fabricação e venda do produto de forma online. 

Tem por objetivo subsidiar os gestores com informações de caracter gerencial, visando avaliar e estabelecer preços que façam frente a concorrência e que proporcionem continuidade e crescimento.


## Servidor de desenvolvimento

Este projeto foi gerado com [Angular CLI](https://github.com/angular/angular-cli) version 16.2.6.

Para rodar o projeto instale e configure o node 
disponível no [link](https://nodejs.org/en)

Após isso, no diretório do projeto, execute:
Run `npm i`
Este comando irá instalar as dependencias do projeto

E posteriormente, para iniciar o servidor:
Run `npm start`

Abra http://localhost:4200/ ah no navegador para verificar o status da API em execução.


## Como executar através do Docker

Certifique-se de ter o [Docker](https://docs.docker.com/engine/install/) instalado e em execução em sua máquina.

Navegue até o diretório que contém o Dockerfile no terminal e seus arquivos de aplicação e
Execute **como administrador** o seguinte comando para construir a imagem Docker:

```
$ docker build -t api-adoceirinha-frontend-sp03 .
```

Uma vez criada a imagem, para executar o container basta executar, **como administrador**, seguinte o comando:

``` 
$ docker run -d -p 4200:80 api-adoceirinha-frontend-sp03
```

Uma vez executando, para acessar o front-end, basta abrir o [http://localhost:4200/#/](http://localhost:4200/#/) no navegador.

