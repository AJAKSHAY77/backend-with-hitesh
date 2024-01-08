import dotenv from "dotenv"
import connectingToDb from "./db/db.js"
dotenv.config({
    path:"./.env"
})


connectingToDb()