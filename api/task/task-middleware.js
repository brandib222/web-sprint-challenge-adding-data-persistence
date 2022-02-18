const db = require('../../data/db-config')

const checkTaskId = async (req, res, next) => {
    try {
        const existing = await db('tasks')
            .where('task_id', req.params.task_id)
            .first()

            if(!existing) {
                next({status: 404, message: `task with task_id ${req.params.task_id} not found`})
            } else {
                next()
            }
    } catch (err) {
        next(err)
    }
}

module.exports = {
    checkTaskId
}