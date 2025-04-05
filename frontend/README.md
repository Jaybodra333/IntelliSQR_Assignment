# Frontend - IntelliSQR Login System

A modern React-based login system built with TypeScript and Vite.

## Tech Stack

- **React 19** - Latest version of React for building user interfaces
- **TypeScript** - For type-safe development
- **Vite** - Next generation frontend tooling
- **TailwindCSS** - Utility-first CSS framework
- **Libraries**:
  - `@tanstack/react-query` - For data fetching and state management
  - `react-hook-form` - Form handling and validation
  - `zod` - Schema validation
  - `axios` - HTTP client

## Project Structure

```
src/
├── components/       # React components
│   └── LoginForm.tsx
├── schemas/         # Zod schemas for validation
│   └── login.schema.ts
├── services/        # API services
│   └── auth.service.ts
├── App.tsx         # Root component
└── main.tsx        # Entry point
```

## Setup Instructions

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Environment Setup**
   - No environment variables needed for development
   - Backend URL is configured in `src/services/auth.service.ts`

## Running Locally

1. **Development Mode**
   ```bash
   npm run dev
   ```
   This will start the development server on http://localhost:5173

2. **Build for Production**
   ```bash
   npm run build
   ```

3. **Preview Production Build**
   ```bash
   npm run preview
   ```

## Additional Scripts

- `npm run lint` - Run ESLint for code quality checks

## Development Notes

- Uses strict TypeScript configuration
- ESLint configured with React-specific rules
- Tailwind CSS for styling
- React Query for API state management
- Built-in error handling and form validation
