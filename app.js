const express=require("express");
const app=express();
app.use(express.json());
const {books,borrowings}=require("./db")
const port=3000
app.listen(port,()=>
console.log(`Server is running on port ${port}`))
app.get('/',(req,res)=>{
    res.status(200).json(borrowings)
})
app.get('/books',(req,res)=>{
     if(books.length===0)
        return res.status(404).json({ message: "No books found" })
        let page=Number(req.query.page)||1
        let limit=Number(req.query.limit)||5
        let categoryBook=req.query.category
        let filteredBooks=categoryBook?books.filter(b=>b.category===categoryBook):books
        let startIndex=(page-1)*limit
        let endIndex=page*limit
        let limitedBooks=filteredBooks.slice(startIndex,endIndex)
        res.status(200).json(limitedBooks)
})
app.get('/books/:id', (req,res)=>{
    const bookId=Number(req.params.id)
    const book=books.find(b=>b.id===bookId)
    if(books.length===0)
        res.status(404).json({message:"No books found"})
    else  if(!book)
        res.status(404).json({message:"This id does not exist"})
    else
        res.status(200).json(book)
})
app.post('/books',(req,res)=>{
    let bookToAdd=req.body
    if(!bookToAdd.name||!bookToAdd.category||!bookToAdd.price)
        res.status(400).json({message:"You need to enter all the details of the book."})
    else{
        if(!bookToAdd.IsBorrowed)
            bookToAdd.IsBorrowed=false
        let bookId=books[books.length-1].id+1
        let newBook={id:bookId, ...bookToAdd}
        books.push(newBook)
        res.status(201).json(books)
    }
})
app.put('/books/:id',(req,res)=>{
    let bookId=Number(req.params.id)
    let updatedBook=req.body
    let index=books.findIndex(b=>b.id===bookId)
    if(index===-1)
        res.status(400).json({message:"This id does not exist"})
    else
    {
        books[index]={id:bookId,...books[index],...updatedBook}
        res.status(200).json(books[index])
    }
})
app.patch('/books/:bookId/users/:userId',(req,res)=>{
    const bookId=Number(req.params.bookId)
    const userId=Number(req.params.userId)
    const indexBook=books.findIndex(b=>b.id===bookId)
     if(indexBook===-1)
        res.status(404).json({message:"This id does not exist"})
    else if(books[indexBook].IsBorrowed===true)
        res.status(400).json({message:"This book is borrowed"})
    else{
        books[indexBook].IsBorrowed=true
        const borrowing={
            borrowDate:new Date(),
            customerCode:userId
        }
        borrowings.push(borrowing)
        res.status(200).json({message: "The book was successfully borrowed.", borrowing})
    }
})
app.patch('/books/:id',(req,res)=>{
    let bookId=Number(req.params.id)
    let indexBook=books.findIndex(b=>b.id===bookId)
    if(indexBook===-1)
        res.status(404).json({message:"This id does not exist"})
    else if(books[indexBook].IsBorrowed===false)
        res.status(400).json({message:"This book is not borrowed."})
    else{
        books[indexBook].IsBorrowed=false
        res.status(200).json({message:"The book was successfully returned.", ...books[indexBook]})
    }
})
app.delete('/books/:bookId',(req,res)=>{
    const bookId=Number(req.params.bookId)
    const indexBook=books.findIndex(b=>b.id===bookId)
    if(indexBook===-1)
        res.status(404).json({message:"This id does not exists"})
    else{
        const b=books.splice(indexBook,1)
        res.status(200).json({message:"This book was deleted successfully.",books})
    }
})