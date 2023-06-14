import React from 'react';
import './App.scss';
import { Provider } from 'react-redux';
import { store } from './store/store';
import Wrapper from './components/Wrapper';

function App() {

  return (
    <Provider store={store}>
      <Wrapper />
    </Provider>
  );
}

export default App;
