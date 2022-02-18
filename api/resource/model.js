// build your `Resource` model here
const db = require('../../data/dbConfig')

function get() {
    return db('resources as r')
}

module.exports = {
    get
}