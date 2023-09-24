## Proect folder

```
.
├── README.md
├── package-lock.json
├── package.json
├── prisma
│   ├── migrations
│   │   ├── 20230920145314_init
│   │   │   └── migration.sql
│   │   └── migration_lock.toml
│   ├── schema.prisma
│   └── seed.js
└── src
    ├── app.js
    ├── bin
    │   └── www
    ├── controllers
    │   └── UserController.js
    ├── public
    │   ├── images
    │   ├── javascripts
    │   └── stylesheets
    │       └── style.css
    ├── routes
    │   ├── index.js
    │   └── users.js
    ├── services
    │   └── UserService.js
    └── views
        ├── error.jade
        ├── index.jade
        └── layout.jade
```

## How to

### Express

https://www.expressjs.com.cn/starter/generator.html

1. npx express-generator
2. npm install

after that, I move all the bin, public, routes, views and app..js into a new folder: src

### prisma

https://zhuanlan.zhihu.com/p/459906710?utm_id=0
https://www.prisma.io/docs/getting-started/setup-prisma/start-from-scratch/relational-databases/connect-your-database-node-mysql
https://github.com/prisma/prisma-examples/tree/latest/javascript/rest-express/prisma
https://www.prisma.io/docs/guides/migrate/seed-database

1. npm i prisma @prisma/client --save-dev
2. npx prisma init --datasource-provider mysql

   - modify the DATABASE_URL in .env, and add SHADOW_DATABASE_URL
   - also add the shadowDatabaseUrl = env("SHADOW_DATABASE_URL") in prisma/schema.prisma - datasource
   - add Model like User in schema.prisma

3. create seed.js and update the data you want
4. npx prisma generate
5. npx prisma migrate dev --name init

### run app

DEBUG=dailycost:\* npm start

### Unit test

Jest and supertest

https://rrawat.com/blog/unit-test-express-api
https://medium.com/@csalazar94/javascript-testing-made-easy-a-step-by-step-guide-with-jest-and-supertest-8e2a35f13506
