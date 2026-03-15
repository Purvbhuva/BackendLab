# Task B3: Snake Game

A fully functional Snake game built with NextJS client components and React hooks.

## Features

- **Game Mechanics**: Classic snake gameplay with collision detection
- **Score Tracking**: Current score and high score display
- **Keyboard Controls**: Arrow keys or WASD to move the snake
- **Smooth Animation**: Game loop with configurable speed
- **Responsive Design**: Beautiful UI with animations and gradient background
- **Wall Wrap**: Snake wraps around the board edges
- **Food Generation**: Random food placement ensuring it doesn't spawn on the snake

## Installation

```bash
npm install
```

## Running the Application

```bash
npm run dev
```

Open http://localhost:3000 in your browser.

## Game Controls

| Control | Action |
|---------|--------|
| **↑ / W** | Move Up |
| **↓ / S** | Move Down |
| **← / A** | Move Left |
| **→ / D** | Move Right |

## Game Rules

- **Objective**: Eat food to grow and score points
- **Food**: Red square = 10 points
- **Collision**: Game ends if snake hits itself (walls wrap around)
- **Speed**: Fixed game speed of 150ms per move

## Key Features

- State management with React hooks (useState, useEffect, useRef)
- Keyboard event handling with direction validation
- Game loop using setInterval
- Collision detection (food and self)
- Score persistence during session

## File Structure

```
src/
├── app/
│   ├── layout.tsx      # Root layout
│   └── page.tsx        # Home page
├── components/
│   └── SnakeGame.tsx   # Snake game component
```

## Technical Details

- **Grid Size**: 20x20
- **Game Speed**: 150ms per tick
- **Self-Collision**: Checked every game loop
- **Food Collision**: Generates new food on snake consumption
- **Direction Validation**: Prevents invalid moves (e.g., UP when moving DOWN)
