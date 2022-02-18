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

router.post('/api/projects', (res, req, next) => {
//     - Even though `project_completed` is stored as an integer, the API uses booleans when interacting with the client
//   - Example of response body: `{"project_id":1,"project_name":"bar","project_description":null,"project_completed":false}`
})

router.get('/api/projects', (res, req, next) => {
//     [ ] `[GET] /api/projects`
//   - Even though `project_completed` is stored as an integer, the API uses booleans when interacting with the client
//   - Example of response body: `[{"project_id":1,"project_name":"bar","project_description":null,"project_completed":false}]`
})



module.exports = router