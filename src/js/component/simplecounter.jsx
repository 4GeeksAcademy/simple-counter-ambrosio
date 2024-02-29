import React, { useState, useEffect } from "react";

const SimpleCounter = () => {
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setSeconds(prevSeconds => prevSeconds + 1);
        }, 1000);

        return () => clearInterval(intervalId);
    }, []); // Empty dependency array ensures effect runs only once on mount

    // Transform seconds into separate digits
    const digitFive = Math.floor((seconds % 100000) / 10000);
    const digitFour = Math.floor((seconds % 10000) / 1000);
    const digitThree = Math.floor((seconds % 1000) / 100);
    const digitTwo = Math.floor((seconds % 100) / 10);
    const digitOne = seconds % 10;

    return (
        <>
            <div className="divGrande text-light bg-black p-3 container row m-auto mt-5 grid gap-3 display-1">
                <div className="digitos bg-dark clock  col container"><i className="fa-solid fa-clock"></i></div>
                <div className="digitos bg-dark five  col container">{digitFive}</div>
                <div className="digitos bg-dark four  col container">{digitFour}</div>
                <div className="digitos bg-dark three  col container">{digitThree}</div>
                <div className="digitos bg-dark two  col container">{digitTwo}</div>
                <div className="digitos bg-dark one  col container">{digitOne}</div>
            </div>
        </>
    );
};

export default SimpleCounter;