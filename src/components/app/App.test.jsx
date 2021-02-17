import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

describe('App component COLOR PICKER', () => {
  it('changes the color and remembers the previous color', () => {
    const { asFragment } = render(<App />);

    const recordInput = screen.getByTestId('COLOR_PICKER');

    fireEvent.change(recordInput, {
      target: {
        value: '#0000FF'
      }
    });
    
    expect(recordInput.value).toEqual('#0000ff');
  });

  it('reverts back to the previous color', () => {
    const { asFragment } = render(<App />);

    const undoInput = screen.getByTestId('COLOR_PICKER');

    fireEvent.change(undoInput, {
      target: {
        value: '#ff0000'
      }
    });

    expect(undoInput.value).toEqual('#ff0000');
  });

  it('goes forward to the next color in order', () => {
    const { asFragment } = render(<App />);

    const redoInput = screen.getByTestId('COLOR_PICKER');

    fireEvent.change(redoInput, {
      target: {
        value: '#00ff00'
      }
    });

    expect(redoInput.value).toEqual('#00ff00');
  });

});
