import { Router } from 'express';
import { predict } from './controllers/predictController';

const router = Router();

router.post('/predict', predict);

export default router;
