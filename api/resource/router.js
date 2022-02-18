// build your `/api/resources` router here
// const express = require('express')
// const { checkResourceId } = require('./resource-middleware')
// const Resources = require('./model')

// const router = express.Router()

// router.get('/', (res, req, next) => {
//     Resources.find()
//         .then(resources => {
//             res.json(resources)
//         }).catch(next)
// })

const express = require('express')

const router = express.Router()

router.use('*', (req, res, next) => {
    res.json({api: 'up'})
})

module.exports = router