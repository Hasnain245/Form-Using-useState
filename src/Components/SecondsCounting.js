import React from 'react'
import { useState, useEffect } from 'react'

function SecondsCounting() {

    const [seconds, setSeconds] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
            setSeconds(seconds + 1);
        }, 1000);

        return () => {
            clearInterval(interval);
        };
    }, [seconds]);



    return (
        <p>
            Time Escaped: {seconds} Seconds
        </p>
    )
}

export default SecondsCounting
