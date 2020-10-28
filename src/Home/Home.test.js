import { render, screen } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import "@testing-library/jest-dom";
import Home from './Home';

// it should render the homepage

// no props needed

describe("Home", () => {
  it('should render the homepage', () => {
    const history = createMemoryHistory()
    render(<Router history={history}><Home /></Router>);

    expect(screen.getByText('by Leta Keane')).toBeInTheDocument();
  })
})