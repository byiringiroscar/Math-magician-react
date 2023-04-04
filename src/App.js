import './App.css';
import { Routes, Route } from 'react-router-dom';
import Calculator from './component/calculator';
import WorldQuotes from './component/quote';
import HeaderMain from './component/header';
import HomePage from './component/HomePages';

function App() {
  return (
    <div className="container">
      <HeaderMain />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/quote" element={<WorldQuotes />} />
      </Routes>
    </div>
  );
}

export default App;
