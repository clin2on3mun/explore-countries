import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import Navbar from '../components/Navbar';

describe('to see if it renders nav bar correctly', () => {
  it('test Nav bar', () => {
    render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>,
    );
  });
});
