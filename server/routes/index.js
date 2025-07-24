const Router = require("express")
const router = new Router()

const commentRouter = require("./commentRouter")

router.use("/comment", commentRouter)

module.exports = router