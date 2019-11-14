import express from 'express';
import controllers from './controllers';

const app = express();

app.use('/', express.static('public'));
app.use('/api', controllers);

app.listen('8080', (err) => {
    if (err) {
        return console.error(err);
    }

    console.info('Server is listening at http://localhost:8080');
});
