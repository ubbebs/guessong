import React, { useState } from "react";
import { Link } from "react-router-dom";

import './guesser.css';

const Guesser = ({data, roll, rollCorrect, correct, wrong}) => {
    const [wrongAnswer, setWrongAnswer] = useState(0)

    const cover_url = {
        backgroundImage: `url(${data.guessCover})`
    };

    function wrongAnswers() {
        wrong(1)
        setWrongAnswer(0)
        document.querySelectorAll(".guesser-buttons-box-button").forEach((elem) => {
            elem.setAttribute(
                'style',
                'background-color: none; color: #fff; border: 1px solid #fff; transition: 0s'
            )
        })
    }

    const confirmChange = e => {
        if (e.target.value === data.guessname) {
            console.log(e.target.value)
            e.target.setAttribute(
                'style',
                'background-color: #0a0; transition: 1s'
            )

            function correctBox() {
                document.querySelector(".guesser-box-answer-correct").setAttribute(
                    'style',
                    'display: flex;'
                )
                document.querySelector(".guesser-box-answer-quote").setAttribute(
                    'style',
                    'opacity: 0;'
                )
            }

            function correctFunc() {
                document.querySelector(".guesser-box-answer-correct").setAttribute(
                    'style',
                    'opacity: 1; display: flex;'
                )
                document.querySelector(".guesser-box-progress-bar").setAttribute(
                    'style',
                    `width: ${correct + 10}%;`
                )
            }
            setTimeout(correctBox, 0)
            setTimeout(correctFunc, 1000)
        } else {
            function falsechange() {
                e.target.setAttribute(
                    'style',
                    'color: #f00; border: 1px solid #444'
                )
                if (wrongAnswer > 2) wrongAnswers()
            }
            console.log("błąd")
            setWrongAnswer(prevwronganswer => prevwronganswer + 1)
            setTimeout(falsechange, 0)
        }
    }

    const uStateRoll = () => {
        rollCorrect(1)
        document.querySelector(".guesser-box-answer-correct").setAttribute(
            'style',
            'display: none;'
        )
        document.querySelector(".guesser-box-answer-quote").setAttribute(
            'style',
            'opacity: 1;'
        )
        if (correct === 90) {
            document.querySelector(".guesser-box-correct").setAttribute(
                'style',
                'display: flex;'
            )
        }
        document.querySelectorAll(".guesser-buttons-box-button").forEach((elem) => {
            elem.setAttribute(
                'style',
                'background-color: none; color: #fff; border: 1px solid #fff; transition: 0s'
            )
        })
    }

    return(
        <>
            <div className="guesser-box-progress d-flex">
                <div className="guesser-box-progress-bar"></div>
            </div>
            <div class="guesser-box-answer d-flex jc-center ai-center">
                <div className="guesser-box-answer-background"></div>
                <div className="guesser-box-answer-quote d-flex jc-center ai-center">
                    <p>{data.guesslyrics1}</p>
                    <p>{data.guesslyrics2}</p>
                </div>
                <div className="guesser-box-answer-correct jc-center ai-center">
                    <div className="guesser-box-answer-correct-cover" style={cover_url}></div>
                    <div className="guesser-box-answer-correct-info">
                        <p className="title">{data.guessname}</p>
                        <Link to={{ pathname: data.guessUrl }} target="_blank"><p className="d-flex ai-center"><img src="https://iconarchive.com/download/i98467/dakirby309/simply-styled/YouTube.ico" alt="YouTube icon"/>Odsłuchaj na YouTube</p></Link>
                        <p className="next" onClick={uStateRoll}>Następny utwór &gt;</p>
                    </div>
                </div>
            </div>
            <div className="guesser-buttons-box">
                <button className="guesser-buttons-box-button" type="submit" onClick={confirmChange} value={data.name1}>{data.name1}</button>
                <button className="guesser-buttons-box-button" type="submit" onClick={confirmChange} value={data.name2}>{data.name2}</button>
                <button className="guesser-buttons-box-button" type="submit" onClick={confirmChange} value={data.name3}>{data.name3}</button>
                <button className="guesser-buttons-box-button" type="submit" onClick={confirmChange} value={data.name4}>{data.name4}</button>
            </div>
        </>
    )
}

export default Guesser;