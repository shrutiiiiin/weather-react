import React from 'react'

export default function Summary({day,date,location,icon,temperature,type}) {

  return (
    <div className='weather__summary__section'>
          <div>
            <p className='weather__day'>{day}</p>
            <p className='weather_date'>{date}</p>
            <div className='weather__location'>
              <img src="/location-marker.svg" alt="marker icon" />
              <p>{location}</p>
            </div>
          </div>

        <div>
          <img 
          className='weather__icon' src={`https://openweathermap.org/img/w/${icon}.png`} alt="" />
          <p className='weather__temp'>{temperature}</p>
          <p className='weather__type'>{type}</p>
        </div>
    </div>
  )
}
