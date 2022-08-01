import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import Guesser from "../guesser/guesser";

import './guess_page.css';

const Guess = ({data}) => {
    const [roll, setRoll] = useState(0)
    const [correct, setCorrect] = useState(0)
    const [wrong, setWrong] = useState(0)
    const { searchKey } = useParams() //pobieranie id z linku

    const rollSong = (roll) => {
        setRoll(prevroll => prevroll + roll)
    }

    const rollCorrectSong = (roll) => {
        setCorrect(prevcorrect => prevcorrect + roll*10)
        setRoll(prevroll => prevroll + roll)
    }

    const wrongAnswers = (wrong) => {
        setWrong(wrong)
        document.querySelector(".guesser-box-wrong").setAttribute(
            'style',
            'display: flex;'
        )
    }

    if (data[0].length !== 0) {
        let level = searchKey.slice(-1)
        let limit
        let message
        let moduleName
        let backgroundUrl
        let cover_url
        let search = parseInt(searchKey)
        let songList = []

        if (level === "e" || level === "m" || level === "h") {
            switch (level) {
                case "e":
                    limit = 25;
                    message = " - łatwy"
                    break;
                case "m":
                    limit = 50;
                    message = " - średni"
                    break;
                case "h":
                    limit = 125;
                    message = " - trudny"
                    break;
                default:
                    break
            }

            data[1].filter(value => value.artist_id === search).map((artist, artistIndex) => {
                moduleName = artist.name
                backgroundUrl = artist.cover
                cover_url = {
                    backgroundImage: `url(${backgroundUrl})`
                };
            })

            data[0].filter(value => value.id_artist1 === search || value.id_artist2 === search || value.id_artist3 === search || value.id_artist4 === search).map((song, songIndex) => {
                songList.push(song)
            })

            songList = songList.slice(0,limit)

            function getMultipleRandom(arr, num) {
                const shuffled = [...arr].sort(() => 0.5 - Math.random());
              
                return shuffled.slice(0, num);
            }

            songList = getMultipleRandom(songList, 4);
            //[0, 1, 2, 3]

            let guessTrack = songList[0]
            let guessTrackL = guessTrack.lyrics
            let guessTrackName = guessTrack.name
            let guessCover = guessTrack.cover
            let guessURL = guessTrack.yt_url
            let guessTrackLyrics = []
            guessTrackL.split('\n').map((line, lineIndex) => {
                guessTrackLyrics.push(line)
            })
            let random = Math.floor(Math.random() * (guessTrackLyrics.length - 2))
            while (guessTrackLyrics[random] === "" || guessTrackLyrics[random+1] === "" || guessTrackLyrics[random].includes(guessTrackName) === true || guessTrackLyrics[random+1].includes(guessTrackName === true)) {
                random -= 1
                if (random < 0) {
                    random = guessTrackLyrics.length - 2
                }
            }

            songList = songList.sort(() => Math.random() - 0.5)

            let datapass = {
                guessname: guessTrackName,
                guesslyrics1: guessTrackLyrics[random],
                guesslyrics2: guessTrackLyrics[random+1],
                guessCover: guessCover,
                guessUrl: guessURL,
                name1: songList[0].name,
                name2: songList[1].name,
                name3: songList[2].name,
                name4: songList[3].name
            }

            return(
                <>
                    <div className="artist-background" style={cover_url}>
                    </div>
                    <div className="artist-background-shadow">
                    </div>
                    <div className="guesser">
                        <div className="guesser-box">
                            <Guesser data={datapass} roll={rollSong} rollCorrect={rollCorrectSong} correct={correct} wrong={wrongAnswers}/>
                            <div className="guesser-box-correct">
                                <div className="guesser-box-correct-content">
                                    <p>Gratulacje, udało ci się przejść poziom{message}: {moduleName}</p>
                                    <Link to={`/artist/${search}`}><p>Powrót</p></Link>
                                </div>
                            </div>
                        </div>
                        <div className="guesser-box-wrong">
                            <div className="guesser-box-wrong-content">
                                <p>Niestety, nie udało Ci się odgadnać utworów. Pomyślnie odgadnięto: {correct/10}</p>
                                <Link to={`/artist/${search}`}><p>Powrót</p></Link>
                            </div>
                        </div>
                    </div>
                </>
            )
        } else {
            data[2].filter(value => value.album_id === search).map((album, albumIndex) => {
                moduleName = album.name
                backgroundUrl = album.cover
                cover_url = {
                    backgroundImage: `url(${backgroundUrl})`
                };
            })

            data[0].filter(value => value.id_album === search).map((song, songIndex) => {
                songList.push(song)
            })

            function getMultipleRandom(arr, num) {
                const shuffled = [...arr].sort(() => 0.5 - Math.random());
              
                return shuffled.slice(0, num);
            }

            songList = getMultipleRandom(songList, 4);
            //[0, 1, 2, 3]

            let guessTrack = songList[0]
            let guessTrackL = guessTrack.lyrics
            let guessTrackName = guessTrack.name
            let guessCover = guessTrack.cover
            let guessURL = guessTrack.yt_url
            let guessTrackLyrics = []
            guessTrackL.split('\n').map((line, lineIndex) => {
                guessTrackLyrics.push(line)
            })
            let random = Math.floor(Math.random() * (guessTrackLyrics.length - 2))
            while (guessTrackLyrics[random] === "" || guessTrackLyrics[random+1] === "") {
                random -= 1
                if (random < 0) {
                    random = guessTrackLyrics.length - 2
                }
            }

            songList = songList.sort(() => Math.random() - 0.5)

            let datapass = {
                guessname: guessTrackName,
                guesslyrics1: guessTrackLyrics[random],
                guesslyrics2: guessTrackLyrics[random+1],
                guessCover: guessCover,
                guessUrl: guessURL,
                name1: songList[0].name,
                name2: songList[1].name,
                name3: songList[2].name,
                name4: songList[3].name
            }

            return(
                <>
                    <div className="artist-background" style={cover_url}>
                    </div>
                    <div className="artist-background-shadow">
                    </div>
                    <div className="guesser">
                        <div className="guesser-box">
                            <Guesser data={datapass} roll={rollSong} rollCorrect={rollCorrectSong} correct={correct} wrong={wrongAnswers}/>
                            <div className="guesser-box-correct">
                                <div className="guesser-box-correct-content">
                                    <p>Gratulacje, udało ci się przejść poziom: {moduleName}</p>
                                    <Link to={`/album/${search}`}><p>Powrót</p></Link>
                                </div>
                            </div>
                        </div>
                        <div className="guesser-box-wrong">
                            <div className="guesser-box-wrong-content">
                                <p>Niestety, nie udało Ci się odgadnać utworów. Pomyślnie odgadnięto: {correct/10}</p>
                                <Link to={`/album/${search}`}><p>Powrót</p></Link>
                            </div>
                        </div>
                    </div>
                </>
            )
        }
    }
}

export default Guess;