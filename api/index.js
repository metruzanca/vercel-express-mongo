// const express = require("express");
import express from "express"
import cleanup from "./lib/cleanup"
import 'dotenv/config'

const app = express()

app.get('/api', (req, res) => res.json({
  message: 'Hello World',
  secret: process.env.SECRET,
}))

app.use(cleanup(() => {
  // Put your database disconnection function calls here.
}))

// Don't use app.listen. Instead export app.
// module.exports = app;
export default app
