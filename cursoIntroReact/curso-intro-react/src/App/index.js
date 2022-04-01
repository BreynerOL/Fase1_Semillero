import React from 'react';
import { TodoProvider } from '../TodoContext';
import { AppUI } from './AppUi';


function App() {
  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>
  );
}

export default App;