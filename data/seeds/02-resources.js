const resources = [
    { resource_id:1, resource_name: 'Treehouse Book', resource_description: 'How to Build A Treehouse' },
    { resource_id: 2, resource_name: 'Gardening', resource_description:'How to Garden' },
  ]
  
  exports.resources = resources
  
  exports.seed = function (knex) {
    return knex('resources').insert(resources)
  }