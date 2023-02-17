// const express = require("express");
import express from "express"

const app = express()

app.get('/api', (req, res) => res.json({
  message: 'Hello World',
}))


// Don't use app.listen. Instead export app.
// module.exports = app;
export default app
