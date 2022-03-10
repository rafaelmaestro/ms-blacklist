import { Router, Request, Response } from 'express';
import express from 'express';

const app = express();
const port = 4000;
const route = Router();

app.use(express.json());

route.get('/', (req: Request, res: Response) => {
    console.log("Testing 1, 2, 3...");
    res.json({message: "Hello world!"})
});

app.use(route);

app.listen(port, () => {
    console.log(`The server is running on port ${port}`)
});



