import React from "react";

import './trackbox.css';

const TrackBox = ({data}) => {
    return(
        <>
            {data.map((value, index) => {
                return(
                    <>
                        <div key={index} className="trackbox">
                            <p className="trackName">{value.tname}</p>
                            <p className="trackDetails">{value.aname} | {value.name_artist1}{value.name_artist2 !== "None" ? `, ${value.name_artist2}` : ""}{value.name_artist3 !== "None" ? `, ${value.name_artist3}` : ""}{value.name_artist4 !== "None" ? `, ${value.name_artist4}` : ""}</p>
                        </div>
                    </>
                )
            })}
        </>
    )
}

export default TrackBox;