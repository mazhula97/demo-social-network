import React from 'react';
import { render } from '@testing-library/react';
import MainApp from './App';
import ReactDOM from "react-dom"


test('renders learn react link', () => {
  const div = document.createElement("div");
  ReactDOM.render(<MainApp />, div);
  ReactDOM.unmountComponentAtNode(div);
});
