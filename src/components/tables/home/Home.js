import { useState } from "react";
import JsonData from "./Data.json";
import SearchItem from "./SearchItem";

const Home = () => {
    //Searching
const [search, setSearch]=useState('')

  // Filter items based on search term
  const filteredItems = JsonData.filter((item) =>
    item.item.toLowerCase().includes(search.toLowerCase())
  );

//Table data
  const DisplayData = filteredItems.map((item) => {
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
         <SearchItem
         setSearch={setSearch}
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
