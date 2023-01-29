
const fs = require('fs')
const http = require("http")
const {type} = require("os")
const port = 7000;

const Server = http.createServer((req,res)=>{
    let date = new Date()
    let timeStamp = date.getTime()
    fs.writeFileSync(`${timeStamp}.txt`, `${date}` ,'utf-8')
    let data = fs.readFileSync(`${timeStamp}.txt`,"utf-8")
    res.writeHead(200,{'content-Type':'text/html'})
    res.end(data)
})




Server.listen(port,()=> console.log("listening on port "+port));