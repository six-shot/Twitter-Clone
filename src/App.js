import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import Home from './Pages/Home';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

function App() {
  return (
    <div className="App">
     <main className=''>
      
     <Router>
        <Routes>
          <Route path='/' element={<Login/>} />
          <Route path='/home' element={<Home/>} />
        </Routes>
      </Router>

     

     </main>
    </div>
  );
}

export default App;
