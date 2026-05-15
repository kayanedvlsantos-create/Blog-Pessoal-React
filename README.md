# 📝 Blog Pessoal — React

Aplicação fullstack de blog pessoal desenvolvida com React, TypeScript e Vite, com deploy na Vercel e integração a uma API REST.

---

## 🚀 Deploy

🔗 **[blog-pessoal-react-fawn-beta.vercel.app](https://blog-pessoal-react-fawn-beta.vercel.app)**

---

## 🛠️ Tecnologias

- [React](https://react.dev/) — biblioteca de UI
- [TypeScript](https://www.typescriptlang.org/) — tipagem estática
- [Vite](https://vitejs.dev/) — bundler e servidor de desenvolvimento
- [React Router DOM](https://reactrouter.com/) — roteamento
- [Axios](https://axios-http.com/) — requisições HTTP
- [Tailwind CSS](https://tailwindcss.com/) — estilização
- [Vercel](https://vercel.com/) — deploy e hospedagem

---

## ✨ Funcionalidades

- ✅ Cadastro e login de usuários
- ✅ Autenticação com token JWT
- ✅ Criação, edição e exclusão de postagens
- ✅ Criação, edição e exclusão de temas
- ✅ Listagem de postagens por tema
- ✅ Perfil do usuário

---

## 📁 Estrutura do Projeto

```
src/
├── components/
│   ├── postagem/         # Componentes de postagens
│   ├── tema/             # Componentes de temas
│   ├── usuario/          # Cadastro e perfil
│   └── shared/           # Componentes reutilizáveis (navbar, footer, toast...)
├── contexts/             # Context API (autenticação)
├── models/               # Interfaces TypeScript
├── pages/                # Páginas da aplicação
└── services/             # Configuração do Axios
```

---

## ⚙️ Como rodar localmente

```bash
# Clone o repositório
git clone https://github.com/kayanedvlsantos-create/Blog-Pessoal-React.git

# Acesse a pasta
cd Blog-Pessoal-React

# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento
npm run dev
```

A aplicação estará disponível em `http://localhost:5173`

---

## 🔑 Variáveis de Ambiente

Crie um arquivo `.env` na raiz do projeto com a URL da sua API:

```env
VITE_API_URL=https://sua-api.onrender.com
```

---

## 👩‍💻 Autora

Feito com 💙 por **Kayane Santos**

[![GitHub](https://img.shields.io/badge/GitHub-kayanedvlsantos--create-181717?style=flat&logo=github)](https://github.com/kayanedvlsantos-create)