import React from 'react';

const Result = props => {
    const{value,
    city,
    date,
    sunrise,
    sunset,
    temperature,
    wind,
    pressure,
    formError}=props.weatherObject
    return(
        <div>
           <React.Fragment>
               <div>{city}</div>
               <div>{date}</div>
               <div>{sunset}</div>
               <div>{sunrise}</div>
               <div>{temperature}</div>
               <div>{wind}</div>
               <div>{pressure}</div>
               <div>{formError}</div>
           </React.Fragment>
        </div>
    )
}

export default Result