import { BrowserRouter, Routes, Route } from 'react-router-dom';
// pages
import Landing from './pages/Landing';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className='pages'>
          <Routes>
            <Route
              path="/"
              element={<Landing />}
            />
          </Routes>


        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
