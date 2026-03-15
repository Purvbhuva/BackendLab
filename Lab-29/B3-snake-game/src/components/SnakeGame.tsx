'use client';

import { useState, useEffect, useCallback, useRef } from 'react';

interface Position {
  x: number;
  y: number;
}

type Direction = 'UP' | 'DOWN' | 'LEFT' | 'RIGHT';

const GRID_WIDTH = 20;
const GRID_HEIGHT = 20;
const INITIAL_SPEED = 150;

export default function SnakeGame() {
  const [snake, setSnake] = useState<Position[]>([{ x: 10, y: 10 }]);
  const [food, setFood] = useState<Position>({ x: 15, y: 15 });
  const [direction, setDirection] = useState<Direction>('RIGHT');
  const [nextDirection, setNextDirection] = useState<Direction>('RIGHT');
  const [gameActive, setGameActive] = useState(false);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const gameLoopRef = useRef<NodeJS.Timeout | null>(null);

  const generateFood = useCallback((snakeBody: Position[]): Position => {
    let newFood: Position;
    let isOnSnake = true;

    while (isOnSnake) {
      newFood = {
        x: Math.floor(Math.random() * GRID_WIDTH),
        y: Math.floor(Math.random() * GRID_HEIGHT),
      };
      isOnSnake = snakeBody.some((segment) => segment.x === newFood.x && segment.y === newFood.y);
    }

    return newFood;
  }, []);

  const handleGameOver = useCallback(() => {
    setGameActive(false);
    if (score > highScore) {
      setHighScore(score);
    }
  }, [score, highScore]);

  const updateGame = useCallback(() => {
    setSnake((prevSnake) => {
      const head = prevSnake[0];
      let newHead: Position;

      switch (nextDirection) {
        case 'UP':
          newHead = { x: head.x, y: (head.y - 1 + GRID_HEIGHT) % GRID_HEIGHT };
          break;
        case 'DOWN':
          newHead = { x: head.x, y: (head.y + 1) % GRID_HEIGHT };
          break;
        case 'LEFT':
          newHead = { x: (head.x - 1 + GRID_WIDTH) % GRID_WIDTH, y: head.y };
          break;
        case 'RIGHT':
          newHead = { x: (head.x + 1) % GRID_WIDTH, y: head.y };
          break;
      }

      setDirection(nextDirection);

      // Check self collision
      if (prevSnake.some((segment) => segment.x === newHead.x && segment.y === newHead.y)) {
        handleGameOver();
        return prevSnake;
      }

      const newSnake = [newHead, ...prevSnake];

      // Check food collision
      if (newHead.x === food.x && newHead.y === food.y) {
        setScore((prev) => prev + 10);
        setFood(generateFood(newSnake));
        return newSnake;
      }

      return newSnake.slice(0, -1);
    });
  }, [nextDirection, food, generateFood, handleGameOver]);

  useEffect(() => {
    if (!gameActive) return;

    gameLoopRef.current = setInterval(updateGame, INITIAL_SPEED);

    return () => {
      if (gameLoopRef.current) {
        clearInterval(gameLoopRef.current);
      }
    };
  }, [gameActive, updateGame]);

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      switch (e.key.toUpperCase()) {
        case 'ARROWUP':
        case 'W':
          if (direction !== 'DOWN') {
            setNextDirection('UP');
            e.preventDefault();
          }
          break;
        case 'ARROWDOWN':
        case 'S':
          if (direction !== 'UP') {
            setNextDirection('DOWN');
            e.preventDefault();
          }
          break;
        case 'ARROWLEFT':
        case 'A':
          if (direction !== 'RIGHT') {
            setNextDirection('LEFT');
            e.preventDefault();
          }
          break;
        case 'ARROWRIGHT':
        case 'D':
          if (direction !== 'LEFT') {
            setNextDirection('RIGHT');
            e.preventDefault();
          }
          break;
        default:
          break;
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [direction]);

  const startGame = () => {
    setSnake([{ x: 10, y: 10 }]);
    setFood(generateFood([{ x: 10, y: 10 }]));
    setDirection('RIGHT');
    setNextDirection('RIGHT');
    setScore(0);
    setGameActive(true);
  };

  const resetGame = () => {
    setSnake([{ x: 10, y: 10 }]);
    setFood(generateFood([{ x: 10, y: 10 }]));
    setDirection('RIGHT');
    setNextDirection('RIGHT');
    setScore(0);
    setGameActive(false);
  };

  return (
    <div className="container">
      <div className="game-wrapper">
        <h1>🐍 Snake Game</h1>

        <div className="stats">
          <div className="stat">
            <span className="label">Score:</span>
            <span className="value">{score}</span>
          </div>
          <div className="stat">
            <span className="label">High Score:</span>
            <span className="value">{highScore}</span>
          </div>
          <div className="stat">
            <span className="label">Status:</span>
            <span className={`value ${gameActive ? 'active' : 'inactive'}`}>
              {gameActive ? 'Playing' : 'Paused'}
            </span>
          </div>
        </div>

        <div className="game-board">
          {Array(GRID_HEIGHT)
            .fill(null)
            .map((_, y) =>
              Array(GRID_WIDTH)
                .fill(null)
                .map((_, x) => (
                  <div
                    key={`${x}-${y}`}
                    className={`cell ${
                      snake.some((segment) => segment.x === x && segment.y === y)
                        ? 'snake'
                        : food.x === x && food.y === y
                        ? 'food'
                        : ''
                    }`}
                  />
                ))
            )}
        </div>

        <div className="controls">
          {!gameActive && score === 0 && (
            <button onClick={startGame} className="btn btn-start">
              Start Game
            </button>
          )}
          {gameActive && (
            <button onClick={() => setGameActive(false)} className="btn btn-pause">
              Pause
            </button>
          )}
          {!gameActive && score > 0 && (
            <>
              <button onClick={() => setGameActive(true)} className="btn btn-resume">
                Resume
              </button>
              <button onClick={resetGame} className="btn btn-reset">
                New Game
              </button>
            </>
          )}
        </div>

        <div className="instructions">
          <h3>How to Play:</h3>
          <ul>
            <li>Use <strong>Arrow Keys</strong> or <strong>WASD</strong> to move the snake</li>
            <li>Eat the 🍎 (red square) to grow and gain points</li>
            <li>Avoid hitting the walls or yourself</li>
            <li>Each food eaten = 10 points</li>
          </ul>
        </div>
      </div>

      <style jsx>{`
        .container {
          min-height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          padding: 20px;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }

        .game-wrapper {
          background: white;
          border-radius: 15px;
          padding: 30px;
          box-shadow: 0 15px 50px rgba(0, 0, 0, 0.3);
          max-width: 600px;
          width: 100%;
        }

        h1 {
          text-align: center;
          color: #333;
          margin-bottom: 20px;
          font-size: 32px;
        }

        .stats {
          display: flex;
          justify-content: space-around;
          margin-bottom: 20px;
          gap: 20px;
          flex-wrap: wrap;
        }

        .stat {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 10px 20px;
          background: #f5f5f5;
          border-radius: 8px;
          flex: 1;
          min-width: 120px;
        }

        .label {
          font-size: 12px;
          color: #999;
          text-transform: uppercase;
          font-weight: bold;
        }

        .value {
          font-size: 24px;
          color: #667eea;
          font-weight: bold;
        }

        .value.active {
          color: #48bb78;
        }

        .value.inactive {
          color: #ed8936;
        }

        .game-board {
          display: grid;
          grid-template-columns: repeat(${GRID_WIDTH}, 1fr);
          gap: 1px;
          background: #333;
          padding: 2px;
          border-radius: 8px;
          margin-bottom: 20px;
          aspect-ratio: 1;
          max-width: 500px;
          margin-left: auto;
          margin-right: auto;
        }

        .cell {
          aspect-ratio: 1;
          background: #222;
          border-radius: 2px;
          transition: background 0.1s;
        }

        .cell.snake {
          background: linear-gradient(135deg, #48bb78 0%, #38a169 100%);
          box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.3);
        }

        .cell.food {
          background: #f56565;
          box-shadow: 0 0 8px rgba(245, 101, 101, 0.6);
          animation: pulse 0.6s infinite;
        }

        @keyframes pulse {
          0%,
          100% {
            box-shadow: 0 0 8px rgba(245, 101, 101, 0.6);
          }
          50% {
            box-shadow: 0 0 15px rgba(245, 101, 101, 0.9);
          }
        }

        .controls {
          display: flex;
          gap: 10px;
          justify-content: center;
          margin-bottom: 20px;
          flex-wrap: wrap;
        }

        .btn {
          padding: 12px 24px;
          border: none;
          border-radius: 8px;
          font-size: 16px;
          font-weight: bold;
          cursor: pointer;
          transition: all 0.3s;
          text-transform: uppercase;
        }

        .btn-start {
          background: #48bb78;
          color: white;
        }

        .btn-start:hover {
          background: #38a169;
          transform: translateY(-2px);
          box-shadow: 0 5px 15px rgba(72, 187, 120, 0.4);
        }

        .btn-pause {
          background: #ed8936;
          color: white;
        }

        .btn-pause:hover {
          background: #dd6b20;
          transform: translateY(-2px);
          box-shadow: 0 5px 15px rgba(237, 137, 54, 0.4);
        }

        .btn-resume {
          background: #667eea;
          color: white;
        }

        .btn-resume:hover {
          background: #5568d3;
          transform: translateY(-2px);
          box-shadow: 0 5px 15px rgba(102, 126, 234, 0.4);
        }

        .btn-reset {
          background: #f56565;
          color: white;
        }

        .btn-reset:hover {
          background: #e53e3e;
          transform: translateY(-2px);
          box-shadow: 0 5px 15px rgba(245, 101, 101, 0.4);
        }

        .instructions {
          background: #f0f4ff;
          border-left: 4px solid #667eea;
          padding: 20px;
          border-radius: 8px;
        }

        .instructions h3 {
          margin-top: 0;
          color: #333;
        }

        .instructions ul {
          margin: 10px 0;
          padding-left: 20px;
        }

        .instructions li {
          margin: 8px 0;
          color: #555;
          line-height: 1.6;
        }

        .instructions strong {
          color: #667eea;
        }
      `}</style>
    </div>
  );
}
