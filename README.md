# Sorveteria API

API para gerenciar os dados de uma sorveteria fictícia, permitindo operações de CRUD (Create, Read, Update, Delete) para sabores de sorvetes.

## Índice
- [Tecnologias](#tecnologias)
- [Instalação](#instalação)
- [Uso](#uso)
- [Endpoints](#endpoints)
  - [POST /sabores](#post-sabores)
  - [GET /sabores](#get-sabores)
  - [PUT /sabores/:id](#put-saboresid)
  - [DELETE /sabores/:id](#delete-saboresid)

## Tecnologias

- Node.js
- Express.js
- Prisma (ORM)
- Banco de Dados (configurável no Prisma)
- CORS para gerenciamento de acessos
- JSON para troca de dados

## Instalação

1. Clone o repositório:
    ```bash
    git clone https://github.com/gabrielasodias/sorvetes-api.git
    ```
2. Instale as dependências:
    ```bash
    npm install
    ```
3. Configure o banco de dados com o Prisma:
   - Configure seu banco de dados em `prisma/schema.prisma`.
   - Execute as migrações com:
     ```bash
     npx prisma migrate dev
     ```
4. Inicie o servidor:
    ```bash
    npm start
    ```

O servidor estará disponível em `http://localhost:3000`.

## Uso

### Endpoints

Abaixo estão os endpoints disponíveis na API para gerenciar os sabores da sorveteria:

#### POST /sabores

- **Descrição**: Cria um novo sabor.
- **Corpo da Requisição**:
  ```json
  {
    "tipoSorvete": "String",
    "sabor": "String",
    "quantidade": "Integer"
  }
  ```
  Resposta: Retorna o objeto criado.

#### GET /sabores

- Descrição: Retorna uma lista de todos os sabores ou filtra por tipoSorvete e/ou sabor.
- Parâmetros de Consulta (opcional):
  - tipoSorvete: Tipo de sorvete a ser filtrado.
  - sabor: Sabor específico para filtrar.
- Resposta: Retorna uma lista de sabores.
- 
#### PUT /sabores/
- Descrição: Atualiza as informações de um sabor específico.
- Parâmetro: id do sabor a ser atualizado.
- Corpo da Requisição:
  ```json
  {
  "tipoSorvete": "String",
  "sabor": "String",
  "quantidade": "Integer"
  }
  ```
- Resposta: Retorna o objeto atualizado.

#### DELETE /sabores/
- Descrição: Deleta um sabor específico.
- Parâmetro: id do sabor a ser deletado.
- Resposta: Retorna uma mensagem de sucesso.

## Contribuição

Sinta-se à vontade para contribuir com sugestões, melhorias e correções.
