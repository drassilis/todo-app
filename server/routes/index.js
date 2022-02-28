const express = require("express");
const router = express.Router();
const query = require("../../database/query")

router.get("/tasks", function(req, res, next) {
  query.Tasks().then(tasks => {
    res.send({
      tasks: tasks
    })
  })
});

router.get("/donetasks", function(req, res, next) {
  query.DoneTasks().then(doneTasks => {
    res.send({
      doneTasks: doneTasks
    })
  })
});

router.post("/addtask", function(req, res, next) {
  let data = req.body.data
  query.AddTask(data).then(tasks => {
    res.send(tasks)
  })
});

router.post("/deletetask", function(req, res, next) {
  let id = req.body.data
  query.DeleteTask(id).then(tasks => {
    res.send(tasks)
  })
});

router.post("/marktaskdone", function(req, res, next) {
  let id = req.body.data
  query.MarkTaskDone(id).then(tasks => {
    res.send(tasks)
  })
})


module.exports = router;