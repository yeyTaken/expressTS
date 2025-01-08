# expressTS

expressTS é uma base que facilita o desenvolvimento de aplicações com Express.js usando TypeScript. Ela oferece uma estrutura organizada para rotas, suporte a múltiplos métodos HTTP (GET, POST, DELETE), e automação no carregamento de arquivos.

## Funcionalidades
- Estrutura modular de rotas.
- Suporte para rotas dinâmicas (ex.: `/user/:id`).
- Integração com views (EJS, Pug, etc.).
- Configuração simplificada com TypeScript.
- Suporte para métodos HTTP como GET, POST, PUT, DELETE, PATCH e ALL.

---

## Instalação

1. Clone este repositório:
   ```bash
   git clone https://github.com/seu-usuario/expressTS.git
   cd expressTS
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

3. Inicie o servidor:
   ```bash
   npm run dev
   ```

O servidor será iniciado em `http://localhost:3000`.

---

## Criando uma Rota

As rotas são definidas dentro do diretório `src/website/routes`. Cada rota é um arquivo chamado `page.ts`. O caminho da rota é inferido automaticamente com base no local do arquivo.

### Exemplo: Rota Inicial (`/`)
Crie o arquivo `src/website/routes/page.ts`:

```typescript
import { Route } from "@/website/base/structure/Route";
import { Request, Response } from "express";

Route({
  title: "Página Inicial",
  description: "Bem-vindo à página inicial!",
  isAdmin: false,
  get: async (req: Request, res: Response) => {
    res.render("pages/home", {
      title: "Página Inicial",
      description: "Bem-vindo à página inicial!",
    });
  },
});
```

### Exemplo: Rota com Caminho Personalizado (`/dashboard`)
Crie o arquivo `src/website/routes/dashboard/page.ts`:

```typescript
import { Route } from "@/website/base/structure/Route";
import { Request, Response } from "express";

Route({
  title: "Dashboard",
  description: "Bem-vindo ao dashboard!",
  isAdmin: true,
  get: async (req: Request, res: Response) => {
    res.render("pages/dashboard", {
      title: "Dashboard",
      description: "Bem-vindo ao dashboard!",
    });
  },
  delete: async (req: Request, res: Response) => {
    res.send({ message: "Requisição DELETE no dashboard!" });
  },
});
```

### Exemplo: Rota Dinâmica (`/user/:id`)
Crie o arquivo `src/website/routes/user/[id]/page.ts`:

```typescript
import { Route } from "@/website/base/structure/Route";
import { Request, Response } from "express";

Route({
  title: "Perfil do Usuário",
  description: "Veja informações do usuário.",
  isAdmin: false,
  get: async (req: Request, res: Response) => {
    const { id } = req.params;
    res.render("pages/user", {
      title: "Perfil do Usuário",
      description: `Perfil do usuário ${id}`,
      userId: id,
    });
  },
  post: async (req: Request, res: Response) => {
    const { id } = req.params;
    res.send({ message: `Dados atualizados para o usuário ${id}` });
  },
});
```

---

## Como Funcionam os Caminhos

Os caminhos das rotas são inferidos automaticamente com base no local dos arquivos:

- `src/website/routes/page.ts` → `/`
- `src/website/routes/dashboard/page.ts` → `/dashboard`
- `src/website/routes/user/[id]/page.ts` → `/user/:id`

### Parâmetros Dinâmicos
Para criar rotas dinâmicas, use colchetes no nome do diretório ou arquivo. Por exemplo:

- `src/website/routes/user/[id]/page.ts` → `/user/:id`
- `src/website/routes/product/[category]/[productId]/page.ts` → `/product/:category/:productId`

---

## Carregando as Rotas
As rotas são carregadas automaticamente com base nos arquivos em `src/website/routes`. Não é necessário importar ou registrar manualmente.

---

## Configure o `.env`

```.env
# Database Mongoose.
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/
MONGODB_NAME=my-website
```
---

## Contribuição
Contribuições são bem-vindas! Sinta-se à vontade para abrir issues e enviar pull requests.

---

## Licença
Este projeto está licenciado sob a [MIT License](LICENSE).
