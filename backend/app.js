const express = require("express");
const cors = require("cors");

const PORT = 5001;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());


app.get("/", cors(), async (req, res) => {
    res.send("The server is working.");
})

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT} :)`);
});

