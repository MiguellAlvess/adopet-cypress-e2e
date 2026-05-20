# adopet-cypress-e2e

Projeto simples para prática de testes automatizados utilizando o Cypress na aplicação Adopet.

## Aplicação utilizada nos testes

- Adopet Frontend

## Tecnologias

- Cypress
- JavaScript
- Mochawesome
- GitHub Actions

## Instalação

Clone o projeto:

```bash
git clone https://github.com/seu-usuario/adopet-cypress-e2e.git
```

Instale as dependências:

```bash
npm install
```

## Executando os testes

Modo interface:

```bash
npx cypress open
```

Modo headless:

```bash
npx cypress run
```

## Estrutura dos testes

### Registration Page

Testes de cadastro de usuário:

- cadastro com sucesso
- validação de email obrigatório
- validação de senha obrigatória
- validação de confirmação de senha
- validação de formato de email
- validação de regras de senha

### Login Page

Testes de login:

- login com sucesso
- validação de email obrigatório
- validação de senha obrigatória
- interceptação de requisição com erro 400
- validação de mensagem de erro no login

### Bulk Registration

Testes utilizando fixtures para cadastro em massa de usuários.

### API Messages

Testes de API autenticada utilizando `cy.request()`:

- validação de status code
- validação de autenticação via Bearer Token
- validação da resposta da API

## Variáveis de ambiente

Adicionar no `cypress.config.js`:

```js
env: {
  authorization: "SEU_TOKEN";
}
```

## Relatórios

O projeto utiliza Mochawesome para geração de relatórios.

Os relatórios ficam em:

- `cypress/reports`

## CI

O projeto possui integração contínua com GitHub Actions para execução automática dos testes E2E.
