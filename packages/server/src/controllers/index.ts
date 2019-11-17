import express from 'express';
import retro from './retro';

const app = express.Router();

app.use('/retro', retro);

export default app;
