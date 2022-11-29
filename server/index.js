const express = require("express")
const mongoose = require("mongoose")
require('dotenv').config()

const port = 5000

mongoose
	.connect(process.env.ATLAS_URI, { useNewUrlParser: true })
	.then(() => {
		const app = express()

		app.listen(5000, () => {
			console.log("Server has started!")
		})
	})