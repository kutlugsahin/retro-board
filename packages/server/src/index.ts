import express from 'express';

const app = express();

app.get("/", (req, res) => {
    res.json({
        asda: 'asdasd222',
    });
})

app.listen('3000');