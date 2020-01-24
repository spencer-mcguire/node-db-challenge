exports.seed = function(knex, Promise) {
  return knex('resources').insert([
    {
      name: 'Lambda Student',
      description: 'a soon to be hired developer'
    },
    {
      name: 'MacBook Pro #1',
      description: 'an overly expensive laptop computer'
    }
  ]);
};
