import express from 'express';
import bookController from '../controllers/bookController.js'

const router = express.Router();

router.get("/", bookController.getBooks);
router.get('/:id', bookController.getBook);
router.post("/", bookController.createBook);
router.get("/filtered/:id",bookController. getBookChangeOwnerName)
router.get("/ownedBy/:id",bookController. getAllBooksOwnedBy)
router.put("/borrow/:id",bookController. borrowBook)
router.put("/return/:id",bookController. returnBook)
router.get('/genre/:genre', bookController.getByGenre);

export default router;