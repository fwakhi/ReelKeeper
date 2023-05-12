import express from 'express'
import { handleLogin } from '../controllers/AuthController.js'

const router = express.Router();

router.post('/', handleLogin)

export default router
