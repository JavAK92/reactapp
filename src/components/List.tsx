import React from "react";

function List(){

    let items = ["New-York","San-Fransico","Riyadh","Tokyo","Delhi"]
    //items=[]



    return(


        <div>
            {items.length ===0 && <p>This is the count</p>}
        <ul className="list-group">
       
       {items.map((items)=> <li key={items} onClick={()=>console.log("Clicked")} className="list-group-item">{items}</li>)}



        </ul>



        </div>
    )
}

export default List;