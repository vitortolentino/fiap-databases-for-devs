---
presentation:
  width: 1500
  height: 800
  theme: night.css
---
<!-- slide -->

### Bancos de Dados Relacionais:

Os bancos de dados relacionais são sistemas de gerenciamento de banco de dados (SGBD) que organizam dados em tabelas com colunas predefinidas. Eles seguem o modelo relacional, baseado no conceito de relações, onde cada linha em uma tabela representa uma entidade e cada coluna representa um atributo dessa entidade. O SQL (Structured Query Language) é geralmente usado para manipular e consultar dados em bancos de dados relacionais.

<!-- slide -->

**Características:**
- Estrutura de dados organizada em tabelas relacionadas.
- Utiliza o SQL para consultas e manipulação de dados.
- Garante consistência e integridade dos dados por meio de chaves primárias e estrangeiras.
- Suporta transações ACID (Atomicidade, Consistência, Isolamento e Durabilidade).
- Ideal para aplicações com esquemas de dados bem definidos e relacionamentos complexos.

<!-- slide -->

**Exemplos de Bancos de Dados Relacionais:**
- MySQL
- PostgreSQL
- Oracle Database
- SQL Server

<!-- slide -->

**Use Cases:**
- Aplicações empresariais que exigem transações complexas e garantias de integridade dos dados.
- Sistemas que necessitam de consultas complexas envolvendo múltiplas tabelas.

<!-- slide -->

### Bancos de Dados Não-Relacionais (NoSQL):

Os bancos de dados não-relacionais, também conhecidos como NoSQL (Not Only SQL), são sistemas de gerenciamento de banco de dados que armazenam e recuperam dados de maneiras que não requerem estruturas de dados fixas, como tabelas com esquemas predefinidos. Eles são projetados para escalabilidade e flexibilidade, e podem lidar com tipos de dados variados e volumes massivos de dados de forma eficiente.

<!-- slide -->

**Características:**
- Estrutura de dados flexível, como documentos, pares chave-valor, grafos ou colunas.
- Não utiliza SQL padrão para consulta, mas pode ter sua própria linguagem de consulta.
- Escalabilidade horizontal, permitindo adicionar novos nós para lidar com o aumento de carga.
- Flexibilidade para lidar com dados não estruturados e sem esquema fixo.
- Adequado para aplicações com necessidades de escalabilidade e flexibilidade de esquema.

<!-- slide -->

**Exemplos de Bancos de Dados Não-Relacionais:**
- MongoDB (documentos)
- Redis (pares chave-valor)
- Neo4j (grafos)
- Cassandra (colunas)

<!-- slide -->

**Use Cases:**
- Aplicações web e móveis que lidam com grandes volumes de dados não estruturados, como mídia social e análise de big data.
- Sistemas de gerenciamento de conteúdo (CMS) que precisam lidar com conteúdo variado e em constante mudança.
- Aplicações que exigem alta disponibilidade e escalabilidade horizontal.

<!-- slide -->

### Prisma ORM:

Prisma é uma camada de abstração de banco de dados e um ORM (Object-Relational Mapping) para Node.js e TypeScript. Ele simplifica o acesso e a manipulação de dados em bancos de dados relacionais, oferecendo uma interface de programação de aplicativos (API) intuitiva e moderna. Prisma permite que os desenvolvedores escrevam consultas de banco de dados de forma declarativa, usando uma sintaxe simples e tipada.

<!-- slide -->

**Características:**
- Mapeamento de objetos-relacionais (ORM) para interação simplificada com o banco de dados.
- Geração de esquemas de banco de dados a partir de modelos de dados definidos em código.
- Type-safe queries, com suporte a TypeScript para prevenção de erros de tipos em tempo de compilação.
- Suporte para diversos bancos de dados relacionais, como PostgreSQL, MySQL e SQLite.
- Integração com ferramentas populares de desenvolvimento, como GraphQL.

<!-- slide -->

**Use Cases:**
- Desenvolvimento de aplicativos web e API que necessitam de acesso eficiente e seguro ao banco de dados.
- Projetos que utilizam TypeScript e desejam garantir a integridade de tipos nas consultas de banco de dados.
- Equipes de desenvolvimento que desejam adotar uma abordagem declarativa e moderna para o acesso ao banco de dados.

<!-- slide -->

### Mongoose:

Mongoose é uma biblioteca de modelagem de objetos para MongoDB e Node.js. Ele fornece uma camada de abstração que simplifica a interação com o MongoDB, permitindo aos desenvolvedores definir modelos de dados com esquemas predefinidos e realizar operações de banco de dados de forma intuitiva. Mongoose também oferece funcionalidades adicionais, como validação de dados, gatilhos e métodos de instância.

<!-- slide -->

**Características:**
- Mapeamento de objetos para documentos BSON no MongoDB.
- Definição de esquemas de dados com validação e restrições de tipo.
- Suporte a consultas usando métodos fluentes e callbacks.
- Middleware para gatilhos de eventos, como antes de salvar ou remover um documento.
- Integração com o sistema de promessas do Node.js.

<!-- slide -->

**Use Cases:**
- Desenvolvimento de aplicativos Node.js que utilizam MongoDB como banco de dados.
- Projetos que necessitam de esquemas de dados flexíveis e validação de dados.
- Equipes de desenvolvimento que preferem uma API de banco de dados fluente e baseada em objetos para interação com o MongoDB.

<!-- slide -->

**Bancos de Dados Relacionais vs. Não-Relacionais:**
- **Relacionais:**
    - Estrutura de dados organizada em tabelas relacionadas.
    - Ideal para aplicações com esquemas de dados bem definidos e relacionamentos complexos.
    - Melhor para aplicações que exigem transações complexas e garantias de integridade dos dados.
- **Não-Relacionais:**
    - Estrutura de dados flexível, permitindo armazenar dados não estruturados.
    - Escalabilidade horizontal e flexibilidade de esquema.
    - Melhor para aplicações que precisam lidar com grandes volumes de dados não estruturados e em constante mudança.

<!-- slide -->

**Perguntas?**

<!-- slide -->
**Fale Comigo:** [Meu LinkedIn](https://www.linkedin.com/in/vitor-rodrigues-dev/)