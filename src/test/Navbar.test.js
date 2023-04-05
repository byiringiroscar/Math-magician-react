import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import HeaderMain from '../component/header';
import Screen from '../component/screen';

describe('Header component', () => {
  it('renders Math Magician header', () => {
    const { container } = render(
      <BrowserRouter>
        <HeaderMain />
      </BrowserRouter>,
    );
    expect(container.firstChild).toMatchSnapshot();
  });
  it('renders calculator screen', () => {
    const mockHandleClick = jest.fn();
    const mockCalcul = { total: '0', next: null, operation: null };
    const { container } = render(
      <BrowserRouter>
        <Screen handleClick={mockHandleClick} calcul={mockCalcul} />
      </BrowserRouter>,
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
