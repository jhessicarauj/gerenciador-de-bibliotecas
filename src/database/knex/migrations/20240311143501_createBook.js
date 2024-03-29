exports.up = (knex) => { return knex.schema.createTable("books", (table) => {
    table.increments('id').primary();
    table.string("titulo").notNullable();
    table.string("autor").notNullable();
    table.string("categoria").notNullable();
    table.boolean("disponibilidade").defaultTo("true")
})
  
};


exports.down = (knex) => {
    return knex.schema.droptableIfExists("books")
  
};
