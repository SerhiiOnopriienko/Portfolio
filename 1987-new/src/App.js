import './App.css';
import { Provider } from 'react-redux';
import { store } from './store/store';
import { BrowserRouter } from 'react-router-dom';
import RouterComponent from './router';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <RouterComponent />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
