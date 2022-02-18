// build your `/api/projects` router here
const express = require('express')
// const { checkProjectId } = require('./project-middleware')

const router = express.Router()

const Projects = require('./model')

router.get('/', (req, res, next) => {
    Projects.get()
    .then(project => {
        res.json(project)
    }).catch(next)
})

// router.use('*', (req, res, next) => {
//     res.json({api: 'up'})
// })



module.exports = router