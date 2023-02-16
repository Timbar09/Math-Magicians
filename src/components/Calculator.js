import '../calculator.css';
import { useState } from 'react';
import calculate from '../logic/calculate';

const Calculator = () => {
  const btnNames = [
    'AC',
    '+/-',
    '%',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '0',
    '.',
    '÷',
    '×',
    '-',
    '+',
    '=',
  ];
  const numbers = btnNames.slice(0, 14);
  const operators = btnNames.slice(14);

  const [state, setState] = useState({
    total: null,
    next: null,
    operator: null,
  });

  const handleClick = (btnName) => {
    setState(calculate(state, btnName));
  };

  const updateOutput = () => {
    const { total, next, operator } = state;

    if (operator) return `${total ?? '0'} ${operator} ${next ?? ''}`;

    if (next) return next;

    return total || 0;
  };

  return (
    <main className="calculator">
      <header className="calc-output">{updateOutput()}</header>

      <div className="calc-grid">
        <section className="calc-numbers">
          {numbers.map((number) => (
            <button
              onClick={() => handleClick(number)}
              key={number}
              className={`btn btn-${number}`}
              type="button"
            >
              {number}
            </button>
          ))}
        </section>

        <section className="calc-operators">
          {operators.map((operator) => (
            <button
              onClick={() => handleClick(operator)}
              key={operator}
              className={`btn btn-${operator}`}
              type="button"
            >
              {operator}
            </button>
          ))}
        </section>
      </div>
    </main>
  );
};

export default Calculator;
