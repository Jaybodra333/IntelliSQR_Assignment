import { prisma } from '../lib/prisma.js';
import bcrypt from 'bcryptjs';

async function createTestUser() {
  try {
    const hashedPassword = await bcrypt.hash('jay1234', 10);
    const user = await prisma.user.create({
      data: {
        email: 'jay@example.com',
        password: hashedPassword
      }
    });
    console.log('Test user created:', user);
  } catch (error) {
    console.error('Error creating test user:', error);
  } finally {
    await prisma.$disconnect();
  }
}

createTestUser();