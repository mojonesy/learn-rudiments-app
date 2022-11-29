exports.up = function(knex) {
  return knex.schema.createTable("rudiments", (table) => {
    table.increments("rudiment_id").primary();
    table.integer("rudiment_number");
    table.string("name");
    table.string("type");
    table.string("image_url");
    table.timestamps(true, true);
  });
};


exports.down = function(knex) {
  return knex.schema.dropTable("suppliers");
};
