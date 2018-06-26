import React from 'react';
import Item from './item';  
import './list.css'


//curly braces adding javascript - 
export default props => {
    // console.log("List Props", props); 
    const listElements = props.data.map((item, index) => {
        // console.log('item in list/index', item); 
        //index only thing available right now/ defeats purpose 
        // use somethign more unique like id - something must be unqiue
        // return <li className="collection-item" key={index}> {item.title} </li>
        // console.log('item', item); 
        return <Item key={item._id} title={item.title} complete={item.complete} delete={props.delete.bind(this, item._id)} /> 
    })
    return(
       <ul className="collection"> 
            {listElements} 
       </ul>
    )
};