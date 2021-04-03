import { weatherInfo } from './js/app'


//console.log(checkForName);

//alert("I EXIST")
//console.log("CHANGE!!");


import './styles/style.scss'

//import Img from "./media/openweathermap/04n.svg"

// Loading weather icons
function importAll(r) {
  return r.keys().map(r);
}
importAll(require.context("./media/openweathermap", false, /\.(svg)$/));


//window.addEventListener('DOMContentLoaded',function(){
  //  document.getElementById('icon').setAttribute('src', "icons/${allData.icon}.svg")
  //})

export {weatherInfo}