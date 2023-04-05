import { useState } from 'react';
import Screen from './screen';
import calculate from '../logic/calculate';

const Calculator = () => {
  const [calcul, setCalcul] = useState({ total: 0, next: null, operation: null });
  const handleClick = (e) => {
    const data = e.target.textContent;
    const calc = calculate(calcul, data);
    setCalcul(calc);
  };
  return (
    <div className="single-pad">
      <Screen handleClick={handleClick} calcul={calcul} />
    </div>
  );
};
export default Calculator;
