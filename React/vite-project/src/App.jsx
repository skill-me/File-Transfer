import { useState, useEffect } from 'react';
import './App.css'

function App() {
  let [Files, setFiles] = useState([]);

  async function main(){
    const data = await fetch("http://localhost:8080/files");
        const fetchedData = await data.json();
        if (fetchedData){
          console.log(fetchedData);
        }
        setFiles(fetchedData); // Set the state with the fetched data
  }
  useEffect(() => {
        main()
        }
    // Call the function
    ,[]);

  function CreateStructure(input){
    return (
      <div>
        <table>
          <tbody>
            {Files.map((single)=>{
              return <tr>
                        <td> {single}</td>
                        <td> <button onClick={ ()=>{ fetch( "http://localhost:8080/database",{ method : "POST", headers: { "Content-Type": "application/json"},
                        body : JSON.stringify( {"file" : single})})}}> Download File
                            </button> 
                        </td> 
                    </tr> }
            )}
        </tbody>
      </table>
    </div>
  )}

  return (
      <div>
        <CreateStructure input={Files} />
      </div>
  )}



export default App

