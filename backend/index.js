const express = require('express');

const app = express();

app.get('/',(req, res)=>{
    res.send("HELLO WORLD");
})

app.get('/login',(req, res)=>{
    res.send("HELLO WORLD");
})

app.get('/register',(req, res)=>{
    res.send("HELLO WORLD");
})

app.get('/subscribe',(req, res)=>{
    res.send("HELLO WORLD");
})

app.get('/:userid',(req, res)=>{
    res.send("HELLO WORLD");
})


app.listen(4000, ()=>{
    console.log("Listening")
})