import React from 'react';
import { render } from 'react-dom';
import App from './App';

render(<App url='http://www.filltext.com/?rows=32&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}'/>, document.getElementById('root'))