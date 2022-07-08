import './styles/main.css';
import Home from "./routes/Home";
import Navbar from './components/Navbar';
import Dashboard from './routes/Dashboard';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


function App() {

  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>)
}

export default App;
