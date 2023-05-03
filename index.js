const express = require('express');
const router = require("./routes/users");
const app = express();


const users = require("./routes/users")
app.use(express.json());
app.use("/user", users);

const PORT = process.env.DB_PORT || 2023

app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`)
})