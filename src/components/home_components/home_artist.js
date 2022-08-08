import React from "react";
import { Link } from 'react-router-dom';

import './home_box.css';

const HomeArtist = ({data}) => {
    return(
        <>
            {data.map((value, key) => {
                const url = {
                    backgroundImage: `url(${value.cover})`
                }
                
                console.log(data)

                return(
                    <Link to={`/artist/${value.artist_id}`}>
                        <div key={key} className="home-box-outline">
                            <div className="home-box-outline-bg"></div>
                            <div className="home-box-item">
                                <div className="home-box-item-cover" style={url}>
                                </div>
                                <div className="home-box-item-name">
                                    <p>
                                        {value.name}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </Link>
                )
            })}
        </>
    )
}

export default HomeArtist;