import 'dotenv/config' // This loads environment variables, keep this
import express from "express"
import cleanup from "./middleware/cleanup.js"

const app = express()

app.get('/api', (req, res) => res.json({
  message: 'Hello World',
  secret: process.env.SECRET,
}))

app.use(cleanup(() => {
  // Put your database disconnection function calls here.
}))

// Don't use app.listen. Instead export app.
export default app
