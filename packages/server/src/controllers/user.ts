import express from 'express';
const app = express.Router();

app.get('/', (req, res) => {
    return res.json({
        user: 'asdasd',
    });
})

export default app;
