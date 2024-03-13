import { useState } from "react";
import JsonData from "./Data.json";

const Home = () => {
    //Searching
const [serchQuery,setSearchQuery]=useState('')

const handleSearch=(e)=>{
    const query=e.target.value;
    setSearchQuery(query)
}

//Table data
  const DisplayData = JsonData.map((item) => {
    return (
      <tr key={item.slNo}>
        <td>{item.slNo}</td>
        <td>{item.item}</td>
        <td>{item.currentStock}</td>
        <td>{item.purchasePrice}</td>
        <td>{item.salesPrice}</td>
      </tr>
    );
  });
  return (
    <div>
         {/*search */}  
<input
className="form-control"
type="text"
placeholder="Search by item name..."
value={serchQuery}
onChange={handleSearch}
/>
        {/*table data */}
      <table id="example" class="table table-striped">
        <thead>
          <tr>
            <th>Sl No</th>
            <th>Item</th>
            <th>Current Stock</th>
            <th>Purchase Price</th>
            <th>Sales Price</th>
          </tr>
        </thead>
        <tbody>{DisplayData}</tbody>
      </table>
    </div>
  );
};

export default Home;
