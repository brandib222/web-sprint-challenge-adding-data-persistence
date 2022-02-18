const tasks = [
    { task_id:1, task_description: 'Buy gardening supplies!', task_notes: 'Need to check prices',task_completed: false  },
    { task_id: 2, task_description:'Buy a toolbox', task_notes:'What kind of tools do you need to build a treehouse', task_completed: true },
    
  ]
  
  exports.tasks = tasks
  
  exports.seed = function (knex) {
    return knex('tasks').insert(tasks)
  }