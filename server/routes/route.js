import express from "express";
import {adduser, getusers, getuser} from '../controller/user-controller.js';


const router = express.Router();

router.post('/add', adduser);
router.get('/all', getusers);
router.get('/:id', getuser);



export default router; 