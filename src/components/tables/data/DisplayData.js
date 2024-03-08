import React from 'react';

import Data from './Data'

const DisplayData = () => {
    const columns = [
        {
          Header: 'ID',
          accessor: 'id',
        },
        {
          Header: 'Name',
          accessor: 'name',
        },
        {
          Header: 'Age',
          accessor: 'age',
        },
        // Add more columns as needed
      ];
      
      const data = [
        { id: 1, name: 'John Doe', age: 30 },
        { id: 2, name: 'Jane Smith', age: 25 },
        // Add more data rows as needed
      ];
      
    return (
        <div>
          <h1>Employee Data</h1>
          <Data columns={columns} data={data} />
        </div>
      );
}
export default DisplayData