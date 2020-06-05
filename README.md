npm install ts-node -D

	Executa arquivos .ts
	Exemplo -> npx ts-node src\server.ts

npm i typescript -D

	Instala o typeScript

npx tsc --init

	Cria o arquivo tsconfig.json

npm i ts-node-dev -D

	Equivalente ao nodemon

npx knex migrate:latest --knexfile knexfile.ts migrate:latest

	Roda as migrations utilizando o knexfile indicado


Seeds -> Dados pré cadastrados dentro do banco de dados

Serialização de dados -> Transforma os dados pra um novo formato

Transaction -> Faz com que duas chamadas de querie criem dependencia uma da outra, caso uma falhe, ela não executa a proxima