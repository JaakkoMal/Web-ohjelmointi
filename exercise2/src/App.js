import './App.css';
import ListAdditions from './components/ListAdditions';
import ListOfThings from './components/ListOfThings';
import {useState} from 'react';
import Header from './components/Header';
import PiisamBody from './components/PiisamBody';

function App() {



const [laiturItems, setLaiturListItems] = useState([
  {
    id: 1,
    qty: 0,
    name: "Piisams"
  },
  {
    id: 2,
    qty: 0,
    name: "Laitur"
  },
  {
    id: 3,
    qty: 0,
    name: "Aake"
  },
  {
    id: 4,
    qty: 0,
    name: "Headlines on IS"
  }
]);


const onLaiturAddition = (idCheck) =>{
  console.log("onLaiturAddition");
  console.log("Klikatun olion id: " + idCheck);
  var randomNumber = Math.floor(Math.random() * 10) +1;
  console.log(randomNumber);
  

  let newLaiturItems = [...laiturItems];
  
  let itemClickedIndex = newLaiturItems.findIndex(i => idCheck == i.id);
  
  if(itemClickedIndex != -1){

    let newElement = {...newLaiturItems[itemClickedIndex]}
    newElement.qty = newElement.qty + randomNumber;
    newLaiturItems[itemClickedIndex] = newElement;
    setLaiturListItems(newLaiturItems);
  }
  
  console.log(laiturItems);


}



  return (
    <div className="App">
      <Header/>
      <ListOfThings listItems={laiturItems}/>
      <ListAdditions
      onAddClick={onLaiturAddition}
      
      />
      <PiisamBody/>
      
    </div>
  );
}



export default App;
