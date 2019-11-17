import express from 'express';
const app = express.Router();

app.get('/create', (req, res) => {
    return res.json({
        user: 'asdasd',
    });
})

export default app;
