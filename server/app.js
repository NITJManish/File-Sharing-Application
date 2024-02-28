import express from'express';
import router from './routers/routes'
import cors from 'cors';

const app=express();

const port =3000;

app.use(cors);
app.use('/',router);


app.listen(port,(req,res)=>{
    console.log("server run on port 3000");
})