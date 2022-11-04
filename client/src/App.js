import logo from './logo.svg';
import './App.css';
import {BrowserRouter} from 'react-router-dom'
import Router from './router'

function App() {
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  );
}

export default App;
