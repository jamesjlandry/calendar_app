
exports.up = function(knex) {
    return knex.schema.createTable('events', function (table) {
        table.increments();
        table.string('name');
        table.string('type')
        table.string('description')
        table.string('start')
        table.string('duration')
        table.boolean('complete')
        table.integer('user_id')
        table.timestamps();
      })
};

exports.down = function(knex) {
    return knex.schema.dropTable('events')
};
