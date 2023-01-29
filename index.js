const express = require('express');
const fs = require('fs')

const app = express();



app.get("/",(req,res)=>{
  
    let date = new Date()
    let timeStamp = date.getTime()
    fs.writeFileSync(`${timeStamp}.txt`, `${date}` ,'utf-8')
    let data = fs.readFileSync(`${timeStamp}.txt`,"utf-8")
    res.writeHead(200,{'content-Type':'text/html'})
    res.end(data)
   

})

const port = process.env.PORT || 7000;

app.listen(port,()=> console.log("listening on port"+port));