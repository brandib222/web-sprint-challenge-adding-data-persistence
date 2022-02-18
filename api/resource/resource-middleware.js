const db = require('../../data/db-config')

const checkResourceId = async (req, res, next) => {
    try {
        const existing = await db('resources')
            .where('resource_id', req.params.resource_id)
            .first()

            if(!existing) {
                next({status: 404, message: `resource with resource_id ${req.params.resource_id} not found`})
            } else {
                next()
            }
    } catch (err) {
        next(err)
    }
}

module.exports = {
    checkResourceId
}