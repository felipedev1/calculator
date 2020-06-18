import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'
import App from './App';

describe('Component Calculator', () => {

  it('should clear the number input', () => {
    const {getByTestId, getByText} = render(<App />);
    fireEvent.click(getByText('2'));
    fireEvent.click(getByText('C'));
    expect(getByTestId('txtNumbers')).toHaveValue('0');
  })

  it('should show the value 6 in the input for 4 + 2', () => {
    const {getByTestId, getByText} = render(<App />);
    fireEvent.click(getByText('4'));
    fireEvent.click(getByText('+'));
    fireEvent.click(getByText('2'));
    fireEvent.click(getByText('='));
    expect(getByTestId('txtNumbers')).toHaveValue('6');
  })

  it('should show the value 2 in the input for 4 - 2', () => {
    const {getByTestId, getByText} = render(<App />);
    fireEvent.click(getByText('4'));
    fireEvent.click(getByText('-'));
    fireEvent.click(getByText('2'));
    fireEvent.click(getByText('='));
    expect(getByTestId('txtNumbers')).toHaveValue('2');
  })

  it('should show the value 8 in the input for 4 * 2', () => {
    const {getByTestId, getByText} = render(<App />);
    fireEvent.click(getByText('4'));
    fireEvent.click(getByText('*'));
    fireEvent.click(getByText('2'));
    fireEvent.click(getByText('='));
    expect(getByTestId('txtNumbers')).toHaveValue('8');
  })

  it('should show the value 2 in the input for 4 / 2', () => {
    const {getByTestId, getByText} = render(<App />);
    fireEvent.click(getByText('4'));
    fireEvent.click(getByText('/'));
    fireEvent.click(getByText('2'));
    fireEvent.click(getByText('='));
    expect(getByTestId('txtNumbers')).toHaveValue('2');
  })

  it('should show the value 7.2 in the input for 1.3 + 5.9', () => {
    const {getByTestId, getByText} = render(<App />);
    fireEvent.click(getByText('1'));
    fireEvent.click(getByText('.'));
    fireEvent.click(getByText('3'));
    fireEvent.click(getByText('+'));
    fireEvent.click(getByText('5'));
    fireEvent.click(getByText('.'));
    fireEvent.click(getByText('9'));
    fireEvent.click(getByText('='));
    expect(getByTestId('txtNumbers')).toHaveValue('7.2');
  })
})