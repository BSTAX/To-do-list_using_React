import React, { useState } from "react";
import Todolist from "./Todolist";

const App = () => {
  const [inputlist, setinputlist] = useState();
  const [items, setitems] = useState([]);

  const itemEvent = (event) => {
    setinputlist(event.target.value);
  };

  const listofitems = () => {
    setitems((olditems) => {
      return [...olditems, inputlist];
    });
    // This line will clear whatever written in the input field after adding to the list.
    setinputlist("");
  };

  const deleteitems = (id) => {
    console.log("deleted");

    setitems((olditems)=>{
      return olditems.filter((arrelem,index)=>{
          return index !== id;
      })
    })
  };

  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <br />
          <h1>To-Do List</h1>
          <br />
          <input
            type="text"
            placeholder="Add a item"
            onChange={itemEvent}
            value={inputlist}
          />
          <button onClick={listofitems}> + </button>
          <ol>
            {/* <li>{inputlist}</li> */}

            {items.map((itemval, index) => {
              return (
                <Todolist
                  key={index}
                  id={index}
                  text={itemval}
                  onSelect={deleteitems}
                /> 
              );
            })}
          </ol>
        </div>
      </div>
    </>
  );
};

export default App;
