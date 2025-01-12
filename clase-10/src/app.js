import express from "express"
import viewsRouter from "./routes/view.router.js"
import multer from "multer"
import {engine} from "express-handlebars"

const app = express()
const PUERTO = 8080

app.use(express.json())
app.use(express.urlencoded({ extended: true}))
app.use(express.static("./src/public"))

