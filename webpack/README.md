"dependencies": {

  "react": "^15.5.4", // lib de construção de interfaces

  "react-dom": "^15.5.4", // para conectar o react ao dom do navegador

  "react-redux": "^5.0.5", // para conectar o react ao redux

  "react-router": "^3.0.2", // lib de rotas para o react

  "redux": "^3.6.0", // lib de container de estados global

  "redux-persist": "^4.8.0", // para armazenar o estado do redux no localStorage

  "redux-persist-transform-compress": "^4.2.0" // para criptografar o localStorage de redux

},

"devDependencies": {

  "babel-cli": "^6.24.1", // core do babel

  "babel-core": "^6.24.1", // core do babel

  "babel-eslint": "^7.2.3", // lint para sintaxe do babel com es6 es7 etc

  "babel-loader": "^7.0.0", // para usar babel como loader no webpack

  "babel-plugin-import": "^1.2.1", // para importar

  "babel-plugin-module-resolver": "^2.7.1", // para usar alias no loader do babel

  "babel-plugin-react-css-modules": "^3.1.1", // para usar css modules no react

  "babel-plugin-transform-decorators-legacy": "^1.3.4", // para usar decorators, feature do es8

  "babel-plugin-transform-runtime": "^6.23.0",

  "babel-polyfill": "^6.23.0", // possibilita novas features de JS no webpack

  "babel-preset-env": "^1.5.1", // para usar es6 es7 etc

  "babel-preset-react": "^6.24.1", // para usar jsx

  "babel-preset-stage-0": "^6.24.1", // para usar features do JS que ainda estão no stage 0

  "babel-runtime": "^6.23.0", // possibilita novas features de JS no webpack

  "chai": "^4.1.0", // bdd

  "chai-enzyme": "^0.8.0", // enzyme com bdd

  "clean-webpack-plugin": "^0.1.16", // limpa a pasta de build antes de rebuildar

  "cross-env": "^5.0.0", // para manipulação de variáveis de ambiente entre sistemas operacionais

  "css-loader": "^0.28.2", // para o webpack interpretar css

  "enzyme": "^2.8.2", // para testar componentes de react

  "es6-promise": "^4.1.0", // pollyfil de promise

  "eslint-config-defaults": "^9.0.0",

  "eslint-loader": "^1.7.1", // loader do eslint para webpack

  "eslint-plugin-react": "^7.0.1", // loader de lint de react

  "extract-text-webpack-plugin": "^2.1.0", // extrai imports de css do js num arquivo .css

  "file-loader": "^0.11.1", // loader de arquivos como imagens e fontes

  "html-webpack-plugin": "^2.28.0", // gera um html final a partir de um arquivo de template, como ejs

  "identity-obj-proxy": "^3.0.0", // cria mocks para parar os erros do jest

  "immutable": "^3.8.1", // lib para trabalhar com imutabilidade

  "isomorphic-fetch": "^2.2.1", // pollyfil da api fetch do navegador

  "jest": "^20.0.4", // framework de tdd

  "node-sass": "^4.5.3", // para o node entender o sass

  "path": "^0.12.7", // resolve as barras de urls entre sistemas operacionais

  "postcss-scss": "^1.0.2", // interpreta CSS in JS

  "prop-types": "^15.5.10", // para usar prop-types no react, agora é uma lib separada

  "react-addons-test-utils": "^15.5.1", // para fazer alguns testes básicos em componentes

  "react-hot-loader": "^3.0.0-beta.6", // atualiza a página sem dar reload no navegador

  "react-test-renderer": "^15.5.4", // para fazer alguns testes básicos em componentes

  "sass-lint": "^1.10.2", // lint para sass

  "sass-loader": "^6.0.5", // loader de sass

  "sasslint-webpack-plugin": "^1.0.4", // configurar lint no webpack

  "sinon": "^2.4.1", // ajuda em testes com spy

  "semistandard-loader": "^0.0.4", // lint com regras pré definidas

  "style-loader": "^0.18.0", // interpreta imports de css inserindo-os numa tag style

  "sw-precache-webpack-plugin": "^0.9.2", // service worker

  "url-loader": "^0.5.8", // loader de mídias de áudio e vídeo

  "webpack": "^3.5.3", // module bundler

  "webpack-dev-server": "^2.7.1" // server para webpack

}