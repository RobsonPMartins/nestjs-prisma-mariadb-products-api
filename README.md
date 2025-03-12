# Backend de Produtos - NestJS com Prisma e MariaDB

Este repositório contém a API de produtos desenvolvida com **NestJS**, **Prisma** como ORM e **MariaDB** como banco de dados. A API permite realizar operações CRUD para gerenciamento de produtos, com validações de dados de entrada e integração com a base de dados MariaDB.

## Funcionalidades

- **GET /products**: Retorna todos os produtos cadastrados.
- **GET /products/:id**: Retorna um produto específico com base no ID.
- **POST /products**: Cria um novo produto com nome, preço e descrição.
- **PUT /products/:id**: Atualiza um produto existente.
- **DELETE /products/:id**: Exclui um produto da base de dados.

## Tecnologias

- **NestJS**: Framework para Node.js para construir aplicações escaláveis e eficientes.
- **Prisma**: ORM para interagir com o banco de dados MariaDB.
- **MariaDB**: Banco de dados relacional.
- **Jest**: Framework de testes unitários.

## Configuração

### 1. Clonando o repositório

Clone o repositório para sua máquina local:

```bash
git clone https://github.com/seu-usuario/nome-do-repositorio.git
