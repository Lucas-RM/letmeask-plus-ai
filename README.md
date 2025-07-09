# Letmeask Plus AI

Uma plataforma inovadora para lives e streamings que permite criar salas de perguntas interativas com suporte a IA. O projeto visa dar "superpoderes" a projetos como o "Let Me", oferecendo uma experiência aprimorada para criadores de conteúdo e suas audiências.

## 🚀 Sobre o Projeto

O **Letmeask Plus AI** é uma aplicação web que permite:

- **Criação de salas de perguntas** para lives e streamings
- **Envio de perguntas pela audiência** em tempo real
- **Agente de IA responsável** por prever e sugerir respostas baseadas na transcrição da live stream
- **Interface moderna e responsiva** para uma experiência fluida

## 🛠️ Stack Tecnológica

### Backend (Server)

- **Runtime**: Node.js com TypeScript
- **Framework**: Fastify (alta performance e baixa latência)
- **Banco de Dados**: PostgreSQL com pgvector (para operações vetoriais)
- **ORM**: Drizzle ORM (type-safe e performático)
- **Validação**: Zod (schema validation)
- **CORS**: @fastify/cors
- **Linting**: Biome
- **Containerização**: Docker & Docker Compose

### Frontend (Web)

- **Framework**: React 19 com TypeScript
- **Build Tool**: Vite (desenvolvimento rápido)
- **Styling**: Tailwind CSS v4
- **Roteamento**: React Router DOM
- **Estado**: TanStack Query (React Query)
- **UI Components**: Radix UI + Lucide React
- **Utilitários**: clsx, class-variance-authority, tailwind-merge
- **Linting**: Biome

## 📁 Estrutura do Projeto

```
letmeask-plus-ai/
├── server/                 # Backend API
│   ├── src/
│   │   ├── db/           # Configuração do banco de dados
│   │   │   ├── schema/   # Schemas Drizzle
│   │   │   └── migrations/
│   │   ├── http/         # Rotas da API
│   │   └── server.ts     # Servidor Fastify
│   ├── docker/           # Configuração Docker
│   └── package.json
├── web/                   # Frontend React
│   ├── src/
│   │   ├── components/   # Componentes React
│   │   ├── pages/        # Páginas da aplicação
│   │   └── lib/          # Utilitários
│   └── package.json
└── README.md
```

## 🚀 Setup e Configuração

### Pré-requisitos

- Node.js 18+ 
- Docker e Docker Compose (v28.2.2)
- PostgreSQL 12+ (via Docker)

### Backend (Server)

1. **Clone o repositório**
   ```bash
   git clone <repository-url>
   cd letmeask-plus-ai/server
   ```

2. **Instale as dependências**
   ```bash
   npm install
   ```

3. **Configure as variáveis de ambiente**
   ```bash
   # Crie um arquivo .env na pasta server/
   cp .env.example .env
   ```
   
   Configure as seguintes variáveis:
   ```env
   PORT=3333
   DATABASE_URL=postgresql://docker:docker@localhost:5432/agents
   ```
   > 📌**Obs.:** Talvez seja necessário criar um usuário com nome `docker` e com a senha `docker` no PostgreSQL.

4. **Inicie o banco de dados com Docker**
   ```bash
   docker-compose up -d
   ```

5. **Execute as migrações do banco**
   ```bash
   npx drizzle-kit migrate
   ```

6. **(Opcional) Popule o banco com dados de exemplo**
    ```bash
    npm run db:seed
    ```


7. **Inicie o servidor**
   ```bash
   # Desenvolvimento
   npm run dev
   
   # Produção
   npm start
   ```

O servidor estará disponível em http://localhost:3333

### Frontend (Web)

1. **Navegue para a pasta web**
   ```bash
   cd ../web
   ```

2. **Instale as dependências**
   ```bash
   npm install
   ```

3. **Inicie o servidor de desenvolvimento**
   ```bash
   npm run dev
   ```

4. **Para build de produção**
   ```bash
   npm run build
   npm run preview
   ```

O frontend estará disponível em http://localhost:5173

## 🏗️ Padrões de Projeto

### Backend

- **Arquitetura**: API REST com Fastify
- **Validação**: Schemas Zod para type safety
- **Banco de Dados**: Drizzle ORM com PostgreSQL
- **Estrutura**: Organização por funcionalidades (routes, db, etc.)
- **Linting**: Biome para formatação e linting

### Frontend

- **Arquitetura**: Componentes React funcionais
- **Roteamento**: React Router para navegação
- **Estado**: TanStack Query para cache e sincronização
- **Styling**: Tailwind CSS com utilitários
- **Componentes**: Radix UI para acessibilidade

## 🗄️ Banco de Dados

O projeto utiliza PostgreSQL com pgvector para operações vetoriais, ideal para funcionalidades de IA:

- **Tabela `rooms`**: Armazena informações das salas de perguntas
- **Campos**: id (UUID), name, description, createdAt
- **Extensões**: pgvector para embeddings vetoriais

## 🤝 Contribuição

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'feat: add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 👨‍💻 Autor

**[Lucas Marcondes](https://github.com/Lucas-RM)**

---

⭐ Se este projeto te ajudou, considere dar uma estrela!
