import express from 'express'
import 'dotenv/config.js'
import './config/database.js' 
import path from 'path'
import cookieParser from 'cookie-parser'
import logger from 'morgan'
import indexRouter from './routes/index.js'
import { __dirname } from './utils.js'
import cors from "cors"
const app = express() //método para levantar un servidor

// // view engine setup
// app.set('views', path.join(__dirname, 'views'))
// app.set('view engine', 'ejs')

//middlewares
app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))
app.use(cors())
//routes
app.use('/', indexRouter)
// app.use('/users', usersRouter)


export default app
