import React from 'react';

export default function ProductList(props) {
  return <div className="productBox">
      <div><h2>{props.nimi}</h2></div>
      <div>{props.kuva}</div>
      <div>€{props.hinta}</div>
  </div>;
}
