# todo-app

## Project setup
```
npm install
```

### Run the API with Node
```
node ./server/www.js
```

### Configure knexfile.js for your database
```
The knexfile.js requires a configuration of the database to be used as well as the database username and password
```

### Install the knex CLI and run the database migration and seed data
```
Knex comes with a CLI tool to make it easy to set up the database and sample seed data for this app

Install the CLI:
npm i -g knex

Run the migration:
knex migrate:latest

Run the seed data:
knex seed:run
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
