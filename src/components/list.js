import React from 'react';
import Item from './item';  


//curly braces adding javascript - 
export default props => {
    const listElements = props.data.map((item, index) => {
        //index only thing available right now/ defeats purpose 
        // use somethign more unique like id - something must be unqiue
        // return <li className="collection-item" key={index}> {item.title} </li>
        // console.log('item', item); 
        return <Item key={item._id} title={item.title} /> 
    })
    return(
       <ul className="collection"> 
            {listElements} 
       </ul>
    )
};