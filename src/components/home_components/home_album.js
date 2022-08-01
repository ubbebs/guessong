import React from "react";
import { Link } from 'react-router-dom';

import './home_box.css';

const HomeAlbum = ({data}) => {
    return(
        <>
            {data.map((value, key) => {
                const url = {
                    backgroundImage: `url(${value.cover})`
                }
                return(
                    <Link to={`/album/${value.album_id}`}>
                        <div key={key} className="home-box-item">
                            <div className="home-box-item-cover" style={url}>
                            </div>
                            <div className="home-box-item-name">
                                <p>
                                    {value.name}
                                </p>
                            </div>
                        </div>
                    </Link>
                )
            })}
        </>
    )
}

export default HomeAlbum;