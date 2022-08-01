import React from 'react';
import HomeArtist from '../home_components/home_artist';

const Artists = ({data}) => {
  return (
    <div className="home margin-top">
        <div className="home-main">
          <div className="home-main-container">
            <HomeArtist data={data} />
          </div>
        </div>
    </div>
  )
}

export default Artists;