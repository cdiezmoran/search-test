import React from 'react';
import { childrenShape } from '../shapes';

const App = ({ children }) => (
  <div>
    {children}
  </div>
);

App.propTypes = {
  children: childrenShape.isRequired
};

export default App;
