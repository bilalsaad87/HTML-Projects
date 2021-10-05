// https://developer.accuweather.com/apis ACCUWeather

const key = "xOnfQwaHXmMfpiLZQn07h3zfeDGbk8Vq";

const searchForm = document.getElementById('search-form')
const locationEl = document.querySelector('.loc')
const timeEl = document.querySelector('.time')
const tempEl = document.querySelector('.temp')
const feelEl = document.querySelector('.feel')
const imgEl = document.querySelector('.weather-image')
const hiLow = document.querySelector('.hiLow')
const uvIndex = document.querySelector('.uvIndex')
const sunrise = document.querySelector('.sunrise')
const sunset = document.querySelector('.sunset')
const wind = document.querySelector('.wind')
const aqi = document.querySelector('.aqi')

// getting weather

const getWeather = async (id) => {
  const baseUrl = "http://dataservice.accuweather.com/currentconditions/v1/";
  const query = `${id}?apikey=${key}`;

  const res = await fetch(baseUrl + query);
  const data = await res.json();

  return data[0];
};

// getting city
const getCity = async (city) => {
  const baseUrl ="http://dataservice.accuweather.com/locations/v1/cities/search";
  const query = `?apikey=${key}&q=${city}`;

  const res = await fetch(baseUrl + query);
  const data = await res.json();

  return data[0];
};

// update City
const updateCity = async (city) => {
    const cityDetails = await getCity(city);
    const cityWeather = await getWeather(cityDetails.Key);

    return {
        cityDetails: cityDetails,
        cityWeather: cityWeather,
    }
}

//update UI
const updateUI = (data) => {
    const cityDets = data.cityDetails;
    const weather = data.cityWeather;
    
    locationEl.innerHTML = `<i class="fas fa-map-marker"></i> ${cityDets.Country.ID}, ${cityDets.EnglishName}`

    var currentdate = new Date(); 
    var datetime = currentdate.getDate() + "/"
                    + (currentdate.getMonth()+1)  + "/" 
                    + currentdate.getFullYear() + " @ "  
                    + currentdate.getHours() + ":"  
                    + currentdate.getMinutes();
    timeEl.innerHTML = datetime

    imgEl.style.backgroundImage = `url("https://developer.accuweather.com/sites/default/files/${(weather.WeatherIcon < 10)?'0'+weather.WeatherIcon:weather.WeatherIcon}-s.png")`

    tempEl.innerHTML = `${Math.round(weather.Temperature.Metric.Value)}<sup>o</sup>`

    feelEl.innerHTML = `${weather.WeatherText}`

    getDay(cityDets.Key)
};

// getting 1 Day forcast
const getDay = async (id) => {
  const baseUrl = "http://dataservice.accuweather.com/forecasts/v1/daily/1day/";
  const query = `${id}?apikey=${key}&details=true&metric=true&language=en-us`;

  const res = await fetch(baseUrl + query);
  const data = await res.json();

  // update UI
  hiLow.innerHTML = `${Math.round(data.DailyForecasts[0].Temperature.Maximum.Value)}<sup>o</sup> 
  / ${Math.round(data.DailyForecasts[0].Temperature.Minimum.Value)}<sup>o</sup>`
  sunrise.innerHTML = `${data.DailyForecasts[0].Sun.Rise.substring(11, 16)}`
  sunset.innerHTML = `${data.DailyForecasts[0].Sun.Set.substring(11, 16)}`
  wind.innerHTML = `${data.DailyForecasts[0].Day.Wind.Speed.Value} km/h`
  aqi.innerHTML = `${data.DailyForecasts[0].AirAndPollen[0].Category}`
  uvIndex.innerHTML = `${data.DailyForecasts[0].AirAndPollen[5].Category}`
};

searchForm.addEventListener('submit', (e) => {
    e.preventDefault()

    //getting city value
    const city = searchForm.search.value.trim()
    searchForm.reset();

    //updating UI
    updateCity(city)
    .then((data) => {
        updateUI(data);
    })
    .catch((err) => console.log(err)); 
})
