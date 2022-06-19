import DynamicTable from "./dynamic-table/DynamicTable";
import NewSort from "./dynamic-table/NewSort";
import React, { Component } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'; 
import { useTable } from "react-table";






function App() {
  const columns = React.useMemo(
    () => [
      {
        Header: "Id",
        accessor: "id"
      },
      {
        Header: "Name",
        accessor: "name" // accessor is the "key" in the data
      },
      {
        Header: "Term1",
        accessor: "term1"
      },
      {
        Header: "Term2",
        accessor: "term2"
      }
    ],
    []
  );

  const data = React.useMemo(
    () => [
      {

        id: "1",
        name: "Alfred",
        term1: "E",
        term2: "A"
      },
      {
        id: "1",
        name: "Alfred",
        term1: "E",
        term2: "A"
      },
      {
        id: "1",
        name: "Alfred",
        term1: "E",
        term2: "A"
      }
    ],
    []
  );



  {
  return (
    //<DynamicTable />
    <NewSort columns={columns} data={data}/>
  );
  }
}
export default App;