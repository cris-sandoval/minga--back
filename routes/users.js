import express from 'express'
import User from '../models/User.js'
let router = express.Router()

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('probando api 2');
});
router.post(
  '/', async (req, res) => {
    try {
      let user = await User.create(req.body)
      return res.status(201).json({
        success: true,
        user: user,
        // id: user._id
      })
    } catch (error) {
      console.log(error)
      return res.status(400).json({
        success:false,
        message: 'no se pudo crear'
      })
      }
      })
      


export default router
