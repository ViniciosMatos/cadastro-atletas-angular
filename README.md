# AP2 - Aplicações Front-End

## Identificação

Nome: Vinicios Matos  
Curso: Análise e Desenvolvimento de Sistemas  
Disciplina: Aplicações Front-End  
Instituição: ULBRA  

## Tema do projeto

CRUD de Atletas com Angular e JSON Server.

## Descrição

Aplicação desenvolvida em Angular para cadastro, listagem, edição e exclusão de atletas, utilizando JSON Server como API simulada. A entidade "Atleta" possui os seguintes campos: Nome, Idade, Nacionalidade, Esporte e Atividade (se está em atividade ou não).

## Tecnologias utilizadas

- Angular (v21)
- TypeScript
- HTML
- CSS
- JSON Server
- Git e GitHub

## Como executar o projeto

1. Clone o repositório:

```bash
git clone https://github.com/ViniciosMatos/cadastro-atletas-angular.git
```

2. Acesse a pasta do projeto:

```bash
cd cadastro-atletas-angular
```

3. Instale as dependências:

```bash
npm install
```

4. Execute a API fake (JSON Server) e o servidor de desenvolvimento do Angular em conjunto:

```bash
npm run start:all
```

*Se preferir rodar em terminais separados, você pode usar os seguintes comandos:*

  **Terminal 1 (API):** `npm run api`
  **Terminal 2 (Angular):** `npm start`

5. Acesse no navegador:

```txt
http://localhost:4200
```

## Link do vídeo demonstrativo

[Insira aqui o link público do vídeo demonstrativo]

## Funcionalidades

- **Cadastro de Atletas:** Formulário com validações básicas para inserir novos atletas (Nome, Idade, Nacionalidade, Esporte e Status de Atividade).
- **Listagem de Atletas:** Tabela responsiva exibindo todos os atletas cadastrados na API.
- **Edição de Atletas:** Edição das informações dos atletas diretamente pela interface de listagem.
- **Exclusão de Atletas:** Remoção física do registro no banco simulado (`db.json`) com confirmação prévia.
- **Integração com JSON Server:** Persistência de dados completa em uma API REST local simulada.
