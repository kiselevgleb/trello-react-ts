import * as React from "react";

interface Props {
    seconds: number;
    setSeconds: Function;
}

export default function Timer({ seconds, setSeconds }: Props) {
    React.useEffect(() => {
        const timer: ReturnType<typeof setInterval> = setInterval(() => {
            setSeconds(seconds + 1);
        }, 1000);
        return (): ReturnType<typeof clearInterval> => clearInterval(timer);
    }, [seconds, setSeconds]);
    let hours: number = Math.floor(seconds / (60 * 60));
    let divisor_for_minutes: number = seconds % (60 * 60);
    let minutes: number = Math.floor(divisor_for_minutes / 60);
    let divisor_for_seconds: number = divisor_for_minutes % 60;
    let sec: number = Math.ceil(divisor_for_seconds);

    return (
        <div>
            <p className="text-price p text-time">{hours < 10 ? `0${hours}` : hours}:{minutes < 10 ? `0${minutes}` : minutes}:{sec < 10 ? `0${sec}` : sec}</p>
        </div>
    );
}