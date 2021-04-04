/* Global Variables */
const geonamesKey = 'ler2021';
const pixabayKey = '21000408-62861fbb824850d2b9a62abbd'

// function to execute when 'generate' is clicked
document.getElementById('generate').addEventListener('click', cityInfo);

// Callback function to perform action
function cityInfo() {
    const city = document.getElementById('cityName').value;
    retrieveCityData(city)
        .then((data) => {
            console.log('data', data);
            // call the postData function with information to post to the url
            postData('/addData', {cityname: data.geonames[0].name,
                                  country: data.geonames[0].countryName
            })
            .then(() => {
                pixabayImages(city)
                .then((data) => {
                    console.log('pixabay data', data)
                    postData('/addData', {
                        image: data.hits[0].webformatURL
                    })
                })
                .then((data) => {
                    updateUI()
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
    const res = await fetch(pixabayURL);
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
    const request = await fetch('/all');

    try{
        const allData = await request.json();
        console.log("alldata", allData);
        document.getElementById('date').innerHTML = `Date: ${allData.date}`;
        document.getElementById('temp').innerHTML = `Current Temperature: ${allData.temperature}`;
        document.getElementById('country').innerHTML = `Country: ${allData[0].country}`;
        document.getElementById('theCity').innerHTML = `City name: ${allData[0].cityname}`;
        document.getElementById('image').innerHTML = `<img src="assets/icons/${allData[allData.length - 1].image}>`;
    } catch(error) {
        console.log("error", error);
    }
};

export { cityInfo }

