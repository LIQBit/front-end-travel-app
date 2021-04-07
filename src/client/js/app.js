/* Global Variables */
const geonamesKey = 'ler2021';
const pixabayKey = '21000408-62861fbb824850d2b9a62abbd';
const weatherbitKey = '152d8e678c9d4bbb8cd2a0e9dcc1e6ca';

// function to execute when 'generate' is clicked
document.getElementById('generate').addEventListener('click', cityInfo);

// Callback function to perform action
function cityInfo() {
    const city = document.getElementById('cityName').value;
    retrieveCityData(city)
        .then((data) => {
            console.log('data', data);
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
                            console.log('getweather data', data.data[0].weather.description)
                            postData('http://localhost:8001/weatherbit', {
                                high: data.data[0].app_max_temp,
                                low: data.data[0].app_min_temp,
                                condition: data.data[0].weather.description
                            })
                            .then((data) => {
                                updateUI();
                            });
                        })
                    })
                })
            })
        })      
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
        console.log("alldata is...", allData);
        document.getElementById('min').innerHTML = `Today's min temp: ${allData[allData.length - 1].low}`;
        document.getElementById('temp').innerHTML = `Today's max temp: ${allData[allData.length - 1].high}`;
        document.getElementById('condition').innerHTML = `Current condition: ${allData[allData.length - 1].condition}`;
        document.getElementById('country').innerHTML = `Country: ${allData[allData.length - 3].country}`;
        document.getElementById('theCity').innerHTML = `City name: ${allData[allData.length - 3].cityname}`;
        document.getElementById('icon').innerHTML = `<img src="${allData[allData.length - 2].image}"/>`;
    } catch(error) {
        console.log("error", error);
    }
};

export { cityInfo }

