import React, { useState, useEffect } from 'react';
import ScrollToTop from "./scrollToTop";
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Axios from 'axios';

import NavBar from './components/navbar/navbar';
import Home from './components/home_page/home';
import Albums from './components/albums_page/albums';
import Album from './components/album_page/album';
import Artists from './components/artists_page/artists';
import Artist from './components/artist_page/artist';
import Guess from './components/guess_page/guess_page';

import './css/App.css';

function App() {
  const [artistList, setArtistList] = useState([]);
  const [artist5List, setArtist5List] = useState([]);
  const [albumList, setAlbumList] = useState([]);
  const [album5List, setAlbum5List] = useState([]);
  const [trackList, setTrackList] = useState([]);

  useEffect(() => {
    Axios.get("https://mysql-guessong-heroku.herokuapp.com/getArtists").then((response) => {
      setArtistList(response.data);
    })
    Axios.get("https://mysql-guessong-heroku.herokuapp.com/get5Artists").then((response) => {
      setArtist5List(response.data);
    })
    Axios.get("https://mysql-guessong-heroku.herokuapp.com/getAlbums").then((response) => {
      setAlbumList(response.data);
    })
    Axios.get("https://mysql-guessong-heroku.herokuapp.com/get5Albums").then((response) => {
      setAlbum5List(response.data);
    })
    Axios.get("https://mysql-guessong-heroku.herokuapp.com/getTracks").then((response) => {
      setTrackList(response.data);
    })
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <Switch>
        <Route exact path="/">
          <Home data={[artist5List, album5List]} />
        </Route>
        <Route exact path="/albums">
          <Albums data={albumList} />
        </Route>
        <Route exact path="/album/:album_id">
          <Album data={albumList} />
        </Route>
        <Route exact path="/artists">
          <Artists data={artistList} />
        </Route>
        <Route exact path="/artist/:artist_id">
          <Artist data={artistList} />
        </Route>
        <Route exact path="/guess/:searchKey">
          <Guess data={[trackList, artistList, albumList]} />
        </Route>
      </Switch> 
      <NavBar />
    </Router>
  );
}

export default App;
