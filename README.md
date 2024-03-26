# API-NPC-Generator
API REST e Single-Page-Application atualizada e funcionando

### Briefing da API:
Uma API com Java 17 e a framework Spring, que possui as requisições HTTP ```GET,POST,PUT,DELETE``` para um sistema CRUD de gerenciamento de NPC's com um apoio de um banco de dados.

### Tecnologias utilizadas:
- Java 17;
- Spring Boot;
- Lombok;
- JPA / Hibernate;
- PostgreSQL;
- Angular.js
- Typescript


### Link do site: http://localhost:4200 (para rodar, basta dar o comenado "ng serve -o")
##### obs: O site não está 100% funcional em relação as funcionalidades REST


### Funcionalidades REST: 
- Criar NPC do zero;
- Criar NPC com algumas informações aleatórias;
- Deletar um NPC existente;
- Editar um NPC existente;
- Visualizar todos os NPC's no Banco de Dados;

### Exemplos de requisições REST:

#### Inicio do link: http://localhost:8092/npcGenerator

- Listar NPC's => Uma requisição do tipo ```GET``` que imprime todos os NPC's existentes no banco de dados; ""
- Criar novo NPC => Uma requisição do tipo ```POST``` que pega todas as informações preenchidas pelo usuário, e cria um novo NPC com as mesmas;""
- Gerar um novo NPC aleatorio => Uma requisição do tipo ```POST``` ao ser chamado, um novo NPC com informações aleatórias, mas congruentes, é criado e adicionado ao banco de dados;  "/randomNPC"
- Editar um NPC existente =>  Uma requisição do tipo ```PUT``` que edita um NPC a escolha do usuário, o cliente pode alterar qualquer informação, que sera editado no banco de dados;  "/edit=('id do NPC escolhido')"
- Apagar um NPC existente =>  Uma requisição do tipo ```DELETE``` que localiza um NPC através de seu ID, e o remove do banco de dados; "/delete=('id do NPC escolhido')"

