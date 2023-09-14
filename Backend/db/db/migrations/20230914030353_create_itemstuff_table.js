
exports.up = function(knex) {
    return knex.schema.createTable('itemstuff', table => {
      table.increments('id'); // adds an auto incrementing PK column
      table.string('name').notNullable(); // equivalent of varchar(255)
      table.timestamps(true, true); // utility columns, adds created_at and updated_at
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTableIfExists('itemstuff');
  };