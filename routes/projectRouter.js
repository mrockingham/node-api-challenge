const express =require('express')

const Project= require('../data/helpers/projectModel')

const server = express.Router()

server.use(express.json())





server.get('/', (req, res) => {
    Project.get()
    .then(Project => {
      res.status(200).json(Project);
    })
    .catch(error => {
      // log error to database
      console.log(error);
      res.status(500).json({
        message: 'Error retrieving posts',
      });
    });
  });


server.post('/', (req, res) => {
    Project.insert(req.body)
    .then ( Project =>{
        res.status(201).json(Project)
    })
    .catch(error => {
        // log error to database
        console.log(error)
        res.status(500).json({
            message:'error adding the project'
        })
    })
})

server.delete('/:id', (req, res) =>{
    Project.remove(req.params.id)
    .then(count =>{
        if (count > 0){
            res.status(200).json({message: 'project deleted'})
        } else{
            res.status(404).json({message: 'the project could not be found'})
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

server.put('/:id', (req, res)=>{
    const changes = req.body
    Project.update(req.params.id, changes)
    .then(Project =>{
        res.status(200).json({Project})
       })
    .catch(error => {
        console.log(error)
        res.status(500).json({
            message: 'error updating post',
        })
    })
})  





module.exports = server