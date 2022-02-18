const projects = [
    { project_id:1, project_name: 'Start a Garden', project_description: 'Spring is almost here, time to plant stuff!', project_completed: false  },
    { project_id: 2, project_name: 'Build a Treehouse', project_description:'Do you have a tree? Why is there not a house in it?', project_completed: true },
    
  ]
  
  exports.projects = projects
  
  exports.seed = function (knex) {
    return knex('projects').insert(projects)
  }