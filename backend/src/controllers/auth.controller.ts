import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { prisma } from '../lib/prisma.js';
import { loginSchema } from '../../../frontend/src/schemas/login.schema.js';
import { AuthenticationError, ValidationError } from '../lib/errors.js';

export class AuthController {
  async login(email: string, password: string) {
    try {
      const validatedData = loginSchema.parse({ email, password });
    } catch (error) {
      throw new ValidationError('Invalid email or password format');
    }

    const user = await prisma.user.findUnique({
      where: { email }
    });

    if (!user || !await bcrypt.compare(password, user.password)) {
      throw new AuthenticationError();
    }

    const token = jwt.sign(
      { userId: user.id },
      process.env.JWT_SECRET || 'secret',
      { expiresIn: '1d' }
    );

    return {
      token,
      user: {
        id: user.id,
        email: user.email
      }
    };
  }
}