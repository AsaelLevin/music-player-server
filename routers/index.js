const express = require("express")
const router = express.Router()
const usersRouter = require("./userRouter")


router.use("/users", usersRouter);


module.exports = router