const express = require ('express');
const app =express();

const port=3000;

app.get('/', (req,res)=>{
    res.send(
        "<h1>Hello world</h1><h1>my name is sagar</h1>")
});

app.listen(port);
