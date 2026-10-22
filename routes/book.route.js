const express = require("express");
const router = express.Router();
const {getAllBooks,getBook,addBook,deleteBook,changeBook ,borrowing,Returning } = require("../controllers/book.controller");

router.get("/", getAllBooks);
router.get("/:id", getBook);
router.post("/", addBook);
router.deleted("/:id",deleteBook)
router.put("/:id",changeBook)
router.putch("/:bookId/borrowing/:userId",borrowing)
router.putch("/:bookId/Returning/userId",Returning)
module.exports = router;