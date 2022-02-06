import React from 'react';
import {useState} from 'react';

export default function Search(props) {



const handleSearch = (event) => {
    props.onSearchItemChange(event.target.value);
    console.log(event.target.value);
}

  return <div className="SearchNFilter">
      <div>Hae nimellä <input type="text" value={props.descriptionFieldValue} onChange={handleSearch}/></div>
      <button onClick= { () => props.onSearchClick(props.descriptionFieldValue)}>Hae</button>
      
  </div>;
}
