import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';

import './home_box.css';

const HomeArtist = ({data}) => {
    const [items, setItems] = useState(false)

    console.log(items)

    const isLoaded = async () => {
        data.length === 0 ? setItems(false) : setItems(true)
    }

    useEffect(() => {
        isLoaded()
    }, [])

    return(
        <>
        {items ? (
            data.map((value, key) => {
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
            })
        ) : (
            <div className="loadingPage">
                ŁADOWANIE...
            </div>
        )}
        </>
    )
}

export default HomeArtist;