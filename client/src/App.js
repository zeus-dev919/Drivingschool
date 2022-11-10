import { BrowserRouter } from 'react-router-dom'
import Router from './router'
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <BrowserRouter>
      <Router />
      <Toaster
        position="top-right"
        reverseOrder={true} />
    </BrowserRouter>
  );
}

export default App;
