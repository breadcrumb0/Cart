import './SideBar.css'
const SideBar = () => {
  const itemList = ['Item 1', 'Item 2', 'Item 3', 'Item 4','item5'];

  return (


   <div className="sidebar-wrapper">
       <ul>
        {itemList.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
   </div>

  )
}
export default SideBar