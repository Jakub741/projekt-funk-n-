
import TableData from "./TableData";

function DynamicTable(){

// get table column
 const column = Object.keys(TableData[0]);

 // get table heading data, data která jsou nahoře v tabulce, header

 const ThData =()=>{
    
     return column.map((data)=>{
         return <th key={data}>{data}</th>
     })
 }


 

// get table row data, data v jednotlivých řádcích
const tdData =() =>{
   
     return TableData.map((data)=>{
       return(
           <tr>
                {
                   column.map((x)=>{
                       return <td>{data[x]}</td>
                   })
                }
           </tr>
       )
     })
}
  return (
      <table className="table">
        <thead>
         <tr>{ThData()}</tr>
        </thead>
        <tbody>
        {tdData()}
        </tbody>
       </table>
  )
}
export default DynamicTable;