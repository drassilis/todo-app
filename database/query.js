var knex = require("./knex");

function Tasks() {
    return knex("tasks")
        .select("id", "title")
        .where("status", "not_done")
}

function DoneTasks() {
    return knex("tasks")
        .select("id", "title")
        .where("status", "done")
}

function AddTask(data) {
    return knex("tasks")
        .returning("*")
        .insert({
            title: data,
            status: "not_done"
        })
}

function MarkTaskDone(id) {
    return knex("tasks")
        .returning("*")
        .where("tasks.id", id)
        .update({
            status: "done"
        })
}

function DeleteTask(id) {
    return knex("tasks")
        .returning("*")
        .where("tasks.id", id)
        .del()
}

module.exports = {
    Tasks,
    DoneTasks,
    AddTask,
    DeleteTask,
    MarkTaskDone
}