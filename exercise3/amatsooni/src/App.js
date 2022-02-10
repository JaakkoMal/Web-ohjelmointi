import './App.css';
import Title from './components/Title';
import ProductList from './components/ProductList';
//import {useState} from 'react';
import Search from './components/Search';

function App() {

const products = [
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

];


const {search} = window.location;
const query = new URLSearchParams(search).get('s');

const filterProducts = (products, query) => {
  if (!query) {
    return products;
  }
  return products.filter((product) => {
    const productName = product.name.toLowerCase();
    return productName.includes(query);
  });
};


const filteredProducts = filterProducts(products, query);

  return (
    <div className="App">
      <Title />
      <Search />
      <div className="productContainer">
      {filteredProducts.map(product => (
        <ProductList key ={product.key} nimi={product.name} kuva={product.image} hinta={product.price}/>
      ))}
      </div>
      
    </div>
  );
}

export default App;
