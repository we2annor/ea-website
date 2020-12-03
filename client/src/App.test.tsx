import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

describe('When everything is ok', ()=>{
  test('Should rend the App without crushing', ()=>{
    const {getByText}= render(<App/>);

    expect(getByText("Hello from front end")).toBeTruthy();
    
    screen.debug()
  })
});


