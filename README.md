# Projeto-Sistema-de-Cadastro-com-Exporta-o
# Gerenciador de Produtos Avançado

![Banner do Projeto](https://via.placeholder.com/800x400.png?text=Placeholder+Image+do+Seu+Projeto)

## 📖 Sobre o Projeto
Este projeto é um sistema web robusto para o gerenciamento de produtos, ideal para pequenas e médias empresas. Ele foi construído com uma arquitetura **full-stack**, utilizando **Node.js** para o backend e **PostgreSQL** como banco de dados, oferecendo uma solução completa para controle de estoque e vendas. A interface moderna e interativa permite aos usuários realizar operações CRUD (Criar, Ler, Atualizar, Deletar) de forma eficiente, além de gerar relatórios detalhados em formato Excel.

## ✨ Funcionalidades Principais
*   **Gestão Completa de Produtos (CRUD):** Adicione, visualize, edite e remova produtos facilmente através da interface web.
*   **Listas Suspensas Inteligentes:** Campos de categoria e subcategoria com listas suspensas (comboboxes) para evitar erros de digitação e garantir a consistência dos dados.
*   **Validação Automática:** Garante que os campos numéricos de quantidade e preço recebam apenas valores válidos.
*   **Visualização em Tempo Real:** Uma tabela dinâmica exibe os produtos cadastrados instantaneamente, sem a necessidade de recarregar a página.
*   **Relatórios Detalhados em Excel:** Gere relatórios completos que incluem:
    *   Relatório de todos os produtos.
    *   Relatório de vendas por categoria (total de quantidade e valor).
    *   Relatório de vendas por subcategoria (total de quantidade e valor).
*   **Pesquisa Dinâmica:** Filtre produtos na tabela em tempo real com a barra de pesquisa.

## 🛠️ Tecnologias Utilizadas
**Backend:**
*   **Node.js:** Ambiente de execução JavaScript.
*   **Express:** Framework web para Node.js.
*   **Sequelize:** ORM para manipulação do banco de dados.
*   **ExcelJS:** Biblioteca para geração de arquivos Excel.
*   **dotenv:** Gerenciamento de variáveis de ambiente.
*   **pg:** Driver para PostgreSQL.

**Banco de Dados:**
*   **PostgreSQL:** Sistema de gerenciamento de banco de dados relacional.

**Frontend:**
*   **HTML5:** Estrutura da interface.
*   **CSS3:** Estilização e design responsivo.
*   **JavaScript (ES6+):** Lógica da interface, manipulação do DOM e requisições assíncronas (AJAX).

## 🚀 Como Executar o Projeto
### Pré-requisitos
Certifique-se de ter as seguintes ferramentas instaladas:
*   [Node.js](https://nodejs.org/)
*   [PostgreSQL](https://www.postgresql.org/download/)

### Instalação
1.  **Clone o repositório:**
    ```sh
    git clone https://github.com/seu-usuario/seu-repositorio.git
    cd seu-repositorio
    ```
2.  **Instale as dependências:**
    ```sh
    npm install
    ```
3.  **Configure o banco de dados:**
    *   Crie um banco de dados PostgreSQL.
    *   Crie um arquivo `.env` na raiz do projeto com a seguinte configuração, substituindo os valores pela sua URL de conexão:
        ```env
        DATABASE_URL="postgres://usuario:senha@host:porta/banco_de_dados"
        PORT=3000
        ```
4.  **Sincronize o banco de dados e inicie o servidor:**
    ```sh
    node server.js
    ```
5.  **Acesse a aplicação:**
    Abra seu navegador e vá para `http://localhost:3000`.

## 🤝 Contribuições
Sinta-se à vontade para abrir `issues` ou enviar `pull requests` com sugestões de melhoria ou novas funcionalidades.

