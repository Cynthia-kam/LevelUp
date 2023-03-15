import express from 'express';
import borrowerController from '../controllers/borrowerController.js';

const router = express.Router();

router.get("/", borrowerController.getBorrowers);
// router.post("/", bookController.createBook);

export default router;