exports.up = function(knex) {
  return knex.schema
    .createTable('projects', tbl => {
      tbl.increments();

      tbl
        .string('name', 128)
        .notNullable()
        .index();

      tbl.string('description', 4000).notNullable();

      tbl.boolean('completed').defaultTo(false);
    })
    .createTable('tasks', tbl => {
      tbl.increments();

      tbl
        .string('description', 4000)
        .notNullable()
        .index();

      tbl.string('notes', 4000);

      tbl.boolean('completed').defaultTo(false);

      tbl
        .integer('project_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('projects')
        .onUpdate('CASCADE')
        .onDelete('RESTRICT');
    })
    .createTable('resources', tbl => {
      tbl.increments();

      tbl
        .string('name', 128)
        .unique()
        .notNullable();

      tbl.string('description', 4000);
    })
    .createTable('project_resources', tbl => {
      tbl.increments();

      tbl
        .integer('project_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('projects')
        .onUpdate('CASCADE')
        .onDelete('RESTRICT');

      tbl
        .integer('resource_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('resources')
        .onUpdate('CASCADE')
        .onDelete('RESTRICT');
    });
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('project_resources')
    .dropTableIfExists('resources')
    .dropTableIfExists('tasks')
    .dropTableIfExists('projects');
};
