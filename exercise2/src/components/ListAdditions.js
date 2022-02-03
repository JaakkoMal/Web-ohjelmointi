import {useState} from 'react';

export default function listAdditions(props) {

    /*const handleClick1 = (event) => {
        console.log(event.target.value);
        console.log("Piisams clicked");
    }*/
    

    /*const handleClick2 = () => {
        console.log("Laiturs clicked");
    }
    const handleClick3 = () => {
        console.log("Aakes clicked");
    }
    const handleClick4 = () => {
        console.log("Headline clicked");
    }*/
 /*const [quantity, setQuantity] = useState(0);

 const handleQuantityChange = (event) => {
     console.log(event.target.value);
 }*/
 
  

  return <div>
        <button onClick={ () => props.onAddClick(1)} >Add Piisams</button>
        <button onClick={ () => props.onAddClick(2)}>Add Laiturs</button>
        <button onClick={ () => props.onAddClick(3)}>Add Aakes</button>
        <button onClick={ () => props.onAddClick(4)}>Add Headline to IS</button>
  </div>;
}
