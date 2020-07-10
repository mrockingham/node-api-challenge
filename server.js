const express = require('express')
const server = express()
const cors = require ('cors')
const chalk = require('chalk')
const morgan = require('morgan')

const projectsRouter = require('./routes/projectsRouter')
const actionRouter = require('./routes/actionRoutes')

server.use(express.json())
server.use(cors())
server.use(morgan('dev'))

server.use('/api/projects', projectsRouter)
server.use('/api/actions', actionRouter)

module.exports = server