import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
const Todolist = (props) => {
  return (
    <>
    <div className="">
        <div className="" onClick={()=>{
           props.onselect(props.id);
      }}> <DeleteIcon sx={{color:"red" ,float:"right",marginRight:"120px"}} /></div>
        
      <li>{props.text}</li>

      </div>
      

    </>
  );
};

export default Todolist;



