
const express = require('express')

const router = express.Router()

const Resources = require('./model')


router.get('/', (req, res, next) => {
    Resources.get()
    .then(resource => {
        res.json(resource)
    }).catch(next)
})

// router.use('*', (req, res, next) => {
//     res.json({resource: 'up'})
// })

// router.post('/api/resources', (req, res, next) => {
//     // - Example of response body: `{"resource_id":1,"resource_name":"foo","resource_description":null}`
// })

// router.get('/api/resources', (req, res, next) => {
// //     - [ ] `[GET] /api/resources`
// //   - Example of response body: `[{"resource_id":1,"resource_name":"foo","resource_description":null}]`
// })

module.exports = router