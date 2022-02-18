// build your `/api/tasks` router here
// const express = require('express')
// const { checkTaskId } = require('./task-middleware')
// const Tasks = require('./model')

// const router = express.Router()

// router.get('/', (res, req, next) => {
//     Tasks.find()
//         .then(tasks => {
//             res.json(tasks)
//         }).catch(next)
// })

const express = require('express')

const router = express.Router()

router.use('*', (req, res, next) => {
    res.json({api: 'up'})
})

router.post('/api/tasks', (req, res, next) => {
    `[POST] /api/tasks`
//   - Even though `task_completed` is stored as an integer, the API uses booleans when interacting with the client
//   - Example of response body: `{"task_id":1,"task_description":"baz","task_notes":null,"task_completed":false,"project_id:1}`
})

router.get('/api/tasks', (req, res, next) => {
//     [ ] `[GET] /api/tasks`
//   - Even though `task_completed` is stored as an integer, the API uses booleans when interacting with the client
//   - Each task must include `project_name` and `project_description`
//   - Example of response body: `[{"task_id":1,"task_description":"baz","task_notes":null,"task_completed":false,"project_name:"bar","project_description":null}]`
})

module.exports = router