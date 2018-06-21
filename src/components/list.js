import React from 'react'; 


//curly braces adding javascript - 
export default props => {
    const listElements = props.data.map((item, index) => {
        //index only thing available right now/ defeats purpose 
        // use somethign more unique like id - something must be unqiue
        return <li className="collection-item" key={index}> {item.title} </li>
    })
    return(
       <ul className="collection"> 
            {listElements} 
       </ul>
    )
};