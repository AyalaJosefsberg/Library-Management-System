const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());

const bookRouter = require("./routes/book.route");
const userRouter = require("./routes/user.route");

app.use("/api/books", bookRouter);
app.use("/api/users", userRouter);

app.listen(port, () => console.log(`Server is running on port ${port}`));