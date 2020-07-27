import React from 'react';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import configureStore from 'redux-mock-store';
import '@testing-library/jest-dom';

import StatusFooter from '../StatusFooter';

const mockStore = configureStore([]);

describe('StatusFooter component', () => {
  it("should render with both moves left and game result spans and with 'You won!' text", () => {
    const store = mockStore({
      boardData: { playerPosition: { x: 1, y: 1 }, targetCell: { x: 1, y: 1 } },
      movesLeft: 10,
    });

    const {
      container: {
        firstChild: { firstChild: firstSpan },
      },
    } = render(
      <Provider store={store}>
        <StatusFooter />
      </Provider>,
    );
    expect(firstSpan).toHaveClass('movesLeft');
    expect(firstSpan.nextSibling).toHaveClass('gameResult');
    expect(firstSpan.nextSibling).toHaveTextContent('You won!');
  });

  it("should render with both moves left and game result spans and with 'You lost!' text", () => {
    const store = mockStore({
      boardData: { playerPosition: { x: 2, y: 1 }, targetCell: { x: 1, y: 1 } },
      movesLeft: 0,
    });

    const {
      container: {
        firstChild: { firstChild: firstSpan },
      },
    } = render(
      <Provider store={store}>
        <StatusFooter />
      </Provider>,
    );
    expect(firstSpan).toHaveClass('movesLeft');
    expect(firstSpan.nextSibling).toHaveClass('gameResult');
    expect(firstSpan.nextSibling).toHaveTextContent('You lost!');
  });

  it('should render with only moves left span', () => {
    const store = mockStore({
      boardData: { playerPosition: { x: 1, y: 1 }, targetCell: { x: 4, y: 4 } },
      movesLeft: 10,
    });

    const {
      container: {
        firstChild: { firstChild: firstSpan },
      },
    } = render(
      <Provider store={store}>
        <StatusFooter />
      </Provider>,
    );
    expect(firstSpan).toHaveClass('movesLeft');
    expect(firstSpan.nextSibling).toBeNull();
  });
});
