# ExpressTS

Este é um projeto base simples de expressJS em TS.

## Instalação

Para instalar as dependências do projeto, utilize o comando:

```bash
npm install
```

## Execução

Para iniciar o servidor em modo de desenvolvimento, execute:

```bash
npm run start:dev
```

## Estrutura de Diretórios

A estrutura do código é a seguinte:

```
src/
│
├── functions/
│   └── funcs/
│       ├── logs/
│       │   └── colorFormat.ts
│       └── funcsMap.ts
└── index.ts
tsconfig.json
package.json
```

## Paths

No seu `tsconfig.json`, você tem os seguintes caminhos configurados:

- `@/*`: Mapeia para `./src/*`
- `@/func/*`: Mapeia para `./src/functions/*`

Esses paths permitem a importação mais limpa de módulos dentro do código, como por exemplo:

```typescript
import func from "@/functions/funcsMap";
```

## Utilizando o `log`

Para usar o `log`, basta importar a função no arquivo onde você deseja registrar mensagens:

```typescript
import func from "@/functions/funcsMap";

// Usando o log
func.log('- Hello, TypeScript!', 'success');
```

### Tipos de Log

Existem 4 tipos de log disponíveis no projeto:

- `error`: Mensagem de erro (exibe em vermelho com fundo vermelho).
- `success`: Mensagem de sucesso (exibe em verde com fundo verde).
- `api`: Mensagem relacionada à API (exibe em ciano com fundo ciano).
- `client`: Mensagem relacionada ao cliente (exibe em azul com fundo azul).

Exemplo de uso:

```typescript
func.log('Mensagem de erro', 'error');
func.log('Mensagem de sucesso', 'success');
func.log('Mensagem da API', 'api');
func.log('Mensagem do cliente', 'client');
```

Se um tipo de log inválido for fornecido, o tipo padrão será `error`.

## Como Funciona

1. **Função `log`**: A função `log` aceita dois parâmetros:
   - `message`: A mensagem a ser exibida.
   - `type`: O tipo de log, podendo ser `error`, `success`, `api`, ou `client`.

2. **Formatos de Cor**: A função utiliza o pacote `colors` para formatar a mensagem com diferentes cores e fundos, dependendo do tipo de log.

3. **Estrutura de Funções**: O módulo `funcsMap.ts` faz o mapeamento das funções e as disponibiliza por meio de um único import, como mostrado acima.

## Exemplo Completo

```typescript
// src/index.ts
import func from "@/functions/funcsMap";

// Log de sucesso
func.log('- Hello, TypeScript!', 'success');

// Log de erro
func.log('Algo deu errado', 'error');
```

## Configuração do `tsconfig.json`

A configuração de paths no seu `tsconfig.json` permite importar os módulos de forma mais limpa, sem a necessidade de usar caminhos relativos complexos.

```json
"paths": {
  "@/*": ["./src/*"],
  "@/func/*": ["./src/functions/*"]
}
```

Isso significa que você pode importar módulos de forma simples, sem precisar usar caminhos relativos, como `../../../`.

---

### Licença

Este projeto está licenciado sob a licença ISC. Consulte o arquivo LICENSE para mais informações.