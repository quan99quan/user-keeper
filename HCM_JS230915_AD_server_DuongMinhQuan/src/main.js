import express from 'express'
const app = express()
import bodyParser from 'body-parser'
app.use(bodyParser.json())
import cors from 'cors'
app.use(cors())
import router from './routes'
app.use( "/api",router)
app.listen(3000, () => {
    console.log("http://127.0.0.1:3000");
})
