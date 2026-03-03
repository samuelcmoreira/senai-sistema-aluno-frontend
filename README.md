# 🎓 SENAI - Sistema Aluno (Frontend)

Este é o repositório frontend do **Sistema Aluno**, uma aplicação web desenvolvida como parte das atividades do SENAI para o gerenciamento de alunos. Esta interface gráfica consome a API RESTful construída no projeto backend complementar.

## 💻 Sobre o Projeto

O projeto é uma Single Page Application (SPA) construída com **React**. A interface de usuário foi estruturada utilizando os componentes modernos do **Material UI (MUI)**, oferecendo uma experiência de usuário responsiva e amigável. A aplicação inclui sistema de autenticação, roteamento e exibição de dados complexos em tabelas.

## ⚙️ Funcionalidades

* **Autenticação:** Tela de login para controle de acesso (`Login.jsx`).
* **Navegação:** Menu lateral/superior para navegação entre os módulos do sistema (`Menu.jsx`).
* **Gestão de Alunos:** Interface para listagem e gerenciamento de dados dos alunos (`Alunos.jsx`), utilizando `DataGrid` para paginação e ordenação nativas.

## 🛠 Tecnologias Utilizadas

### Frontend
As dependências do projeto foram configuradas com as versões mais recentes das principais bibliotecas do ecossistema React:
* **React** (`^19.2.4`)
* **Material UI - MUI** (`^7.3.8`)
* **MUI X Data Grid** (`^8.27.3`) - Para tabelas de dados avançadas.
* **Emotion** (`^11.14.0`) - Engine de estilização do Material UI.
* **Testing Library** (`^16.3.2`) - Ferramentas para testes de interface.

### Backend (API Complementar)
O sistema necessita de uma API rodando em segundo plano para persistir os dados. O repositório backend foi construído com:
* **Java 17**
* **Spring Boot** (`4.0.3`)
* **Spring WebMVC**

🔗 **Repositório do Backend:** [samuelcmoreira/senai-sistema-aluno-backend](https://github.com/samuelcmoreira/senai-sistema-aluno-backend)

## 📂 Estrutura Principal do Projeto

```text
📦 src
 ┣ 📜 App.js            # Componente raiz e gerenciamento de estado global
 ┣ 📜 Alunos.jsx        # Tela de gerenciamento/listagem de alunos
 ┣ 📜 Login.jsx         # Tela de autenticação do usuário
 ┣ 📜 Menu.jsx          # Componente de navegação principal
 ┣ 📜 theme.js          # Configuração de temas globais do Material UI
 ┣ 📜 index.js          # Ponto de entrada do React
 ┗ 📜 index.css         # Estilos globais
 ```

## 🚀 Como executar o projeto localmente

### Pré-requisitos
* [Node.js](https://nodejs.org/en/) instalado.
* O projeto **backend** deve estar rodando na sua máquina (geralmente na porta `8080`) para que o login e a listagem de alunos funcionem corretamente em conjunto com o banco de dados.

### Passo a passo

**1. Clone este repositório**
```bash
git clone [https://github.com/samuelcmoreira/senai-sistema-aluno-frontend.git](https://github.com/samuelcmoreira/senai-sistema-aluno-frontend.git)
```

**2. Acesse a pasta do projeto**
```bash
cd senai-sistema-aluno-frontend
```

**3. Instale as dependências**
```bash
npm install
```

**4. Execute a aplicação**
```bash
npm start
```

A aplicação abrirá automaticamente no seu navegador padrão no endereço `http://localhost:3000`.

## 📜 Scripts Disponíveis

No diretório do projeto, você pode executar:

* `npm start`: Roda o aplicativo no modo de desenvolvimento.
* `npm test`: Inicia o executor de testes em modo de observação interativo.
* `npm run build`: Compila o aplicativo para produção na pasta `build`, otimizando a performance.

## 🤝 Como Contribuir

1. Faça um *fork* do projeto.
2. Crie uma nova *branch* com as suas alterações: `git switch -c feat/minha-feature`
3. Salve as alterações e crie uma mensagem de commit: `git commit -m "feat: adiciona nova funcionalidade"`
4. Envie as suas alterações: `git push -u origin feat/minha-feature`
5. Abra um *Pull Request* no repositório original descrevendo suas mudanças.
