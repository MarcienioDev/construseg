# Construseg

Este repositório contém o projeto **Construseg**, focado inicialmente no desenvolvimento do servidor backend. O objetivo do projeto é fornecer uma base sólida para aplicações relacionadas à construção civil e segurança, com arquitetura escalável e moderna.

## Estrutura do Projeto

Atualmente, o projeto possui apenas o servidor, localizado na pasta `server/`:

```
construseg/
├── README.md
└── server/
	 ├── .env
	 ├── .gitignore
	 ├── package.json
	 ├── tsconfig.json
	 └── src/
		  └── index.ts
```


## Tecnologias Utilizadas

- **Node.js**
- **TypeScript**
- **Express** (se aplicável)
- **dotenv** (variáveis de ambiente)
- **rimraf** (utilitário para limpeza)
- **Drizzle ORM** (mapeamento objeto-relacional para banco de dados)

## Instalação

1. Acesse a pasta do servidor:
	```powershell
	cd server
	```
2. Instale as dependências:
	```powershell
	npm install
	```
	Para instalar o Drizzle ORM:
	```powershell
	npm install drizzle-orm
	```

## Scripts Disponíveis

No diretório `server/`, utilize os scripts abaixo:

- `npm run build` — Compila o projeto TypeScript para JavaScript.
- `npm start` — Inicia o servidor (se configurado no `package.json`).
- `npm run clean` — Remove arquivos de build usando rimraf.

## Configuração de Ambiente

As variáveis de ambiente devem ser definidas no arquivo `.env` dentro da pasta `server/`.

## Como Executar

1. Configure o arquivo `.env` conforme necessário.
2. Execute o build:
	```powershell
	npm run build
	```
3. Inicie o servidor:
	```powershell
	npm start
	```

## Estrutura do Código

O ponto de entrada do servidor está em `src/index.ts`. Recomenda-se seguir boas práticas de organização de código e modularização.


## Próximos Passos

- Integração e configuração do Drizzle ORM para persistência de dados.
- Implementação de funcionalidades específicas do domínio da construção civil e segurança.
- Criação de testes automatizados.
- Desenvolvimento de frontend e integração com o backend.

## Contribuição

Sinta-se à vontade para abrir issues ou pull requests com sugestões, correções ou melhorias.

---

**Status:** Em desenvolvimento inicial. Atualmente, apenas o servidor está disponível.
