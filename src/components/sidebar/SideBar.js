import './SideBar.css'
import { Outlet, Link } from "react-router-dom";
const SideBar = () => {
  //const itemList = ['Item 1', 'Item 2', 'Item 3', 'Item 4','item5'];

  return (


   <div className="sidebar-wrapper">
     <h2>
      <Link  style={{color:'white', margin:'20px',textDecoration:'none'}} to="/">Home</Link>
     </h2>
     <li>
      <Link to='/datatable'>Table</Link>
     </li>
     <li>
      <Link  style={{color:'aliceblue'}} to='/stock'>Stock</Link>
     </li>
     {/*
       <ul>
        {itemList.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
        */}
      <Outlet/>
   </div>

  )
}
export default SideBar