### Projeto Blogs API

Este projeto consiste em uma API para gerenciar blogs, permitindo o cadastro de usuários, categorias e posts, bem como a associação entre eles.

### Tecnologias Utilizadas

- Node.js
- Express.js
- Sequelize (ORM para interagir com o banco de dados)
- MySQL (Banco de dados relacional)
- Mocha e Chai (para testes)

### Requisitos Obrigatórios

1. Crie migrations para as tabelas users, categories, blog_posts, posts_categories
    - Essas migrations devem estar no diretório correto e respeitar a nomenclatura pedida no requisito, seguindo o diagrama de Entidade-Relacionamento e o formato das entidades.

2. Crie o modelo User em src/models/User.js com as propriedades corretas
    - O modelo deve estar no diretório correto e respeitar a nomenclatura pedida no requisito, seguindo o diagrama de Entidade-Relacionamento e o formato das entidades.
    - As propriedades podem estar em camelCase se underscored for true.

3. Sua aplicação deve ter o endpoint POST /login
    - Deve ser acessível através do URL /login.
    - O corpo da requisição deve conter email e password.

4. Sua aplicação deve ter o endpoint POST /user
    - Deve ser acessível através do URL /user.
    - Deve ser capaz de adicionar um novo usuário à tabela no banco de dados.

5. Sua aplicação deve ter o endpoint GET /user
    - Deve ser acessível através do URL /user.
    - Deve ser capaz de trazer todos os usuários do banco de dados.

6. Sua aplicação deve ter o endpoint GET /user/:id
    - Deve ser acessível através do URL /user/:id.
    - Deve ser capaz de trazer o usuário baseado no id do banco de dados se ele existir.

7. Crie o modelo Category em src/models/Category.js com as propriedades corretas
    - O modelo deve estar no diretório correto e respeitar a nomenclatura pedida no requisito, seguindo o diagrama de Entidade-Relacionamento e o formato das entidades.

8. Sua aplicação deve ter o endpoint POST /categories
    - Deve ser acessível através do URL /categories.
    - Deve ser capaz de adicionar uma nova categoria à tabela no banco de dados.

9. Sua aplicação deve ter o endpoint GET /categories
    - Deve ser acessível através do URL /categories.
    - Deve ser capaz de trazer todas as categorias do banco de dados.

10. Crie o modelo BlogPost em src/models/BlogPost.js com as propriedades e associações corretas
    - O modelo deve estar no diretório correto e respeitar a nomenclatura pedida no requisito, seguindo o diagrama de Entidade-Relacionamento e o formato das entidades.
    - Deve respeitar a associação correta (N:1) com o modelo User.

11. Crie o modelo PostCategory em src/models/PostCategory.js com as propriedades e associações corretas
    - O modelo deve estar no diretório correto e respeitar a nomenclatura pedida no requisito, seguindo o diagrama de Entidade-Relacionamento e o formato das entidades.
    - Deve respeitar a associação correta (N:N) entre o modelo BlogPost e o modelo Category.

12. Sua aplicação deve ter o endpoint POST /post
    - Deve ser acessível através do URL /post.
    - Deve ser capaz de adicionar um novo post de blog e vinculá-lo às categorias em suas tabelas no banco de dados.

13. Sua aplicação deve ter o endpoint GET /post
    - Deve ser acessível através do URL /post.
    - Deve ser capaz de trazer todos os posts de blog, seus autores e categorias do banco de dados.

14. Sua aplicação deve ter o endpoint GET /post/:id
    - Deve ser acessível através do URL /post/:id.
    - Deve ser capaz de trazer o post de blog baseado no id do banco de dados se ele existir.

15. Sua aplicação deve ter o endpoint PUT /post/:id
    - Deve ser acessível através do URL /post/:id.
    - Deve ser capaz de alterar um post do banco de dados, se ele existir. Somente o título e o conteúdo do post podem ser alterados.

### Requisitos Bônus

16. Sua aplicação deve ter o endpoint DELETE /post/:id
    - Deve ser acessível através do URL /post/:id.
    - Deve ser capaz de deletar um post de blog baseado no id do banco de dados se ele existir.

17. Sua aplicação deve ter o endpoint DELETE /user/me
    - Deve ser acessível através do URL /user/me.
    - Deve ser capaz de deletar você do banco de dados, baseado no id que está dentro do seu token.
    - A aplicação deve ser capaz de utilizar o token de autenticação nos headers para identificar o usuário logado correspondente a ser apagado.

18. Sua aplicação deve ter o endpoint GET /post/search?q=:searchTerm
    - Deve ser capaz de trazer os blogs post baseados no q do banco de dados, se ele existir.
    - Sua aplicação deve ser capaz de retornar um array de blogs post que contenham em seu título ou conteúdo o termo passado na URL.
    - Sua aplicação deve ser capaz de retornar um array vazio caso nenhum blog post satisfaça a busca.

### Conclusão

O projeto Blogs API oferece uma API robusta para gerenciamento de blogs, permitindo o cadastro de usuários, categorias e posts. Utilizando tecnologias modernas como Node.js, Express.js e Sequelize, oferece uma solução escalável e de fácil manutenção. Com os requisitos obrigatórios e bônus implementados, a aplicação proporciona uma experiência completa de gerenciamento de conteúdo para blogs.
