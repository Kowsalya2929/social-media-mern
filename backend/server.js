import dotenv from 'dotenv'
dotenv.config({ quiet: true });
// console.log(dotenv.config({ debug: true })) //show extra logs
// console.log(dotenv.config({ quiet: true })) //show no logs at all
import express from 'express'
import cors from 'cors'
import connectDB from './config/connectDB.js'
import path from 'path'
import authRoute from './routes/authRoute.js'

const _dirname  = path.resolve()

const app = express()
connectDB()

app.use(cors({origin: "http://localhost:5173",credentials: true}))
app.use(express.json())

app.use('/v1/api/auth',authRoute)

if(process.env.NODE_ENV === "production"){
    app.use(express.static(path.join(_dirname,'/frontend/dist')))
}

app.listen(process.env.PORT,()=>{
    console.log(`Server running on port : ${process.env.PORT}`)
})