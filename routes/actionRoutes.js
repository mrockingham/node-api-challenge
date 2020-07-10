const express =require('express')
const router = express.Router()
const actionDb = require('../data/helpers/actionModel')
router.use(express.json())


router.get('/', (req, res) =>{
    actionDb.get()
    .then(project => {
        res.status(200).json({data:project});
      })
      .catch(err => {
        res.status(500).json({
          message: 'Error retrieving posts'});
          console.log(project)
      });
    })

    router.post('/:id/action', validatePost, (req, res) => {
        const body = req.body
        body.project_id = req.params.id

        actionDb.insert(body)
        .then(action =>{
        res.status(201).json(action)
          
        })
        .catch(err =>{
          res.status(500).json({message: err})
        })
      });

      router.delete('/:id', (req, res) => {
        // do your magic!
        actionDb.remove(req.params.id)
        .then(id=>{
         res.status(200).json({action:'action deleted'})
        
          })
          .catch(err =>{
            res.status(500).json({message:'Message not removed.....muhahahahaahahaha'})
        })
      });

      router.put('/:id', (req, res) => {
        // do your magic!
        const changes = req.body
        actionDb.update(req.params.id, changes)
        .then(user=>{
          res.status(200).json({msg: 'action updated'})
        })
    });


      function validatePost(req, res, next) {
        // do your magic!
      
        
        actionDb.get(req.params.id)
        .then(resp => {
            if(resp){
                
            }   else {
                res.status(404).json({message: 'action Id not found'})
            }
        })
        .catch(err => {
            res.status(500).json({err})
        })
        next()
      }


module.exports = router