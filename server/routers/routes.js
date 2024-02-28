import express from 'express';
import {uploadImage} from '../controller/imgController'
const router=express.Router();


router.post('/upload',middleware,uploadImage);


export default router;