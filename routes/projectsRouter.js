const express =require('express')
const router = express.Router()
const projectDb = require('../data/helpers/projectModel')
router.use(express.json())

router.get('/', (req, res) =>{
projectDb.get()
.then(project => {
    res.status(200).json({data:project});
  })
  .catch(error => {
    res.status(500).json({
      message: 'Error retrieving project'});
      console.log(project)
  });
})

router.get('/:id/action',  (req, res) => {
    // do your magic!
    const  {id} = req.params
    projectDb.getProjectActions(id)
    .then(action =>{
      res.status(200).json({data:action})
    })
    .catch(err =>{
      res.status(500).json({ errorMessage: "we could not get the  project actions" });
    })
  });

router.post('/', (req, res) => {
    projectDb.insert(req.body)
    .then ( project =>{
        res.status(201).json(project)
    })
    .catch(error => {
       res.status(500).json({
            message:'error adding the project'
        })
    })
})

router.put('/:id', (req, res) => {
    // do your magic!
    const changes = req.body
    projectDb.update(req.params.id, changes)
    .then(user=>{
      res.status(200).json({msg: 'user updated'})
    })
   
  });
  router.delete('/:id', (req, res) => {
    // do your magic!
    projectDb.remove(req.params.id)
    .then(id=>{
     res.status(200).json({user:'user deleted'})
    
      })
      .catch(err =>{
        res.status(500).json({message:'Message not removed.....muhahahahaahahaha'})
    })
  });
  
module.exports = router