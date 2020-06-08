const express = require('express')

const Action = require ('../data/helpers/actionModel')
const server = express.Router()

server.use(express.json())


server.get("/", (req, res, next) => {
    Action.get()
      .then(action => {
        res.status(200).json(action);
      })
      .catch(error => next(error));
  });

module.exports = server