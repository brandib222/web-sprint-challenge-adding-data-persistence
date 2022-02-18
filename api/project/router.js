// build your `/api/projects` router here
const express = require('express')
const { checkProjectId } = require('./project-middleware')
const Projects = require('./model')

const router = express.Router()

router.get('/', (res, req, next) => {
    Projects.find()
        .then(projects => {
            res.json(projects)
        }).catch(next)
})