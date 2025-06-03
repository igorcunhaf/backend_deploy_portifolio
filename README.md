
# Portfólio Backend

API para gerenciamento do seu portfólio pessoal, desenvolvida com [NestJS](https://nestjs.com/) e [TypeORM](https://typeorm.io/). Permite controlar projetos, posts de blog, usuários, comentários e mensagens de contato. Oferece autenticação JWT e integrações modernas com frontend.

---

## 🚀 Tecnologias

- **Node.js** + **NestJS**
- **TypeScript**
- **TypeORM**
- **MySQL**
- **JWT** para autenticação
- **bcrypt** para hash de senhas

---

## ⚙️ Instalação

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/seu-usuario/backend_deploy_portifolio.git
   cd backend_deploy_portifolio
   ```

2. **Instale as dependências:**
   ```bash
   npm install
   ```

3. **Configure o arquivo `.env`:**
   Crie um arquivo `.env` na raiz do projeto e preencha com os dados do seu banco e chave JWT:

   ```
   DB_HOST=localhost
   DB_PORT=3306
   DB_USERNAME=seu_usuario
   DB_PASSWORD=sua_senha
   DB_DATABASE=portfolio
   JWT_SECRET=umasecretsegura
   ```

4. **Banco de dados:**  
   O projeto usa TypeORM, que cria as tabelas automaticamente pelas entidades se o parâmetro `synchronize` estiver ativo no `app.module.ts`.

5. **Rode em modo desenvolvimento:**
   ```bash
   npm run start:dev
   ```

---

## 🏹 Scripts disponíveis

- `npm run start:dev` — Inicia o servidor com hot reload
- `npm run build` — Compila para produção
- `npm run start:prod` — Inicia usando a build de produção
- `npm run test` — Executa os testes unitários
- `npm run format` — Formata o código com Prettier
- `npm run lint` — Ajusta problemas de lint

---

## 📚 Funcionalidades

- CRUD de **Projetos** e **Posts**
- Gerenciamento de **Usuários** (cadastro, login, autenticação)
- Envio e listagem de **Mensagens de Contato**
- **Comentários** para posts
- Autenticação e autorização via JWT

---

## 🛣️ Principais rotas

- `POST /auth/register` — Cadastro de usuário
- `POST /auth/login` — Login (retorna JWT)
- `GET /projects` — Lista projetos
- `POST /projects` — Cria projeto (auth)
- `PUT /projects/:id` — Atualiza projeto (auth)
- `DELETE /projects/:id` — Remove projeto (auth)
- `GET /posts` — Lista posts do blog
- `POST /posts` — Cria post (auth)
- `POST /contact` — Envia mensagem de contato
- `GET /comments/:postId` — Lista comentários de um post

> As rotas autenticadas exigem header:  
> `Authorization: Bearer <token>`

---

## 🔒 Segurança

- Senhas criptografadas com bcrypt
- JWT em rotas protegidas
- Validação de dados com DTOs (class-validator)

---

## 📄 Licença

Projeto open-source para uso pessoal ou profissional.  
Sinta-se livre para clonar, modificar e usar!