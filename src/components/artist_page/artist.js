import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Axios from 'axios';

import { Link } from 'react-router-dom';

import HomeAlbum from '../../components/home_components/home_album';

import './artist.css';

const Artist = ({data}) => {
    const [albumList, setAlbumList] = useState([]);
    const { artist_id } = useParams();

    const a_id = parseInt(artist_id);

    useEffect(() => {
        Axios.get(`https://mysql-guessong-heroku.herokuapp.com/getAlbums/${a_id}`).then((response) => {
            setAlbumList(response.data);
        }) // eslint-disable-next-line
      }, []);
    
    return(
        <>
            {data.filter(value => value.artist_id === a_id).map((artist, artistIndex) => {
                const bgcover_url = {
                    backgroundImage: `url(${artist.bgcover})`
                };
                const cover_url = {
                    backgroundImage: `url(${artist.cover})`
                };

                const searchKeyE = `${artist.artist_id}e`
                const searchKeyM = `${artist.artist_id}m`
                const searchKeyH = `${artist.artist_id}h`

                return(
                    <>
                        <div className="artist-main margin-top">
                            <div className="artist-background" style={bgcover_url}>
                            </div>
                            <div className="artist-background-shadow">
                            </div>
                            <div className="artist-data">
                                <div className="artist-data-box">
                                    <div className="artist-cover" style={cover_url}>
                                    </div>
                                    <div className="artist-box">
                                        <div className="artist-box-name">
                                            <p>{artist.name}</p>
                                        </div>
                                        <div className="artist-buttons">
                                            <div className="artist-buttons-box">
                                                <Link to={`/guess/${searchKeyE}`}>
                                                    <button className="artist-buttons-box-button">Łatwy: TOP25</button>
                                                </Link>
                                            </div>
                                            <div className="artist-buttons-box">
                                                <Link to={`/guess/${searchKeyM}`}>
                                                    <button className="artist-buttons-box-button">Średni: TOP50</button>
                                                </Link>
                                            </div>
                                            <div className="artist-buttons-box">
                                                <Link to={`/guess/${searchKeyH}`}>
                                                    <button className="artist-buttons-box-button">Trudny: TOP125</button>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="home">
                            <div className="home-main artist-page">
                                
                                <p>Album list</p>
                                <HomeAlbum data={albumList} />
                            </div>
                        </div>
                    </>
                )
            })}
        </>
    )
}

export default Artist;