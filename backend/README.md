# Backend - IntelliSQR Login System

A Node.js TypeScript backend with Express and Prisma, providing authentication endpoints.

## Tech Stack

- **Node.js** - Runtime environment
- **TypeScript** - Type-safe development
- **Express** - Web framework
- **Prisma** - Database ORM
- **PostgreSQL** - Database
- **Libraries**:
  - `bcryptjs` - Password hashing
  - `jsonwebtoken` - JWT authentication
  - `zod` - Schema validation
  - `cors` - Cross-origin resource sharing

## Project Structure

```
src/
├── controllers/     # Business logic
│   └── auth.controller.ts
├── routes/         # API endpoints
│   └── auth.ts
├── middleware/     # Express middleware
│   └── error.middleware.ts
├── lib/           # Shared utilities
│   ├── prisma.ts
│   └── errors.ts
└── scripts/       # Utility scripts
    └── createUser.ts
```

## Setup Instructions

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Database Setup**
   - Install PostgreSQL if not already installed
   - Create a database named 'intellisqr'
   - Update DATABASE_URL in .env file

3. **Environment Setup**
   Create a `.env` file with the following:
   ```
   DATABASE_URL="postgresql://postgres:your_password@localhost:5432/intellisqr"
   JWT_SECRET="your-secret-key"
   ```

4. **Run Migrations**
   ```bash
   npx prisma migrate dev
   ```

5. **Create Test User (Optional)**
   ```bash
   npm run tsx src/scripts/createUser.ts
   ```
   This creates a test user:
   - Email: jay@example.com
   - Password: jay1234

## Running Locally

1. **Development Mode**
   ```bash
   npm run dev
   ```
   This will start the server on http://localhost:5000

2. **Build for Production**
   ```bash
   npm run build
   ```

3. **Start Production Server**
   ```bash
   npm start
   ```

## API Endpoints

### Authentication
- `POST /api/auth/login`
  - Body: `{ "email": string, "password": string }`
  - Returns: `{ "token": string, "user": { "id": string, "email": string } }`

## Project Features

- MVC Architecture (Controllers, Routes)
- Type-safe database operations with Prisma
- JWT-based authentication
- Custom error handling middleware
- Input validation with Zod
- Secure password hashing with bcrypt