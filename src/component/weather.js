import React from 'react';

const Weather = ({ city, country, temp, minTemp, maxTemp, desc, weatherIcon }) => {
    return (
        <div className='container tc'>
            <div className='cards'>
                <h1 className='py-3'>{city},{country}</h1>
                <h5 className='py-4'>
                    <i class={`wi ${weatherIcon} display-1`}></i>
                </h5>

                {/* ----------------temp--------------------------- */}
                <h1 className='py-3'>{temp}&deg;c</h1>
                {minmaxTemp(`${minTemp}`, `${maxTemp}`)}
                <h4 className='py-4'>{desc}</h4>
            </div>
        </div>
    )
}

const minmaxTemp = (min, max) => {
    return (
        <h3>
            <span className='px-4'><span className="f5">min</span> {min}&deg;c</span>
            <span className='px-4'><span className="f5">max</span> {max}&deg;c</span>
        </h3>
    )
}

export default Weather;
