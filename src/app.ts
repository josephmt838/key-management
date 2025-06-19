import express, { Request, Response } from 'express';
import { requestLogger } from './middleware/requestLogger';
import { keysRouter } from './v1/routes/keys';

const app = express();

app.use(express.json());
app.use(requestLogger);

app.use('/api/v1/keys', keysRouter);

app.get('/', (req: Request, res: Response) => {
    const data = {
        uptime: process.uptime(),
        message: 'Ok',
        date: new Date(),
    };

    res.status(200).send(data);
});

export default app;
