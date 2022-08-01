import React from "react";

import './home_box.css';

const HomeTracks = ({data}) => {
    return(
        <>
            {data.map((value, key) => {
                return(
                    <div key={key} className="home-box-item">
                        <div className="home-box-item-name">
                            <p>
                                {value.name}
                            </p>
                        </div>
                    </div>
                )
            })}
        </>
    )
}

export default HomeTracks;