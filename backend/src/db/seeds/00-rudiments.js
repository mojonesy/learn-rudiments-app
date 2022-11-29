const rudiments = require("./00-rudiments.json");

exports.seed = async function(knex) {
  return knex
    .raw("TRUNCATE TABLE rudiments RESTART IDENTITY CASCADE")
    .then(() => {
      return knex("rudiments").insert(rudiments);
    })
};
