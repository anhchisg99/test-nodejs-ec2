import express from 'express'
const app = express()

const port = 8080


// parse application/x-www-form-urlencoded
// parse application/json

app.get('/',(req,res)=>{
    res.send(`success`)
})

app.listen(port,()=>console.log(`listen on ${port} !!!`))