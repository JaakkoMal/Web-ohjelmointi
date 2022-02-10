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
    rating: "2/5",
    price: 24.99
  },
  {
    name: 'Diet water 4-pack',
    image: <img src="water.jpg"/>,
    rating: "1/5",
    price: 19.99
  },
  {
    name: 'Bread gloves',
    image: <img src="breadgloves.jpg"/>,
    rating: "3/5",
    price: 29.99
  },
  {
    name: 'Poopy time fun shapes',
    image: <img src="poopytime.jpg"/>,
    rating: "4/5",
    price: 39.99
  },
  {
    name: 'Water melon powered lawnmower',
    image: <img src="melon.jpg"/>,
    rating: "4.5/5",
    price: 1499.99
  },
  {
    name: 'Crybaby helper',
    image: <img src="nessu.jpg"/>,
    rating: "2.5/5",
    price: 14.99
  },
  {
    name: 'Aaken laituri',
    image: <img src="laituri.jpg"/>,
    rating: "14/5",
    price: 4999.99
  },
  {
    name: 'Sumeet Tappoo, death metal from Fiji CD',
    image: <img src="sumeet.jpg"/>,
    rating: "7/5",
    price: 9.99
  },
  {
    name: 'Brezhnev eyebrows',
    image: <img src="brow.jpg"/>,
    rating: "5/5",
    price: 179.99
  },
  {
    name: "Fingering with ET art poster",
    image: <img src="ET.jpg"/>,
    rating: "1/5",
    price: 24.99
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
        <ProductList key ={product.key} nimi={product.name} kuva={product.image} hinta={product.price} arvostelu={product.rating}/>
      ))}
      </div>
      
    </div>
  );
}

export default App;
