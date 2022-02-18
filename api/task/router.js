// build your `/api/tasks` router here
const express = require('express')
const { checkTaskId } = require('./task-middleware')
const Tasks = require('./model')

const router = express.Router()

router.get('/', (res, req, next) => {
    Tasks.find()
        .then(tasks => {
            res.json(tasks)
        }).catch(next)
})