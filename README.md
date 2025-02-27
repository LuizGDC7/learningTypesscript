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

npm install typescript --save-dev

npx tsc --init
```

Configure o tsconfig.json, dizendo uma pasta para guardar os TS e outra para guardar os JS.

Para compilar e rodar código no live server, use

```bash
npm install npm-run-all --save-dev

npm install live-server --save-dev
```

Agora, nos scripts, adicione um que chame o live-server, algo como:

```json
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "npm-run-all --parallel live-server tsc-watch",
    "live-server": "live-server",
    "tsc-watch": "tsc --watch"
  }
```

## Documentação da linguagem

### Compilação e Erros

O código é compilado, mesmo que com erros de tipagem. Se isso não for desejado, é possível dizer para o compilador

### Operadores

#### Rest e Spread

O uso depende do contexto. Ele te permite agrupar valores em um array, ou desagrupar um array em valores. Por exemplo:

```typescript

// Spread

let valores: number[] = [1, 2, 3]

let funcao = (p1:number, p2:number, p3:number) => p1 + p2 + p3

funcao(...valores) // vai retornar 6

```

```typescript

/// Rest

let funcao = (...valores: number[]) => valores

funcao(1, 2, 3, 4) // retorna [1, 2, 3, 4]



```

### Variáveis

#### Inferência

Typescript infere o tipo das variáveis se um tipo não for definido. Isso é ruim, pois perde-se a noção do tipo do dado. Por isso é importante definir o tipo da variável.

#### Tipos

```typescript

// Primitivos

let qualquer_tipo ; // any
let qualquer_tipo2: any;

let idade: number = 27 ; 

let mentira: boolean = false;

let frase:string = "Achado";

// Arrays seguem formato tipo[]

let array_generico: any[] = ["A", 7, true]

let array_string: string[] = ["Olá", "mundo"]

// Tuplas seguem formato [tipo, tipo, ...]

let tupla: [string, number, string] = ["abra", 6, "kadabra"]

// Enum segue o formato enum nome{valor1,  valor2 = valor_especifico, valor3 vale valoe 2 + 1}

enum Cor {
    amarelo,        // vale 1
    azul,           // vale 2
    vermelho = 5,   // vale 5
    verde,          // vale 6
    violeta = 3,    // vale 3
    roxo            // vale 4
}

// tipo função. É o nome dado para uma variável que armazena funções. Nela especificamos os tipos dos parâmetros e o tipo de retorno permitidos.

let operacaoNumerica: (x: number, y: number) => number;

function multiplicar(a:number, b:number): number {
    return a * b;
}

operacaoNumerica = multiplicar // Isso é permitido


```

### Funções

#### Triviais

Podemos definir uma função como

```typescript

function nome(param1: tipo, param2: tipo): tipo_retorno {
    corpo
}

```

#### Arrow Function

Possui dois objetivos principais: sintaxe reduzida, e tratamento do this.

##### Sintaxe

Temos alguns casos:

```typescript

const variavel = (param:tipo) => valor:tipo // Para lógica simples e poucas linhas 

```

```typescript

const variavel = (param1: tipo, param2: tipo):tipo => {
    bloco de código 
    return valor:tipo
    }

```

##### Tratamento do this

O this é tratado de forma léxica, pelo contexto atual em que a arrow function é declarada. Além disso, o this da arrow function nunca muda.

### Objetos

Podemos definir um objeto como

```typescript

let nome: {atributo1:tipo, atributo2:tipo, ...} = {
    atributo1: valor,
    atributo2: valor
}

```

Podemos omitir os tipos, caso desejado.

Exemplo de definição:

```typescript

pessoa: {nome: string, idade:number} = {
    nome: "Luiz",
    idade: 21
}

```

### Types

Permitem criar um tipo novo, incluindo funções dentro desses tipos.

Exemplo:

```typescript

type Functionario = {
    supervisores: string[],
    baterPonto: (horas:number) => string
}

// Agora temos um novo tipo, o tipo funcionário

```

Podemos atribuir vários tipos (primitivos ou personalizados) para variáveis, para isso, usamos union type:

```typescript

let Maria: null | Functionario

// Maria pode ser do tipo null OU do tipo funcionário

```

### O compilador TSconfig.json

#### noEmitOnError

Se true, impede que o arquivo seja compilado se erros forem detectados.

#### target

 Qual o EcmaScript desejado. Garante que a compilação possui compatibilidade com os navegadores.

#### sourceMap 

Se true, te permite depurar o código original, fazendo um mapeamento entre o código compilado final e o original em TS.

#### noImplicitdAny

Se true, obriga a dar o tipo any de forma explícita para as variáveis que não recebem algum valor.

#### strictNullChecks

Se true, checa valores nulos que uma função pode retornar

#### noUsedParameters e noUsedLocals

Se true, checa se algum parâmetro não foi usado em uma função.

#### outDir

Te permite definir a pasta dos arquivos gerados pelo compilador.

#### outFile

Te permite definir um ARQUIVO de saída gerado após toda a compilação

#### rootDir

Te permite definir a pasta onde os arquivos TS se encontram