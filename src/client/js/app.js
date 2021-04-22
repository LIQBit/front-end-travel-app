/* Global Variables */
const geonamesKey = 'ler2021';
const pixabayKey = '21000408-62861fbb824850d2b9a62abbd';
const weatherbitKey = '152d8e678c9d4bbb8cd2a0e9dcc1e6ca';

// add Event Listener
const goButton = document.getElementById('generate');

if (goButton != null) {
    goButton.addEventListener('click', cityInfo)
}

// Callback function to perform action

function cityInfo() {

    const city = document.getElementById('cityName').value;
    const arrivalDate = document.getElementById('input-date').value;
    console.log('is arrival date a number?', isNaN(arrivalDate))
    //Countdown & date of trip
    let d = new Date();
    let daysLeft = Math.floor(
        (new Date(arrivalDate).getTime() - d.getTime()) / (1000*3600*24)
    );
    
    try{
        
        if (daysLeft > 16) {
            document.getElementById('condition').innerHTML = `Sorry, that's too far ahead for any info.`; 
        }
        if (isNaN(arrivalDate) == false){
            document.getElementById('condition').innerHTML = `You didn't enter a date!`;
        }
         else if (city === '') {
            document.getElementById('condition').innerHTML = `Please enter a city!`; 
        } else {
            retrieveCityData(city)
            .then((data) => {
                console.log('data', data);
                let country = data.geonames[0].countryCode;
                // call the postData function with information to post to the url
                postData('http://localhost:8001/addData', {
                    cityname: data.geonames[0].name,
                    country: data.geonames[0].countryName
                })
                .then(() => {
                    pixabayImages(city)
                    .then((data) => {
                        console.log('pixabay data', data)
                        postData('http://localhost:8001/pixabay', {
                            image: data.hits[0].webformatURL
                        })
                        .then(() => {
                            getWeather(city)
                            .then((data) => {
                                document.getElementById('days-until').innerHTML = `Your trip is in ${daysLeft + 1} days`;
                                console.log('data', data)
                                console.log('getweather arrival data', daysLeft)
                                postData('http://localhost:8001/weatherbit', {
                                    high: data.data[0].app_max_temp,
                                    low: data.data[0].app_min_temp,
                                    condition: data.data[0].weather.description,
                                    arrival: data.data[1 + daysLeft].weather.description,
                                    icon: data.data[0].weather.icon,
                                    arrivalHigh: data.data[1 + daysLeft].max_temp,
                                    arrivalLow: data.data[1 + daysLeft].min_temp
                                })
                                .then(() => {
                                    restCountries(country)
                                    .then((data) => {
                                        console.log('restcountries data', data.languages[0].name)
                                        postData('http://localhost:8001/restcountries', {
                                            country: data.name,
                                            capital: data.capital,
                                            language: data.languages[0].name,
                                            currency: data.currencies[0].name,
                                            flag: data.flag
                                        })
                                        .then((data) => {
                                            updateUI();
                                        });
                                    })
                                })
                                
                            })
                        })
                    })
                })
            }) 
                 
        };

    } catch (error) {
        console.log('error', error)
    }
  
};
    

// GET function for city name data from geonames API

const retrieveCityData = async (city) => {
    const geonamesURL = `http://api.geonames.org/searchJSON?q=${city}&maxRows=1&username=${geonamesKey}`;
    const res = await fetch(geonamesURL);
    try {
        const data = await res.json();
        return data;
    }catch(error) {
        console.log("error", error);
    }

};

// GET function for pixabay API

const pixabayImages = async (city) => {
    const pixabayURL = `https://pixabay.com/api/?key=${pixabayKey}&q=${city}&image_type=photo`;
    console.log('check url', pixabayURL)
    const res = await fetch(pixabayURL);
    try {
        const data = await res.json();
        return data;
    }catch(error) {
        console.log("error", error);
    }

};

// GET function for pixabay API

const getWeather = async (city) => {
    const getWeatherURL = `https://api.weatherbit.io/v2.0/forecast/daily?city=${city}&key=${weatherbitKey}`;
    console.log('check url', getWeatherURL)
    const res = await fetch(getWeatherURL);
    try {
        const data = await res.json();
        return data;
    }catch(error) {
        console.log("error", error);
    }

};

// GET function for Rest Countries API

const restCountries = async (country) => {
    const restCountriesURL = `https://restcountries.eu/rest/v2/alpha/${country}`;
    console.log('check url', restCountriesURL)
    const res = await fetch(restCountriesURL);
    try {
        const data = await res.json();
        return data;
    }catch(error) {
        console.log("error", error);
    }

};

// POST data function

const postData = async (url = '', data = {})=>{
    
    const response = await fetch(url, {
    method: 'POST', 
    credentials: 'same-origin', 
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),      
  });

    try {
      const newData = await response.json();
      return newData;
    } catch(error) {
    console.log("error", error);
    }
};

// update UI

const updateUI = async () => {
    const request = await fetch('http://localhost:8001/all');
    try{
        const allData = await request.json();
        let icon = allData[allData.length - 2].icon;
        console.log("alldata is...", allData);
        document.getElementById('min').innerHTML = `Expected low: ${allData[allData.length - 2].arrivalLow}°C`;
        document.getElementById('temp').innerHTML = `Expected high: ${allData[allData.length - 2].arrivalHigh}°C`;
        document.getElementById('condition').innerHTML = `Weather now in ${allData[allData.length - 4].cityname}`;
        document.getElementById('arrival-condition').innerHTML = `Weather on arrival: ${allData[allData.length - 2].arrival}`;
        document.getElementById('country').innerHTML = `Country: ${allData[allData.length - 4].country}`;
        document.getElementById('theCity').innerHTML = `City name: ${allData[allData.length - 4].cityname}`;
        document.getElementById('cityImage').innerHTML = `<img src="${allData[allData.length - 3].image}" id = "city-pic"/>`;
        document.getElementById('icon').innerHTML = `<img src="assets/icons/${icon}.svg" id="weather-icon" alt="weather icon"/>`;
        document.getElementById('todays-temps').innerHTML = `High: ${allData[allData.length - 2].high}°C Low: ${allData[allData.length - 2].low}°C`;
        document.getElementById('capital').innerHTML = `Capital city: ${allData[allData.length - 1].capital}`;
        document.getElementById('language').innerHTML = `Language: ${allData[allData.length - 1].language}`;
        document.getElementById('currency').innerHTML = `Currency: ${allData[allData.length - 1].currency}`;
        document.getElementById('flag').innerHTML = `<img src ="${allData[allData.length - 1].flag}" id ="flag-pic"/>`;
    } catch(error) {
        console.log("error", error);
    }
};

export { cityInfo }

