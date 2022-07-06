require("dotenv").config();
const express = require("express");
const path = require("path");
const cors = require("cors");

const router = require("./routes");
const db = require("./config/db.js");

const port = process.env.PORT;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Connect database
app.use(db);

// Config cors
app.use(cors({ credentials: true, origin: "http://localhost:3000" }));

// Upload directory
app.use("/uploads", express.static(path.join(__dirname, "/uploads")));

// Routes
app.use(router);

app.listen(port, () => {
  console.log(`App rodando na porta ${port}`);
});
