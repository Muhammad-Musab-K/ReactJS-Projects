import React, { useEffect, useState } from 'react';
import fetchApi from './Components/ApiFetch';

function App() {
  const [place, setPlace] = useState("");
  const [data, setData] = useState(null);


  async function fetchData() {
    try {
      if (place !== "") {
        const weatherData = await fetchApi(place);
        setData(weatherData);
        setPlace("")
      }
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  }

  return (
    <>

      <div className='flex flex-col gap-4 justify-center items-center h-screen w-full bg-cover bg-no-repeat' style={{ backgroundImage: 'url("https://img.freepik.com/free-vector/background-monsoon-season_52683-115106.jpg?w=900&t=st=1708364178~exp=1708364778~hmac=b11a049904333f63e3f1d4e8d3a72432055ec4c414fb5ad185b2d6614181fd7c")' }}>
        <div><input
          type="text"
          className='p-3 rounded-lg'
          value={place}
          onChange={(e) => setPlace(e.target.value)}
        />
          <button
            className='p-3 rounded-lg bg-purple-300 text-purple-800'
            onClick={fetchData}
          >Search</button>
        </div>
        <div className='p-10 flex flex-col  gap-3 w-full  md:w-[600px] md:h-[500px] backdrop-blur-lg shadow-purple-400 shadow-md rounded-lg'>
          <h1 className=' text-4xl font-semibold text-purple-300'>{data?.name}</h1>

          <div className='flex items-center justify-between'><h1 className=' text-7xl font-semibold text-purple-300'>{data?.main?.temp} C</h1><img className='w-40' src={data?.weather && `http://openweathermap.org/img/wn/${data?.weather[0]?.icon}.png`} alt="" /></div>

          <hr className='w-4/5 h-1 bg-purple-300' />

          <div className='flex gap-4 flex-wrap text-purple-300 text-sm md:text-lg '>
            {data?.main? <><p>humidity :{data?.main?.humidity} | </p>
            <p>Temp Max :{data?.main?.temp_max} | </p>
            <p>Temp Min :{data?.main?.temp_min} | </p>
            <p>sunset :{data?.sys?.sunset} | </p>
            <p>sunset :{data?.sys?.sunset} |  </p>
            <p>sunrise :{data?.sys?.sunrise} | </p></>  : "NO PLACE"}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
