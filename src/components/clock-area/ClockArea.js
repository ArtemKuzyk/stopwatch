import React, { useEffect } from 'react';
import { useState } from 'react';
import './clock-area.css';

export const ClockArea = () => {

    const [initialBackgroundValues, setInitialBackgroundValues] = useState([0, 1, 2]);
    //let initialBackgroundValues = [0, 1, 2];
    let initialBackground = `conic-gradient(white ${initialBackgroundValues[0]}deg,
                                            black ${initialBackgroundValues[1]}deg, 
                                            black ${initialBackgroundValues[1]}deg, 
                                            white ${initialBackgroundValues[2]}deg)`;
    const [background, setBackground] = useState(initialBackground);
    const [seconds, setSeconds] = useState(0);
    const [minutes, setMinutes] = useState(0);

    useEffect(() => {
        const secondInterval = setInterval(() => {
            setInitialBackgroundValues(prev => {
                if(prev[0] === 360 - 6) {
                    return [0, 1, 2]
                }
                return prev.map(el => el + 6);
            });
            
            setSeconds(prev => {
                if(prev === 59) return 0;
                return prev + 1;
            });
        }, 1000);

        const minuteInterval = setInterval(() => {
            setMinutes(prev => {
                if (prev === 59) return 0;
                return prev + 1;
            })
        }, 60 * 1000)

    }, []);


    
    useEffect(() => {
            setBackground(initialBackground);

    }, [initialBackgroundValues]);

    return(<>
        <div className='clock-area' 
                        style={{background: `${background}`}} 
                        key={Math.random()}>
        </div>
        <div className='colck-number-area'>
            <div className='minutes'>
                <div id='firstMinute'>
                    <div id='firstMinutePartOne'>{minutes.toString().length > 1 ? minutes.toString()[0] : 0}</div>
                    <div id='firstMinutePartTwo'>{minutes.toString().length > 1 ? minutes.toString()[0] : 0}</div>
                </div>
                <div id='secondMinute'>
                    <div id='secondMinutePartOne'>{minutes.toString().length > 1 ? minutes.toString()[1] : minutes  }</div>
                    <div id='secondMinutePartTwo'>{minutes.toString().length > 1 ? minutes.toString()[1] : minutes}</div>
                </div>
            </div>
            <div className='seconds'>
                <div id='firstSecond'>
                    <div id='firstSecondPartOne'>{seconds.toString().length > 1 ? seconds.toString()[0] : 0}</div>
                    <div id='firstSecondPartTwo'>{seconds.toString().length > 1 ? seconds.toString()[0] : 0}</div>
                </div>
                <div id='secondSecond'>
                    <div id='secondSecondPartOne'>{seconds.toString().length > 1 ? seconds.toString()[1] : seconds}</div>
                    <div id='secondSecondPartTwo'>{seconds.toString().length > 1 ? seconds.toString()[1] : seconds}</div>
                </div>
            </div>
        </div>
    </>);
}