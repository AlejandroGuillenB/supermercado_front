import React from "react";
import { render, screen } from '@testing-library/react';
import Login from "../pages/Login";
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { MemoryRouter } from "react-router-dom";

describe('Login', () => {
  test('renders correctly', () => {
    const initialState = { output: 10 };
    const mockStore = configureStore();
    let store;

    store = mockStore(initialState);
    render(
      <MemoryRouter>
        <Provider store={store}>
          <Login />
        </Provider>
      </MemoryRouter>
    );
    const elem = screen.getAllByText('Login');

    expect(elem[0]).toBeInTheDocument();
  });
});
