import './App.css';
import Header from './Components/Header';
import FastNews from './Components/FastNews';
import MainArea from './Components/MainArea';



/*const SideContent = (props) => {
  return (
    <div>
      <p>{props.Nro} {props.sideNews}</p>
    </div>
  )
}*/

function App() {


  const sideBarNews = [
    {
      nmb: 1,
      news: 'Happo-Tommi löysi linnunpesän autonsa konepellin alta. Katso kuvat!'
    },
    {
      nmb: 2,
      news: 'Kuusamosta löytyi puhuva karhu - "En voinut olla enää hiljaa.."'
    },
    {
      nmb: 3,
      news: 'Näin sujuu React paskalta koodariopiskelijalta - "Eihän tämä häävisti mene"'
    },
    {
      nmb: 4,
      news: 'Pepe Wilberg viimein avoimena Onnenpyörä-kokemuksestaan - "Toukokuu.. Olin kyllä itekki, että ei vittu.."'
    }
  ]
  
  return (
    <div className="App">
      <Header/>
      <FastNews/>
      <MainArea sideNewsBitch={sideBarNews} />
    </div>
  );
}


export default App;
