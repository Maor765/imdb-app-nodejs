import express from 'express';
import ImdbController from '../controllers/ImdbController';

const router = express.Router();

router.get('/imdb', ImdbController.getAllItems);
router.get('/imdb/:id', ImdbController.getImdb);
router.post('/imdb', ImdbController.createImdb);
router.delete('/imdb/:id', ImdbController.deleteImdb);
router.post('/imdbs', ImdbController.createMultipleImdbs);

export default router;