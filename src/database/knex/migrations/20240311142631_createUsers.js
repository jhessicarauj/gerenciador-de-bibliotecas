exports.up = (knex) => { return knex.schema.createTable("users", (table) => { 

    table.increments('id').primary(); 
    table.string("name").notNullable(); 
    table.string("username").notNullable(); 
    table.string("email").notNullable(); 
    table.string("telefone").notNullable(); 
    table.string("password").notNullable();
    table.booleans("isAdmin").defautTo("false") 

}) 
  
};


exports.down = (knex) => {
    return knex.schema.droptableIfExists("users")
  
};
