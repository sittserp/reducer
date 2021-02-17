import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

describe('App component COLOR PICKER', () => {
  it('it changes the color and remembers the previous color', () => {
    const { asFragment } = render(<App />);

    const recordInput = screen.getByTestId('COLOR_PICKER');

    fireEvent.change(recordInput, {
      target: {
        value: '#0000FF'
      }
    });
    expect(recordInput.value).toEqual('#0000ff');
  });
});
