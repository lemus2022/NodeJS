import express , { Request, Response, NextFunction } from 'express';
import bodyParser from 'body-parser';
import config from './config/config';
import logger from "./config/logger";
import userRoutes from './routes/users';

const app = express();

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.use( (req: Request, res: Response, next: NextFunction) => {
    logger.info(`METHOD: [${req.method}] - IP[${req.socket.remoteAddress}]`);

    res.on("finish", () => {
        logger.info(`METHOD: [${req.method}] - STATUS[${res.statusCode}] - IP[${req.socket.remoteAddress}]`);
    });

    next();
});

//TODO ADD valid routes here
app.use('/api', userRoutes);

app.use ((_: Request, res: Response) =>{
    const error = new Error('NotFound');
    logger.error(error.message);
    res.status(404).json({message: error.message});
});

app.listen( parseInt(config.server.port), () => {
    logger.info(`API is running in ${config.server.hostname} on port: ${config.server.port}`)
});