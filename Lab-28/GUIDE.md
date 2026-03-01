# Lab 28 - Quick Start Guide

## Installation & Running

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Start Development Server**
   ```bash
   npm run dev
   ```

3. **Open Browser**
   Navigate to: http://localhost:3000

## Project Structure

```
Lab-28/
├── app/
│   ├── layout.tsx          # Root layout with header
│   ├── page.tsx            # Home page with demo links
│   ├── demo-a/
│   │   └── page.tsx        # Demo A: Inline server action
│   ├── demo-b/
│   │   ├── page.tsx        # Demo B: Component using external action
│   │   └── actions.ts      # External server actions file
│   └── demo-c/
│       ├── page.tsx        # Demo C: Client component with validation
│       └── actions.ts      # Server action with validation logic
├── package.json
├── tsconfig.json           # TypeScript configuration
├── next.config.js
└── README.md
```

## Technology Stack

- **Next.js 14**: App Router with Server Actions
- **TypeScript 5**: Full type safety across the application
- **React 18**: Server and Client Components
- **Server Actions**: Secure server-side form handling

## Demos Explained

### Demo A: Inline Server Action
- Server action defined directly in the component file
- Uses `'use server'` directive inside the function
- Prints form data to server console
- Simple contact form example
- Type-safe FormData handling

### Demo B: External Server Action  
- Server action defined in separate `actions.ts` file
- File has `'use server'` at the top
- Action is imported and used in component
- Demonstrates code reusability and separation of concerns
- User registration form example
- Properly typed return values and parameters

### Demo C: Server Action with Validation
- Client component (`'use client'`)
- Server action performs comprehensive validation
- Returns typed error objects for invalid fields
- Shows validation messages to user
- Demonstrates error handling and user feedback
- Registration form with strict validation rules
- Full TypeScript interfaces for type safety

## Testing the Demos

1. **Demo A**: Fill out the contact form and submit. Check your terminal/console to see the printed form data.

2. **Demo B**: Fill out the user registration form. The external server action will process and log the data to the console.

3. **Demo C**: Try submitting with invalid data first (e.g., username with 2 chars, age under 18). You'll see validation errors. Then fill correctly to see success message.

## TypeScript Benefits

- **Type Safety**: All form data and return values are properly typed
- **IntelliSense**: Full autocomplete support in your IDE
- **Error Prevention**: Catch type errors at compile time
- **Better Documentation**: Interfaces serve as inline documentation
- **Refactoring**: Safe refactoring with type checking

## Important Notes

- All form data processing happens on the server
- Check your terminal/console for server-side logs
- Server Actions require Next.js 14+ with App Router
- Form submissions work without JavaScript (progressive enhancement)
- Data validation in Demo C happens server-side for security
- TypeScript provides compile-time type checking

## What to Look For

1. **Server Console**: All demos print information to the server console
2. **Network Tab**: See POST requests to server actions
3. **No Page Reload**: Forms submit without full page refresh
4. **Validation**: Demo C shows real-time validation feedback
5. **Progressive Enhancement**: Forms work even with JS disabled
6. **Type Safety**: Hover over variables in your IDE to see their types
