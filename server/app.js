import express from 'express';
import cors from 'cors';
import router from './routers/routes.js';
import DataBase from './config/mongodb.js';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/', router);

const PORT = process.env.PORT || 8000;

DataBase();

app.listen(PORT, () => console.log(`Server is running on PORT ${PORT}`));