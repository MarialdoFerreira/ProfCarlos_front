#utilizando a imagem do node para criação do seu ambiente
FROM node:alpine

#cria a pasta do aplicativo
WORKDIR /usr/src/app

#copia seus arquivos para a pasta do aplicativo
COPY . /usr/src/app

#instala a CLI do Angular
RUN npm install -g @angular/cli

#instala as dependências do projeto
RUN npm install

#inicializa o servidor de host para o seu projeto
CMD ["ng", "serve", "--host", "0.0.0.0"]