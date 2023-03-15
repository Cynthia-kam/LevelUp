import express from 'express';
import ownerController from '../controllers/ownerController.js'

const router = express.Router();

router.get("/", ownerController.getOwners);
// router.post("/", bookController.createBook);

export default router;