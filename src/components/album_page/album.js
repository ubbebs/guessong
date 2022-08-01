import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Axios from 'axios';

import HomeTracks from '../../components/home_components/home_tracks';

import './album.css'


const Album = ({data}) => {
    const [trackList, setTrackList] = useState([]);
    const { album_id } = useParams();

    const a_id = parseInt(album_id);
    useEffect(() => {
        Axios.get(`https://mysql-guessong-heroku.herokuapp.com/getTracks/${a_id}`).then((response) => {
            console.log(response)
            setTrackList(response.data);
        }) // eslint-disable-next-line
      }, []);
    
    return(
        <>
            {data.filter(value => value.album_id === a_id).map((album, albumIndex) => {
                const cover_url = {
                    backgroundImage: `url(${album.cover})`
                };

                const searchKey = `${a_id}`


                return(
                    <>
                        <div className="album-main margin-top" style={cover_url}>
                            <div className="album-background d-flex jc-center">
                                <div className="album-data d-flex ai-center jc-center">
                                    <div className="album-data-box d-flex ai-center jc-center">
                                        <div className="album-data-box-cover" style={cover_url}></div>
                                        <div className="album-data-box-title"><p>{album.name}</p></div>
                                        <Link to={`/guess/${searchKey}`}>
                                            <button className="artist-buttons-box-button">Guess</button>
                                        </Link>
                                    </div>
                                    <div className="album-page">
                                        <HomeTracks data={trackList} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                )
            })}
        </>
    )
}

export default Album;