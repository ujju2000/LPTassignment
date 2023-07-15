
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Routes>
            <Route exact path = '/' element = {<Home />} />
            <Route path = '/signup' element = {<Login /> } />
          </Routes>

        </BrowserRouter>
    </div>
  );
}

export default App;
