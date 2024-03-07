
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SideBar from './components/sidebar/SideBar';
import NavbarTop from './components/Navbar/NavbarTop';
import MainSection from './components/main/MainSection';
import item from './components/tables/item/item'
import stock from './components/tables/stock/stock';
import Home from './components/tables/home/Home';

function App() {
  return (
    <Router>
    <div className="app">
    <SideBar />
    <div className="main">
      <NavbarTop />
      <MainSection />
      <Routes>
            <Route  path="/" element={<Home/>} exact />
            <Route path="/item" component={item} />
            <Route path="/stock" component={stock} />
      </Routes>
    </div>
  </div>
  </Router>
  );
}

export default App;
