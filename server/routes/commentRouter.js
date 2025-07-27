const Router = require("express")
const router = new Router()
const CommentController = require("../controller/commentController")

router.post("/", CommentController.create)
router.get('/', CommentController.getAll)
router.delete('/:id', CommentController.deleteComment)

module.exports = router