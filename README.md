# learningTypesscript

Repositório destinado ao aprendizado de Typescript e documentação de funções, métodos e bibliotecas.

## O que é

Typescript (TS) é um superset de Javascript (JS). Da mesma forma que Groovy é um superset de Java, Typescript é um superset de Javascript.

TS vêm com novas funcionalidades, como tipagem, genéricos, interfaces, namespaces e decorators. Novas funcionalidades de JS podem ser imediatamente usadas, pois TS traduz para JS e é possível documentar as versões que você quer usar, que são a maioria compatíveis com a maioria dos navegadores.

## Como instalar

### Instale o node

```bash

sudo apt update

sudo apt-get install nodejs

sudo apt install npm

```

#### Testando se foi bem sucedido

```bash

nodejs -v

npm -v

```

### Se você quiser usar o code runner do VScode

Te permite compilar e executar direto no VScode, precisa da extensão code runner.

```bash

sudo npm i -g ts-node

```

### Instale o Typescript

```bash

sudo npm i -g tsc #linux e mcOS

tsc -v # Checa se foi bem sucedido
```

## Compilando e executando arquivos

```bash

tsc nome_arquivo.ts # compila para JS

nodejs nome_arquivo.js # Executa o arquivo

```

### Fluxo de trabalho automatizado com o node e TS

Você pode iniciar o node package manager para cuidar das dependências sozinho com

```bash
npm init -y
```

Para compilar e rodar código no live server, use

```bash
npm i -s live-server
```

Agora, nos scripts, adicione um que chame o live-server, algo como:

```json
"scripts": {
    "start": "live-server"
}
```