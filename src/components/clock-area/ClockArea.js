import React, { useEffect } from 'react';
import { Transition } from 'react-transition-group';
import { useState } from 'react';
import './clock-area.css';
export const ClockArea = () => {

    const [initialBackgroundValues, setInitialBackgroundValues] = useState([0, 1, 2]);
    let initialBackground = `conic-gradient(white ${initialBackgroundValues[0]}deg,
                                            black ${initialBackgroundValues[1]}deg, 
                                            black ${initialBackgroundValues[1]}deg, 
                                            white ${initialBackgroundValues[2]}deg)`;
    const [background, setBackground] = useState(initialBackground);

    useEffect(() => {
        const interval = setInterval(() => {
            setInitialBackgroundValues(prev => {
                if(prev[0] === 360 - 6) {
                    return [0, 1, 2]
                }
                return prev.map(el => el + 6);
            });
        }, 1000);
    }, []);
    
    useEffect(() => {
            setBackground(initialBackground);
    }, [initialBackgroundValues]);

    return(<>
    <Transition in={true} timeout={1000}>
        <div className='clock-area' 
                        style={{background: `${background}`}} 
                        key={Math.random()}>
        </div>
    </Transition>
        <div className='colck-number-area'>
            <div className='minutes'>
                <div id='firstMinute'>
                    <div id='firstMinutePartOne'>7</div>
                    <div id='firstMinutePartTwo'>7</div>
                </div>
                <div id='secondMinute'>
                    <div id='secondMinutePartOne'>8</div>
                    <div id='secondMinutePartTwo'>8</div>
                </div>
            </div>
            <div className='seconds'>
                <div id='firstSecond'>
                    <div id='firstSecondPartOne'>3</div>
                    <div id='firstSecondPartTwo'>3</div>
                </div>
                <div id='secondSecond'>
                    <div id='secondSecondPartOne'>5</div>
                    <div id='secondSecondPartTwo'>5</div>
                </div>
            </div>
        </div>
    </>);
}