// build your `Task` model here
const db = require('../../data/dbConfig')

function get() {
    return db('tasks as t')
}

module.exports = {
    get
}