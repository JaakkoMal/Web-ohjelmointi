import './App.css';
import Title from './components/Title';
import ProductList from './components/ProductList';
import {useState} from 'react';
import Search from './components/Search';

function App() {

const [products, setProducts] = useState([
  {
    name: 'Glow in the dark toilet paper',
    image: <img src="TP.jpg"/>,
    price: 24.99
  },
  {
    name: 'Diet water 4-pack',
    image: <img src="water.jpg"/>,
    price: 19.99
  },
  {
    name: 'Bread gloves',
    image: <img src="breadgloves.jpg"/>,
    price: 29.99
  },
  {
    name: 'Poopy time fun shapes',
    image: <img src="poopytime.jpg"/>,
    price: 39.99
  },
  {
    name: 'Water melon powered lawnmower',
    image: <img src="melon.jpg"/>,
    price: 1499.99
  },
  {
    name: 'Crybaby helper',
    image: <img src="nessu.jpg"/>,
    price: 14.99
  },
  {
    name: 'Aaken laituri',
    image: <img src="laituri.jpg"/>,
    price: 4999.99
  },
  {
    name: 'Sumeet Tappoo, death metal from Fiji CD',
    image: <img src="sumeet.jpg"/>,
    price: 9.99
  }

]);

const [description, setDescription] = useState("");

const doSearch = (description) => {
  console.log("searching..");
  console.log(description);

  let newProducts = [...products];

  let searchedItemName = newProducts.findIndex(i => description == i.name);
  if(searchedItemName != -1){
    let newElement = {...newProducts[searchedItemName]}
    newElement.name = description;
    setProducts(newProducts);
    console.log("Tässä uusi elementti: " + newElement.name + newElement.price);
  }else{
    console.log("Ei vittu löydy tommosta ku " + description);
  }
  
}

  return (
    <div className="App">
      <Title />
      <Search 
      onSearchClick={doSearch}
      descriptionFieldValue={description} 
      onSearchItemChange ={(descriptionValue) => setDescription(descriptionValue)}/>
      <div className="productContainer">
      {products.map(p => <ProductList nimi={p.name} kuva={p.image} hinta={p.price}/>)}
      </div>
      
    </div>
  );
}

export default App;
