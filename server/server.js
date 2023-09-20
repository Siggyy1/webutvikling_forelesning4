import express from "express";

const app = express();

app.get("/api/tasks", (req, res) => {
    res.json([
        {
            title: "prepare lecture",
        },
        {
            title: "give lecture"
        }
    ])
})

app.use(express.static("../client/dist"));

app.listen(3000)