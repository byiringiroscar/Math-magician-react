import PropTypes from 'prop-types';

const Screen = ({ calcul, handleClick }) => {
  const { total, next, operation } = calcul;
  return (
    <div className="calculator-content">
      <p className="calc-item item-one">{ next || operation || total || 0}</p>
      <button type="button" className="calc-item" onClick={handleClick}>AC</button>
      <button type="button" className="calc-item" onClick={handleClick}>+/-</button>
      <button type="button" className="calc-item" onClick={handleClick}>%</button>
      <button type="button" className="calc-item operator" onClick={handleClick}>/</button>
      <button type="button" className="calc-item" onClick={handleClick}>7</button>
      <button type="button" className="calc-item" onClick={handleClick}>8</button>
      <button type="button" className="calc-item" onClick={handleClick}>9</button>
      <button type="button" className="calc-item operator" onClick={handleClick}>*</button>
      <button type="button" className="calc-item" onClick={handleClick}>4</button>
      <button type="button" className="calc-item" onClick={handleClick}>5</button>
      <button type="button" className="calc-item" onClick={handleClick}>6</button>
      <button type="button" className="calc-item operator" onClick={handleClick}>-</button>
      <button type="button" className="calc-item" onClick={handleClick}>1</button>
      <button type="button" className="calc-item" onClick={handleClick}>2</button>
      <button type="button" className="calc-item" onClick={handleClick}>3</button>
      <button type="button" className="calc-item operator" onClick={handleClick}>+</button>
      <button type="button" className="calc-item item-zero" onClick={handleClick}>0</button>
      <button type="button" className="calc-item" onClick={handleClick}>.</button>
      <button type="button" className="calc-item operator" onClick={handleClick}>=</button>
    </div>
  );
};

Screen.propTypes = {
  handleClick: PropTypes.func.isRequired,
  calcul: PropTypes.shape({
    total: PropTypes.string.isRequired,
    next: PropTypes.string,
    operation: PropTypes.string,
  }).isRequired,
};

export default Screen;
