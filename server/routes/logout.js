import express from 'express'
import { handleLogout } from '../controllers/LogoutController.js'

const router = express.Router();

router.get('/', handleLogout)

export default router
