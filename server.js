const express = require('express')  
const server = express()
const actionRouters = require('./routes/actionRouters')
const projectRouters =require('./routes/projectRouter')


server.use(express.json())
server.use('/api/project', projectRouters)
server.use('/api/action', actionRouters)
  

server.get("/api", (req, res) => {
    
    res.status(200).json({ api: "running"});
  });


  module.exports = server