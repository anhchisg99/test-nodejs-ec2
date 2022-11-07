import express from 'express'
const app = express()
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const port = 8080
app.use(express.static('public'))
// parse application/x-www-form-urlencoded
// parse application/json

app.get('/chan',(req,res)=>{
    res.send(`success`)
})

app.listen(port,()=>console.log(`listen on ${port} !!!`))