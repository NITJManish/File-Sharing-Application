import mongoose from 'mongoose';

const DataBase= async ()=>{
    try{
        await mongoose.connect(Data_URL,{useNewUrlParser:true});
         console.log('Database connected successfully');
    }catch(error){
        console.error('Error while connecting with database',error.message);
    }
}

export default DataBase;