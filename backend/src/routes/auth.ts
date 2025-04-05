import { Router } from 'express';
import { AuthController } from '../controllers/auth.controller.js';

const router = Router();
const authController = new AuthController();

router.post('/login', async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const result = await authController.login(email, password);
    res.json(result);
  } catch (error) {
    next(error);
  }
});

export { router as authRouter };
