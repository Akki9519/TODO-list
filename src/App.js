
import React, { useState } from "react";
import Todolist from "./Todolist";
import Clear from './Clear'
import "./App.css";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import FingerprintIcon from '@mui/icons-material/Fingerprint';

const App = () => {
  const [inputList, setinputList] = useState("");
  const [item, setItem] = useState([]);

  const itemEvent = (event) => {
    setinputList(event.target.value);
  };

  const listofitem = () => {
    setItem((item) => {
      return [...item, inputList];
    });
    setinputList("");
  };

  const deleteitem = (id) => {
    console.log("delete")
    setItem((item) => {
      return item.filter((arr, index) => {
        return index !== id;
      });
    });
  }

  const clear=(id)=>{
    console.log("clear")
    setItem([]);

  }

    return (
      <>
        <div className="h-screen w-screen bg-lime-300 pt-40">
          <div className="h-96 w-80  bg-[rgb(255,255,255)] ml-60 pt-8 rounded-lg">
            <div className="h-14 bg-violet-600 font-bold text-center text-slate-50 pt-3 text-2xl">
              {" "}
              Add Your List Here<FingerprintIcon/>
            </div>
            <div>
              <input
                type="text"
                placeholder="Add a items"
                value={inputList}
                onChange={itemEvent}
                className="pt-6 pl-14  opacity-75 rounded-none outline-none outline-offset-0 shadow-none"
              />
              <AddCircleIcon
                sx={{ backgroundColor: "white", color: "blue" }}
                onClick={listofitem}
              />{" "}
            </div>
                
               <div className="mt-5 text-center">
              {item.map((itemval, index) => {
                return (
                  <ol>
                  <Todolist id={index} text={itemval} onselect={deleteitem} />
                  </ol>
                );
              })}
              </div>
            
            <Clear akki={clear}/>
          </div>
          
        </div>
        
      </>
    );
  };

export default App;
   









