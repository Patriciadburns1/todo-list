import React from 'react'; 
import listData from '../data/list'; 

//curly braces adding javascript - 
export default props => {
    const listElements = listData.map((item, index) => {
        //index only thing available right now/ defeats purpose 
        // use somethign more unique like id - something must be unqiue
        return <li className="collection-item" key={item.id}> {item.title} </li>
    })
    return(
       <ul className="collection"> 
            {listElements} 
       </ul>
    )
};