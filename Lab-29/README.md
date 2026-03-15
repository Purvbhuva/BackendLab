# Lab 29: Client Components and Delete Operations

This folder contains solutions for Lab 29 with four different tasks demonstrating NextJS client components and Prisma ORM operations.

## Tasks Overview

### ✅ Task A1: Client Component
**Location**: `A1-client-component/`

A demonstration of NextJS client components using the `'use client'` directive. Features interactive components with React hooks for state management.

**Key Features**:
- Counter with increment/decrement/reset
- Message handler with input management
- React hooks (useState) implementation
- CSS-in-JS styling

**Run**: `cd A1-client-component && npm install && npm run dev`

---

### ✅ Task A2: Basic Calculator
**Location**: `A2-calculator/`

A fully functional calculator using NextJS client components. Supports all basic arithmetic operations and advanced features.

**Key Features**:
- Basic operations: +, −, ×, ÷, %
- Advanced functions: AC, backspace, negate
- Decimal support
- Chain calculations
- Beautiful UI with gradient background

**Supported Operations**:
- Addition (+)
- Subtraction (−)
- Multiplication (×)
- Division (÷)
- Modulo (%)

**Run**: `cd A2-calculator && npm install && npm run dev`

---

### ✅ Task B3: Snake Game
**Location**: `B3-snake-game/`

A complete Snake game implementation using NextJS client components with complex state management and game logic.

**Key Features**:
- 20x20 grid-based gameplay
- Keyboard controls (Arrow Keys or WASD)
- Score tracking with high score
- Food generation system
- Self-collision detection
- Wall wraparound
- Smooth animations
- Game pause/resume functionality

**Game Rules**:
- Eat red squares to grow and gain points
- Each food = 10 points
- Game ends on self-collision
- Walls wrap around (opposite side)

**Run**: `cd B3-snake-game && npm install && npm run dev`

---

### ✅ Task A4: Prisma Delete Operations
**Location**: `A4-prisma-delete/`

A complete library management system demonstrating Prisma ORM with full CRUD operations, emphasizing delete functionality.

**Key Features**:
- Add new books to library
- View all books in collection
- Delete books with confirmation
- Real-time data updates
- Prisma ORM integration
- Server Actions for secure operations
- SQLite database
- Type-safe operations

**Database Operations**:
- Create: Add new books
- Read: Fetch and display books
- Update: Modify book details
- Delete: Remove books from database

**Prerequisites**: 
```bash
npm install
npm run prisma:migrate
```

**Run**: `cd A4-prisma-delete && npm install && npm run prisma:migrate && npm run dev`

---

## Quick Start Guide

### Setup All Projects

```bash
# For each project directory, run:
npm install
npm run dev
```

### Individual Project Setup

**A1 - Client Component**:
```bash
cd A1-client-component
npm install
npm run dev
# Open http://localhost:3000
```

**A2 - Calculator**:
```bash
cd A2-calculator
npm install
npm run dev
# Open http://localhost:3000
```

**B3 - Snake Game**:
```bash
cd B3-snake-game
npm install
npm run dev
# Open http://localhost:3000
```

**A4 - Prisma Delete**:
```bash
cd A4-prisma-delete
npm install
npm run prisma:migrate
npm run dev
# Open http://localhost:3000
```

---

## Technology Stack

All projects use:
- **NextJS 14**: React framework with App Router
- **React 18**: UI library
- **TypeScript**: Type safety
- **CSS-in-JS**: Component styling (styled-jsx)
- **Prisma ORM** (A4 only): Database operations

### Additional Dependencies

- **A4 Only**: 
  - `@prisma/client`: Prisma ORM client
  - `prisma`: Prisma CLI
  - `sqlite`: Database provider

---

## Architecture Highlights

### Client Components
All applications use the `'use client'` directive to:
- Enable React hooks (useState, useEffect)
- Handle user interactions
- Manage component state
- Respond to keyboard/mouse events

### Game Development (B3)
- State management with hooks
- Game loop using setInterval
- Collision detection algorithms
- Keyboard event handling
- Animation with CSS transitions

### Database Operations (A4)
- Prisma schema definition
- Server Actions for mutations
- Type-safe database queries
- Error handling and validation
- Real-time UI updates

---

## Common Issues & Solutions

### Port Already in Use
```bash
# Kill process on port 3000
lsof -ti:3000 | xargs kill -9  # macOS/Linux
netstat -ano | findstr :3000   # Windows
```

### Prisma Migration Failed
```bash
cd A4-prisma-delete
rm prisma/dev.db
npm run prisma:migrate
```

### Modules Not Found
```bash
# Delete node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

---

## Learning Outcomes

After completing these labs, you should understand:

✅ NextJS client components and the `'use client'` directive  
✅ React hooks (useState, useEffect, useCallback, useRef)  
✅ Event handling in React (keyboard, mouse, form)  
✅ Game development concepts (collision, animation, game loop)  
✅ Prisma ORM setup and configuration  
✅ Server Actions in NextJS  
✅ CRUD operations with databases  
✅ Delete operations with Prisma  
✅ State management in complex applications  
✅ Error handling and user feedback  

---

## Resources

- [NextJS Documentation](https://nextjs.org/docs)
- [React Hooks Documentation](https://react.dev/reference/react)
- [Prisma Documentation](https://www.prisma.io/docs/)
- [NextJS App Router](https://nextjs.org/docs/app)
- [Server Actions](https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions-and-mutations)

---

Created: March 2026  
Last Updated: March 2026
