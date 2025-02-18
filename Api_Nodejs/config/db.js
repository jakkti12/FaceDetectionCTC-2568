const knex = require("knex")({
    client: "mysql",
    connection: {
        host: "localhost",
        port: 3306,
        user: "root",
        password: "root",
        database: "facescansystem_2567",
    },
});
  
module.exports = knex;
