
const fetchApi = async (place) => {
  try {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${place}&units=metric&appid=d9e61d0ddcbc4c2b9e8c12540de8157e`);
    const weathedData = await response.json()
    console.log(weathedData)
    return weathedData;
  } catch (error) {
    console.log(error.message)
  }
};

export default fetchApi;