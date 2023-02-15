import '../calculator.css';

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

  return (
    <main className="calculator">
      <header className="calc-output">0</header>

      <div className="calc-grid">
        <section className="calc-numbers">
          {numbers.map((number) => (
            <button key={number} className={`btn btn-${number}`} type="button">
              {number}
            </button>
          ))}
        </section>

        <section className="calc-operators">
          {operators.map((operator) => (
            <button key={operator} className={`btn btn-${operator}`} type="button">
              {operator}
            </button>
          ))}
        </section>
      </div>
    </main>
  );
};

export default Calculator;
