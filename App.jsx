import React, { useState } from "react";

const App = () => {
  const [inputlist, setinputlist] = useState();
  const [items,setitems]=useState([]);

  const itemEvent = (event) => {
    setinputlist(event.target.value);
  };

  const listofitems = () => {

  };

  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <br />
          <h1>To-Do List</h1>
          <br />
          <input type="text" placeholder="Add a item" onChange={itemEvent} />
          <button onClick={listofitems}> + </button>
          <ol>
            {/* <li>{inputlist}</li> */}
 
            {items.map((itemval)=>{
              return <li>{inputlist}</li>
            })}
          </ol>
        </div>
      </div>
    </>
  );
};

export default App;
