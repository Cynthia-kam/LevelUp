import express from "express"
import booksRoute from "./booksRoute.js"
import ownersRoute from "./ownersRoute.js"
import borrowersRoute from "./borrowersRoute.js"

const router = express.Router()
router.use("/books",booksRoute)
router.use("/owners",ownersRoute)
router.use("/borrowers",borrowersRoute)
export default router