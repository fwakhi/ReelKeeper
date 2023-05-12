import express from 'express'
import { handleRefreshToken } from '../controllers/RefreshTokenController.js'

const router = express.Router();

router.get('/', handleRefreshToken)

export default router
