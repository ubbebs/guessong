import React from 'react';
import { Link } from 'react-router-dom';

import HomeArtist from '../home_components/home_artist';
import HomeAlbum from '../home_components/home_album';

import './home.css';

const Home = ({data}) => {

  return (
    <div className="home margin-top">
        <div className="home-main">
          <Link to="/artists"><p className="home-main-title">Artists &gt;</p></Link>
          <div className="home-main-container">
            <HomeArtist data={data[0]}/>
            <Link to='/artists'>
              <div className="home-box-item">
                  <div className="home-box-item-name all">
                    <p className="home-box-item-sign">
                      +
                    </p>
                  </div>
              </div>
            </Link>
          </div>
          <Link to="/albums"><p className="home-main-title">Albums &gt;</p></Link>
          <div className="home-main-container">
            <HomeAlbum data={data[1]}/>
            <Link to='/albums'>
              <div className="home-box-item">
                  <div className="home-box-item-name all">
                    <p className="home-box-item-sign">
                      +
                    </p>
                  </div>
              </div>
            </Link>
          </div>
          <Link to="/playlists"><p className="home-main-title">Playlists &gt;</p></Link>
          <div className="home-main-container"></div>
        </div>
    </div>
  )
}

export default Home;