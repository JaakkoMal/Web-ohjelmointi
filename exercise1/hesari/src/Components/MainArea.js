import React from 'react';

export default function MainArea(props) {
  return <div className="mainArea">
            <div className="mainNews">
                <div className="mainHeadline"><b>Koronavirus</b><br></br>
                <img src="https://hs.mediadelivery.fi/img/658/681a10bf2c584f719d92d1f4fdcfaf54.jpg.webp" alt="Kuva"></img>
                <div className="HSSeuraa">HS seuraa</div>
                <div className="seuranta">Tähän seuranta</div>
                <img src="https://www.sttinfo.fi/data/images/00806/17ceb965-aa26-40d6-9900-e6de584a2992.png" alt="koronatilastokuva" height="500" width="700"></img>
                
                </div>
                
                
            </div>
            <div className="sideNews">
            <div className="luetuimmat">Luetuimmat</div>
            {        
                props.sideNewsBitch.map(item =>{
                return <div className='sideNumber' key={item}> {item.nmb}
                <div className='sideNewsBox' key={item}> {item.news} </div>
                </div>
})}

            </div>
  </div>;
}
