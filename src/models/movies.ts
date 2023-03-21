import express , {Request, Response} from 'express';
import controller from '../controllers/movies';
const router = express.Router();

.get('/movies', controller.getAll)
.get('/movies/:id', controller.getAll)
.post('/movies', controller.getAll)
.patch('/movies', controller.getAll)
.delete('/movies', controller.getAll)

export = router;