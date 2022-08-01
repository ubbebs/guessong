import React from 'react';
import HomeAlbum from '../home_components/home_album';

const Albums = ({data}) => {
  return (
    <div className="home margin-top">
        <div className="home-main">
          <div className="home-main-container">
            <HomeAlbum data={data} />
          </div>
        </div>
    </div>
  )
}

export default Albums;