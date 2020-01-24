exports.seed = function(knex, Promise) {
  return knex('projects').insert([
    { name: 'Stain Deck', description: 'Lorem lorem lorem ', completed: false },
    {
      name: 'Rebuild Motorcycle',
      description: 'Lorem lorem lorem ',
      completed: true
    },
    { name: 'Build App', description: 'Lorem lorem lorem ', completed: false }
  ]);
};
