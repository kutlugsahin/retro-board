import express from 'express';
import user from './user';

const app = express.Router();

app.use('/user', user);

export default app;
