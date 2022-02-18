// build your `Resource` model here
const db = require('../../data/dbConfig')

function find() {
    return db('resources as r')
        .leftJoin('tasks as t', 'r.resource_id', 't.task_id')
}

module.exports = {
    find
}