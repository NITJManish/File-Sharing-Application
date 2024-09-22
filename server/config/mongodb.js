import mongoose from 'mongoose';

const DataBase= async ()=>{
    try{
        await mongoose.connect(process.env.Data_URL);
         console.log('Database connected successfully');
    }catch(error){
        console.error('Error while connecting with database',error.message);
    }
}

export default DataBase;