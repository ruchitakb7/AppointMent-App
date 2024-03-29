const express= require('express');
const app= express();

const path=require('path');

const seq = require('./util/database');  

app.use(express.json());

app.use(express.static('public')) //static

app.use(express.static(path.join(__dirname, "views"))) 

const routerfile= require('./routes/routes.js');   

 app.use(routerfile);

seq.sync()
.then(res=>
   { app.listen(3004);  
})                               
.catch((e)=>{
   console.log(e)
})
