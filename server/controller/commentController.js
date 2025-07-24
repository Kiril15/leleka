const { Comment } = require("../models/model")

class CommentController {
    async create(req, res) {
        try {
            const { grade, name, text } = req.body;

            if (!grade || !name || !text) {
                return res.status(400).json({ message: "Всі поля обов'язкові" });
            }

            const comment = await Comment.create({ grade, name, text });

            return res.json(comment);
        } catch (error) {
            return res.status(500).json({ message: "Internal server error", error: error.message });
        }
    }

    async getAll(req, res) {
        const comments = await Comment.findAll();
        res.json(comments);
    }
}

module.exports = new CommentController();