const express = require("express");
const router = express.Router();
const { registration,login,getAllUsers } = require("../controllers/user.controller");

router.get("/", getAllUsers);
router.get("/:id", login);
router.post("/", registration);

module.exports = router;
