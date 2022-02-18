
exports.up = function (knex) {
    return knex.schema
      .createTable('projects', tbl => {
        tbl.increments('project_id');
        tbl.text('project_name', 128)
          .unique()
          .notNullable();
        tbl.text('project_description', 300)
          .unique()
          // need to make sure completed defaults to false
        tbl.text('project_completed', 128)
          .notNullable();
      })
      
      .createTable('resources', tbl => {
        tbl.increments('resource_id');
        tbl.text('resource_name', 128)
          .unique()
          .notNullable();
        tbl.text('resource_description', 300)
          .unique()
      })
      
      .createTable('tasks', tbl => {
          tbl.increments('tasks_id');
          tbl.text('task_description', 128)
            .notNullable()
          tbl.text('task_notes', 300)
            .unique()
            // again, how to make this default to false
          tbl.text('task_completed', 128)
            .notNullable()
          tbl.integer('project_id')
            .unsigned()
            .notNullable()
            .references('project_id')
            .inTable('projects')
            .onUpdate('CASCADE')
            .onDelete('CASCADE');
      })
  };
  
  exports.down = function (knex) {
    return knex.schema
      .dropTableIfExists('tasks')
      .dropTableIfExists('resources')
      .dropTableIfExists('projects');
  };