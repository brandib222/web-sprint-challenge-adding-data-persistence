// build your `Project` model here
const db = require('../../data/dbConfig')
const mappers = require('../../data/helpers/mappers')

function get() {
    return db('projects as p')
}
  
  function insert(project) {
    return db("projects")
      .insert(project)
      .then(([id]) => get(id));
  }

  function getProjectTasks(projectId) {
    return db("tasks")
      .where("project_id", projectId)
      .then(tasks => tasks.map(task => mappers.taskToBody(task)));
  }

  module.exports = {
    get, 
    insert,
    getProjectTasks
}

  // MIGHT NEED GET PROJECT TASKS
