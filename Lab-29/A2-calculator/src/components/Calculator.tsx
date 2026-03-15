'use client';

import { useState } from 'react';

export default function Calculator() {
  const [display, setDisplay] = useState('0');
  const [previousValue, setPreviousValue] = useState<number | null>(null);
  const [operation, setOperation] = useState<string | null>(null);
  const [waitingForNewValue, setWaitingForNewValue] = useState(false);

  const handleNumberClick = (num: string) => {
    if (waitingForNewValue) {
      setDisplay(num);
      setWaitingForNewValue(false);
    } else {
      setDisplay(display === '0' ? num : display + num);
    }
  };

  const handleDecimal = () => {
    if (waitingForNewValue) {
      setDisplay('0.');
      setWaitingForNewValue(false);
    } else if (!display.includes('.')) {
      setDisplay(display + '.');
    }
  };

  const handleOperation = (op: string) => {
    const currentValue = parseFloat(display);

    if (previousValue === null) {
      setPreviousValue(currentValue);
    } else if (operation) {
      const result = calculate(previousValue, currentValue, operation);
      setDisplay(result.toString());
      setPreviousValue(result);
    }

    setOperation(op);
    setWaitingForNewValue(true);
  };

  const calculate = (prev: number, current: number, op: string): number => {
    switch (op) {
      case '+':
        return prev + current;
      case '-':
        return prev - current;
      case '*':
        return prev * current;
      case '/':
        return current !== 0 ? prev / current : 0;
      case '%':
        return prev % current;
      default:
        return current;
    }
  };

  const handleEquals = () => {
    if (operation && previousValue !== null) {
      const currentValue = parseFloat(display);
      const result = calculate(previousValue, currentValue, operation);
      setDisplay(result.toString());
      setPreviousValue(null);
      setOperation(null);
      setWaitingForNewValue(true);
    }
  };

  const handleClear = () => {
    setDisplay('0');
    setPreviousValue(null);
    setOperation(null);
    setWaitingForNewValue(false);
  };

  const handleBackspace = () => {
    if (display.length > 1) {
      setDisplay(display.slice(0, -1));
    } else {
      setDisplay('0');
    }
  };

  const handleNegate = () => {
    const value = parseFloat(display);
    setDisplay((value * -1).toString());
  };

  const Button = ({ onClick, children, className = '' }: any) => (
    <button onClick={onClick} className={`btn ${className}`}>
      {children}
    </button>
  );

  return (
    <div className="container">
      <div className="calculator">
        <h1>🧮 Interactive Calculator</h1>
        
        <div className="display-container">
          <input
            type="text"
            value={display}
            readOnly
            className="display"
          />
        </div>

        <div className="buttons-grid">
          <Button onClick={handleClear} className="btn-function">
            AC
          </Button>
          <Button onClick={handleBackspace} className="btn-function">
            ⌫
          </Button>
          <Button onClick={handleNegate} className="btn-function">
            ±
          </Button>
          <Button onClick={() => handleOperation('/')} className="btn-operator">
            ÷
          </Button>

          <Button onClick={() => handleNumberClick('7')}>7</Button>
          <Button onClick={() => handleNumberClick('8')}>8</Button>
          <Button onClick={() => handleNumberClick('9')}>9</Button>
          <Button onClick={() => handleOperation('*')} className="btn-operator">
            ×
          </Button>

          <Button onClick={() => handleNumberClick('4')}>4</Button>
          <Button onClick={() => handleNumberClick('5')}>5</Button>
          <Button onClick={() => handleNumberClick('6')}>6</Button>
          <Button onClick={() => handleOperation('-')} className="btn-operator">
            −
          </Button>

          <Button onClick={() => handleNumberClick('1')}>1</Button>
          <Button onClick={() => handleNumberClick('2')}>2</Button>
          <Button onClick={() => handleNumberClick('3')}>3</Button>
          <Button onClick={() => handleOperation('+')} className="btn-operator">
            +
          </Button>

          <Button onClick={() => handleNumberClick('0')} className="btn-zero">
            0
          </Button>
          <Button onClick={handleDecimal}>.</Button>
          <Button onClick={() => handleOperation('%')} className="btn-operator">
            %
          </Button>
          <Button onClick={handleEquals} className="btn-equals">
            =
          </Button>
        </div>

        <div className="info">
          <p>Current Operation: {operation || 'None'}</p>
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

        .calculator {
          background: white;
          border-radius: 15px;
          padding: 30px;
          box-shadow: 0 15px 50px rgba(0, 0, 0, 0.3);
          width: 100%;
          max-width: 320px;
        }

        h1 {
          text-align: center;
          color: #333;
          font-size: 24px;
          margin-bottom: 20px;
        }

        .display-container {
          margin-bottom: 20px;
          background: #f5f5f5;
          padding: 10px;
          border-radius: 8px;
        }

        .display {
          width: 100%;
          padding: 15px;
          font-size: 32px;
          text-align: right;
          border: 2px solid #ddd;
          border-radius: 5px;
          background: white;
          color: #333;
          font-weight: bold;
          font-family: 'Courier New', monospace;
        }

        .buttons-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 10px;
          margin-bottom: 20px;
        }

        .btn {
          padding: 15px;
          border: none;
          border-radius: 8px;
          font-size: 18px;
          font-weight: bold;
          cursor: pointer;
          background: #f0f0f0;
          color: #333;
          transition: all 0.2s;
          border: 2px solid transparent;
        }

        .btn:hover {
          background: #e0e0e0;
          transform: translateY(-2px);
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
        }

        .btn:active {
          transform: translateY(0);
          box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
        }

        .btn-operator {
          background: #667eea;
          color: white;
        }

        .btn-operator:hover {
          background: #5568d3;
        }

        .btn-function {
          background: #ed8936;
          color: white;
        }

        .btn-function:hover {
          background: #dd6b20;
        }

        .btn-equals {
          background: #48bb78;
          color: white;
          grid-column: 4;
          grid-row: 5;
        }

        .btn-equals:hover {
          background: #38a169;
        }

        .btn-zero {
          grid-column: 1 / 3;
        }

        .info {
          text-align: center;
          padding: 15px;
          background: #f0f4ff;
          border-radius: 8px;
          border-left: 4px solid #667eea;
        }

        .info p {
          margin: 5px 0;
          color: #555;
          font-size: 14px;
        }
      `}</style>
    </div>
  );
}
