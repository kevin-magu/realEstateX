import express from 'express';
import { signup } from '../controller/auth.controller.js';

const router = express.Router();

router.post('/putmeon', signup)

export default router;
