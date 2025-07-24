const express = require("express")
require('dotenv').config();
const sequelize = require("./db")
const cors = require("cors")
const models = require("./models/model")
const router = require("./routes/index")

const PORT = process.env.PORT || 5000

const app = express()
app.use(cors())
app.use(express.json())
app.use("/api", router)

const start = async () => {
    try {
        await sequelize.authenticate()
        await sequelize.sync()
        app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
    } catch (e) {
        console.log(e)
    }
}

start()