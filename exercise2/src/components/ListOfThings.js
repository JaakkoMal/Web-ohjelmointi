import React from 'react';

export default function ListOfThings(props) {

    
  return <div>
            <ul>
                {
                props.listItems.map((item, index )=> {
                     return <li className="ListOfThings" key={index}>{item.qty} {item.name}
                                
                            </li>
                            })
                    }
            </ul>
  </div>;
}
