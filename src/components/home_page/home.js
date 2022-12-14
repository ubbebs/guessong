import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import HomeArtist from '../home_components/home_artist';
import HomeAlbum from '../home_components/home_album';

import './home.css';

const Home = ({data}) => {
  return (
    <div className="home margin-top">
        <div className="home-main">
          <div className='home-main-box'>
            <h1>GUESSONG</h1>
            <p>*motywacyjny slogan (jutro ogarnę)*</p>
          </div>
            <Link to="/artists"><p className="home-main-title">Artyści <span>&lt;- wybierz artystę</span></p></Link>
            <div class="home-main-titleline"></div>
            <div className="home-main-container">
              <HomeArtist data={data[0]}/>
              <Link to='/artists'>
                <div className="home-box-outline">
                  <div className="home-box-item">
                      <div className="home-box-item-name all">
                        <p className="home-box-item-sign">
                          +
                        </p>
                      </div>
                  </div>
                </div>
              </Link>
            </div>
            <Link to="/albums"><p className="home-main-title">Albumy <span>&lt;- wybierz album</span></p></Link>
            <div class="home-main-titleline"></div>
            <div className="home-main-container">
              <HomeAlbum data={data[1]}/>
              <Link to='/albums'>
                <div className="home-box-outline">
                  <div className="home-box-item">
                      <div className="home-box-item-name all">
                        <p className="home-box-item-sign">
                          +
                        </p>
                      </div>
                  </div>
                </div>
              </Link>
            </div>
            <Link to="/playlists"><p className="home-main-title">Playlisty <span>&lt;- no tego jeszcze nie ma :/ (ale będzie!)</span></p></Link>
            <div class="home-main-titleline"></div>
            <div className="home-main-container"></div>
        </div>
    </div>
  )
}

export default Home;