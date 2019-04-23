# Boilerplate com Webpack, React, Redux, Sass, CSS Modules, Jest, Storybook, Flow etc.


## Instalação

### Antes de tudo

Você deve instalar em seu PC:

* Git: https://git-scm.com/
* Node (v8.9.0 ~ 9.5.0): https://nodejs.org/en/
* Sass: http://sass-lang.com/install

### Dependências globais

Instale todas essas dependências globais através do terminal:

```cmd
npm i -g babel-eslint@8.2.1 cross-env@5.0.0 identity-obj-proxy@3.0.0 jest@22.3.0 standard@11.0.0-beta.0 webpack@3.11.0 webpack-cli@2.0.4 webpack-dev-server@2.11.1 windows-build-tools@2.2.1 yarn@1.3.2
```

### Clonar repositório

Vá para o diretório que você quer que fique o seu projeto e rode este comando:

```cmd
git clone https://github.com/rafaelmaruta/webpack-react-redux-sass-css-modules-jest-storybook-flow
```

### Instale o projeto

Vá para a pasta `/webpack-react-redux-sass-css-modules-jest-storybook-flow` e rode `yarn` no terminal

## Como rodar o projeto

Vá para `/webpack-react-redux-sass-css-modules-jest-storybook-flow` e rode `yarn start` no terminal

Após estes comandos acesse pelo seu navegador http://localhost:8080

## Yarn scripts

Lista de todos os yarn scripts:

```JSON
{
    "scripts": {
        "start": "Roda o projeto em http://localhost:8080",
        "build": "Builda o projeto que está dentro da pasta /dist. Eu recomendo o uso do Python's SimpleHTTPServer",
        "test": "Testa o código",
        "test:watch": "Abre um painel no terminal para assistir e executar os testes",
        "storybook": "Run the storybook in http://localhost:6006",
        "build-storybook": "Build the storybook"
    }
}

```
