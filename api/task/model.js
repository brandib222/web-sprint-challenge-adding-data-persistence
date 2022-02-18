// build your `Task` model here
const db = require('../../data/dbConfig')

function find() {
    return db('tasks as t')
        .leftJoin('projects as p', 't.task_id', 'p.project_id')
}

module.exports = {
    find
}