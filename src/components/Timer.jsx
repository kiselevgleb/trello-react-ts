import React, { useEffect } from 'react';

export default function Timer(prop) {
    let seconds = prop.seconds;
    let setSeconds = prop.setSeconds;

    useEffect(() => {
        const timer = setInterval(() => {
            setSeconds(seconds + 1);
        }, 1000);
        return () => clearInterval(timer);
    }, [seconds, setSeconds]);
    let hours = Math.floor(seconds / (60 * 60));
    let divisor_for_minutes = seconds % (60 * 60);
    let minutes = Math.floor(divisor_for_minutes / 60);
    let divisor_for_seconds = divisor_for_minutes % 60;
    let sec = Math.ceil(divisor_for_seconds);

    return (
        <div>
            <p className="text-price p text-time">{hours < 10 ? `0${hours}` : hours}:{minutes < 10 ? `0${minutes}` : minutes}:{sec < 10 ? `0${sec}` : sec}</p>
        </div>
    );
}