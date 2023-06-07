import express from 'express'
import { handleLogin, handleAuth } from '../controllers/AuthController.js'
import verifyJWT from '../middleware/verifyJWT.js';

const router = express.Router();

router.post('/', handleLogin)
router.get('/', verifyJWT, handleAuth)

export default router
