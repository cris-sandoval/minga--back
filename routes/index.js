import express from 'express'
import usersRouter from './users.js' //rutas de users
let router = express.Router()

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'probando la api' })
})
router.use('/users', usersRouter)
export default router
