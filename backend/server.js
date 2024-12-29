import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
const port = process.env.PORT || 5000;
import userRouter from './routers/userRouter.js';
import { notFound, errorHandler } from './middleware/errorMiddleware.js';
const app = express();

app.use('/api/users', userRouter);
app.get('/', (req, res) => {
    res.send('server is quickly running');   
});
app.use(notFound);
app.use(errorHandler); 

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});

