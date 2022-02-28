/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('tasks').del()
  await knex('tasks').insert([
    {
      title: 'Create DB tables',
      status: 'done'
    },
    {
      title: 'Create TODO app',
      status: 'not_done'

    },
    {
      title: 'Add new task',
      status: 'done'

    },
    {
      title: 'Send completion email',
      status: 'not_done'
    }
  ]);
};
