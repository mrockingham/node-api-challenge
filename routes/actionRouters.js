const express = require('express')

const Action = require ('../data/helpers/actionModel')
const server = express.Router()

server.use(express.json())

// Get Request
server.get("/", (req, res, next) => {
    Action.get()
      .then(action => {
        res.status(200).json(action);
      })
      .catch(error => next(error));
  });

  //post Request
  server.post('/', validateActionId, (req, res) => {
      const action = req.body
    Action.insert(action)
    .then ( action =>{
        res.status(201).json(action)
    })
    .catch(error => {
        // log error to database
        console.log(error)
        res.status(400).json({
            message:'error adding the action'
        })
    })
})

///delete Request

server.delete('/:id', validateActionId, (req, res) =>{
    Action.remove(req.params.id)
    .then(count =>{
        if (count > 0){
            res.status(200).json({message: 'Action deleted'})
        } else{
            res.status(404).json({message: 'the Action could not be found'})
        }
    })
    .catch(error => {
        //lot error to database
        console.log(error)
        res.status(500).json({
            message: 'error deleting post'
        })
    })
})

//update request

server.put('/:id', validateActionId, (req, res)=>{
    const changes = req.body
    Action.update(req.params.id, changes)
    .then(Action =>{
        res.status(200).json({Action})
       })
    .catch(error => {
        console.log(error)
        res.status(500).json({
            message: 'error updating post',
        })
    })
}) 


function validateActionId(req,res, next){
    const {id} = req.params

    Action.get(id)
    .then(action =>{
        if(action) {
            req.action = action
            next()
        } else{
            res.status(404).json({message: 'action not found'})
        }
    })
}

module.exports = server