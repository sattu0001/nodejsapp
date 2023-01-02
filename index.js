const express = require ('express');
const app =express();

const port=3000;

app.get('/', (req,res)=>{
    res.send(
       "<h1>Name : Sagar V Ashtekar<h1><h1>Prn : 220941220147<h1><h1>Roll-no : 229198<h1><h1>Course : PG-DAC<h1>")
});

app.listen(port);
