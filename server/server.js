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


app.listen(3000)