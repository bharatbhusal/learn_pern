const Pool = require('pg').Pool;

const pool = new Pool({
    user: "username",            //postgres root user
    password: "db-password",
    host: "localhost",           //for own machine
    port: "5432",                //default
    database: "database-name"

})

module.exports = pool;