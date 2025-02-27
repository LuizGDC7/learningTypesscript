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

### Orientação a Objetos

#### Classes

##### Atributos / modificadores de acesso

Um dos objetivos de se usar modificadores de acesso como public, protected ou private é garantir que o acesso a informação seja seguro. Isso não é o objetivo de JavaScript e nem Typescript. É possível burlar com alguma facilidade o acesso a propriedades private, e mesmo em Javascript com o modificador private #, é possível burlar, mesmo que mais dificilmente.

O objetivo dos modificadores de acesso nessas linguagens é a de tipagem, garantir manutenabilidade, garantir que os devs se atentem ao que estão programando e manter a corretude do código. A segurança em backend deve ser feita usando linguagens mais seguras, como Java.

```typescript

private _a: tipo // Só pode ser acessada dentro da classe. É convenção dar o nome de um atributo privado usando _ na frente.

protected b:tipo // Só pode ser acessada na classe, é transmitida aos filhos

public c:tipo // Pode ser acessada fora da classe

```

##### Constructor

Typescript e Javascript NÃO Possuem sobrecarga de operadores e de funções. Então o construtor de uma classe é literalmente chamado de constructor.

Podemos usar eles para enxugar a definição das propriedades, exemplo:

```typescript

class Comida {

    constructor(private nome:string, private data:Date); // Automaticamente gera os atributos privados nome e data.

}

```

##### Métodos

O mesmo de sempre, se quiser que um método seja herdado aos filhos, use protected.

##### Herança

usamos a keyword extends, como usualmente.

##### Getters and Setters

Lembre-se: segurança não é o foco de JS e TS. Então só vamos usar getters and setters quando realmente necessário. O esquema é o mesmo de outras linguagens:

```typescript

class Comida{
    constructor(private _name:string, public validade:Data);

    get name(): string{
        return this._name;
    }

    set name(valor:string):void {
        this._name = valor
    }
}

// Usando os getters and setters:

let lasanha = new Comida("Lasanha", "2025-02-01");
lasanha.name = "Tortilha"
console.log(lasanha.name) // Perceba que executamos os métodos como se fossem atributos públicos, por isso a convenção de nome começar por _

lasanha.validade = "2020-03-05" // validade é público, não precisamos de getters and setters


```

##### Atributos e métodos estáticos

Basta acrescentar static ao atributo e método desejado.

##### Classe abstrata

O mesmo de sempre. Você pode ter uma classe com métodos que serão reutilizados ou simplesmente definidos nos filhos. Basta usar abstract na definição da classe e dos métodos.

### Namespaces

São uma forma antiga de organização de código. Eles permitem proteger o nome das variáveis e métodos. Na prática, eles funcionam como variáveis globais.

```typescript

namespace MeuNamespace{
    const PI:number = 3.141517
}

console.log(MeuNamespace.PI)

```

### Módulos

São a forma atual de separação de código em arquivos. Funciona assim:

Em um arquivo ts, você vai adicionar export nas variáveis, funções, classes, etc que você quer usar em outro módulo:

#### uso

```typescript

// suponha que o arquivo seja math.ts

export function somar(a:number, b:number): number{
    return a + b;
}

```

Agora, no outro arquivo, você vai colocar entre {} o que você deseja importar do arquivo original:

```typescript
    import {somar} from "./math"

    console.log(somar(10, 20));
```

#### Adendos

O browser não reconhece nativamente as palavras import e export, então ele não reconhece módulos. Para contornar isso, vai depender de qual webpack a empresa for usar. Para esse repositório vou usar SystemJS.

##### Instalação

```typescript
npm i -s systemjs@0.21.5
```

##### uso

Dentro do index.html, inclua:

```html

<script>
    SystemJS.config({
        baseUrl: "/pasta_raiz", // a pasta raiz dos módulos
        packages: {
            '/pasta_raiz':{
                defaultJSExtension: true
            }
        }
    })

    SystemJS.import('./pasta_raiz/arquivo1.js')

<script>


```