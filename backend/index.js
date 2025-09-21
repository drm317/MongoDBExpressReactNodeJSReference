import app from "./server.js"
import { MongoClient } from "mongodb"
import dotenv from "dotenv"
import RestaurantsDAO from "./dao/restaurantsDAO.js"
import ReviewsDAO from "./dao/reviewsDAO.js"

dotenv.config()

const port = process.env.PORT || 5001

MongoClient.connect(
    process.env.MONGO_URI || "mongodb://admin:password@localhost:27017",
    {
        maxPoolSize: 50,
        wtimeoutMS: 2500,
        serverSelectionTimeoutMS: 5000,
        socketTimeoutMS: 45000,
    }
).catch(err => {
    console.error("Failed to connect to MongoDB:", err.stack)
    process.exit(1)
})
.then(async client => {
    try {
        console.log("Connected to MongoDB successfully")
        await RestaurantsDAO.injectDB(client)
        await ReviewsDAO.injectDB(client)
        app.listen(port, () => {
            console.log(`Server listening on port ${port}`)
        })
    } catch (error) {
        console.error("Error initializing database:", error)
        process.exit(1)
    }
})