# 🦸‍♂️ Be The Hero - Frontend

![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
![Axios](https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white)
![SASS](https://img.shields.io/badge/SASS-CC6699?style=for-the-badge&logo=sass&logoColor=white)

Interface web para o projeto "Be The Hero", uma plataforma que conecta ONGs a pessoas dispostas a ajudar em casos específicos. Este frontend fornece uma experiência de usuário intuitiva para cadastro de ONGs, gerenciamento de casos e comunicação entre doadores e organizações.

## 🚀 Funcionalidades

- **Cadastro de ONGs**: Interface para registro de novas organizações
- **Login/Logout**: Sistema de autenticação para ONGs
- **Dashboard**: Painel de controle para gerenciamento de casos
- **Cadastro de Casos**: Formulário para adicionar novos casos de ajuda
- **Listagem de Casos**: Visualização de todos os casos disponíveis
- **Contato**: Facilita a comunicação entre doadores e ONGs via WhatsApp e e-mail
- **Design Responsivo**: Interface adaptável para dispositivos móveis e desktop

## 🛠️ Tecnologias

- **Framework**: React.js
- **Roteamento**: React Router DOM
- **Estilização**: Node-SASS (SCSS)
- **Requisições HTTP**: Axios
- **Ícones**: React Icons
- **Máscaras de Input**: React Input Mask
- **Alertas**: SweetAlert2

## 📋 Pré-requisitos

- Node.js v10+ instalado
- NPM ou Yarn
- API Backend [Be The Hero](https://github.com/h4rd1ideveloper/beherobackend) em execução

## 🔧 Instalação e Configuração

1. Clone o repositório:
   ```bash
   git clone https://github.com/h4rd1ideveloper/beherofrontend.git
   cd beherofrontend
   ```

2. Instale as dependências:
   ```bash
   npm install
   # ou
   yarn install
   ```

3. Configure a conexão com o backend:
   - Abra o arquivo `src/services/api.js`
   - Verifique se a URL base está apontando para o endereço correto do backend
   ```javascript
   // Exemplo
   import axios from 'axios';
   
   const api = axios.create({
     baseURL: 'http://localhost:3333',
   });
   
   export default api;
   ```

4. Inicie a aplicação:
   ```bash
   npm start
   # ou
   yarn start
   ```

A aplicação estará disponível em `http://localhost:3000`.

## 📚 Estrutura do Projeto

```
src/
├── assets/       # Imagens e recursos estáticos
├── components/   # Componentes reutilizáveis
├── pages/        # Páginas da aplicação
│   ├── Logon/    # Página de login
│   ├── Register/ # Cadastro de ONGs
│   ├── Profile/  # Dashboard da ONG
│   └── NewIncident/ # Cadastro de novos casos
├── services/     # Configuração de serviços (API)
├── styles/       # Estilos globais
└── routes.js     # Configuração de rotas
```

## 🖥️ Páginas Principais

### Logon
Página inicial onde ONGs podem acessar suas contas usando o ID fornecido durante o cadastro.

### Cadastro
Formulário para registro de novas ONGs, coletando informações como nome, e-mail, WhatsApp, cidade e estado.

### Perfil
Dashboard da ONG onde é possível visualizar, cadastrar e excluir casos.

### Novo Caso
Formulário para cadastro de novos casos, incluindo título, descrição e valor necessário.

## 🔄 Integração com Backend

Este frontend foi projetado para trabalhar em conjunto com o projeto [BeHeroBackend](https://github.com/h4rd1ideveloper/beherobackend), que fornece a API necessária para todas as operações.

### Principais Endpoints Utilizados

- `POST /sessions`: Autenticação da ONG
- `POST /ongs`: Cadastro de nova ONG
- `GET /profile`: Listagem de casos da ONG logada
- `POST /incidents`: Cadastro de novo caso
- `DELETE /incidents/:id`: Remoção de caso

## 🧪 Testes

Para executar os testes (quando implementados):

```bash
npm test
# ou
yarn test
```

## 📦 Build para Produção

Para gerar uma versão de produção otimizada:

```bash
npm run build
# ou
yarn build
```

Os arquivos serão gerados na pasta `build/`, prontos para serem implantados em qualquer servidor web estático.

## 📱 Responsividade

A aplicação foi desenvolvida seguindo o conceito de Mobile First, garantindo uma experiência consistente em diferentes tamanhos de tela:

- **Desktop**: Layout completo com todas as funcionalidades
- **Tablet**: Adaptações para melhor visualização em telas médias
- **Mobile**: Interface otimizada para smartphones

## 🔒 Segurança

- Validação de formulários para prevenir entradas inválidas
- Armazenamento seguro do ID da ONG em localStorage
- Proteção de rotas privadas

## 📄 Licença

Este projeto está licenciado sob a licença ISC - veja o arquivo LICENSE para detalhes.

## 👨‍💻 Autor

Desenvolvido por [Yan Policarpo](https://github.com/h4rd1ideveloper).

---

⭐ Se este projeto foi útil para você, considere dar uma estrela no GitHub!
