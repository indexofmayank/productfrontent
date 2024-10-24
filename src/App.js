import logo from './logo.svg';
import './App.css';
import Sidebar from './components/Sidebar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import ProductPage from './pages/ProductPage';
import Homepage from './pages/Homepage';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Homepage />} />
        <Route exact path='/product' element={<ProductPage />} />
      </Routes>
    </Router>
  );
}

export default App;
