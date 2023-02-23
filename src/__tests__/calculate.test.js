import React from 'react';
import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import Calculator from '../components/Calculator';
import CalcPage from '../routes/CalcPage';
import Navbar from '../components/Navbar';
import Home from '../routes/Home';
import Quote from '../routes/Quote';
import calculate from '../logic/calculate';

describe('Calculator', () => {
  const obj = { total: null, next: null, operation: null };

  it('matches DOM Snapshot', () => {
    const domTree = renderer.create(<Calculator />).toJSON();
    expect(domTree).toMatchSnapshot();
  });

  it('renders Calculator component', () => {
    render(<CalcPage />);
    const linkElement = screen.getByText(/do some math/i);
    expect(linkElement).toBeInTheDocument();
  });

  it('check one of the calculator button exists', () => {
    render(<Calculator />);
    const btn = screen.getByText('1');
    expect(btn).toBeInTheDocument();
  });

  it('Builds the snapchot of the Calculator component safely', () => {
    const rend = renderer.create(<Calculator />);
    expect(rend.toJSON()).toMatchSnapshot();
  });

  it('Render Calculator component', () => {
    render(<Calculator />);
  });

  it('Return null object if it is AC', () => {
    const result = calculate(obj, 'AC');
    expect(result).toEqual({ total: null, next: null, operation: null });
  });

  it('Builds the snapchot of the home component safely', () => {
    const rend = renderer.create(<Home />);
    expect(rend.toJSON()).toMatchSnapshot();
  });

  it('Builds the snapchot of the Navbar component safely', () => {
    const rend = renderer.create(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>,
    );
    expect(rend.toJSON()).toMatchSnapshot();
  });
});
