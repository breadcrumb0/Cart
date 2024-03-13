
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import { Route, Routes } from 'react-router-dom';
import SideBar from './components/sidebar/SideBar';
import NavbarTop from './components/Navbar/NavbarTop';
import MainSection from './components/main/MainSection';
import Home from './components/tables/home/Home';
import DisplayData from './components/tables/data/DisplayData';
import Stock from './components/tables/stock/Stock';

function App() {
  return (
    <>
  
    
    <div className="app">
    <SideBar />
    <div className="main">
      <NavbarTop />
      <MainSection />
      <Routes>
            <Route  path="/" element={<Home/>} exact />
            <Route path="/stock" element={<Stock/>} />
            <Route path='/datatable' element={<DisplayData/>} />
      </Routes>
    </div>
  </div>
  
  </>
  );
}

export default App;
