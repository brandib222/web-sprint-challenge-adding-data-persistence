const db = require('../../data/dbConfig')

const checkProjectId = async (req, res, next) => {
    try {
        const existing = await db('projects')
            .where('project_id', req.params.project_id)
            .first()

            if(!existing) {
                next({status: 404, message: `project with project_id ${req.params.project_id} not found`})
            } else {
                next()
            }
    } catch (err) {
        next(err)
    }
}

module.exports = {
    checkProjectId
}