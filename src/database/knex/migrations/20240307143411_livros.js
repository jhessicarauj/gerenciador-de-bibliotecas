
exports.up = (knex) => {
    return knex.schema.createTable("users", (table) => {
        table.increments('id').primary();
        table.string("name").notNullable();
        table.string("username").notNullable();
        table.string("email").notNullable();
        table.string("telefone").notNullable();
        table.string("isAdmin").defautTo("false")

    })

  
};


exports.down = function(knex) {
  
};
