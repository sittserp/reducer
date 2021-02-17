import React, { useReducer } from 'react';
import { reducer, initialState } from '../../hooks/useReducer';

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <button onClick={() => dispatch({ type: 'undo' })}>undo</button>
      <button onClick={() => dispatch({ type: 'redo' })}>redo</button>
      <input
        data-testid="COLOR_PICKER"
        type="color"
        value={state.current}
        onChange={({ target }) => dispatch({
          type: 'current',
          payload: target.value
        })} />
      <div style={{
        backgroundColor: state.current,
        width: '10rem',
        height: '10rem'
      }}>
      </div>
    </>
  );
}
