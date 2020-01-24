exports.seed = function(knex, Promise) {
  return knex('tasks').insert([
    {
      description: 'Lorem lorem lorem ',
      notes: 'fhjnknjwkf',
      completed: false,
      project_id: 1
    },
    {
      description: 'Lorem ldfafd ',
      notes: '',
      completed: false,
      project_id: 1
    },
    {
      description: 'Lorfewafvewavdfva ',
      notes: 'fhfdsffsfsf',
      completed: false,
      project_id: 1
    },
    {
      description: 'Stuff',
      notes: 'fhjnknjwkf',
      completed: false,
      project_id: 2
    },
    {
      description: 'Stuff stuff stuff  ',
      notes: '',
      completed: false,
      project_id: 1
    },
    {
      description: 'fsdfadfafdfcwecewcwe ',
      notes: 'fhfdsffsfsf',
      completed: false,
      project_id: 3
    }
  ]);
};
