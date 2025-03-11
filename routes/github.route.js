import express from 'express'
import { getRepos } from '../controllers/github.controller.js';

const router = express.Router();
router.route("/").get(getRepos)

export default router
