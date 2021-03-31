import { weatherInfo } from './js/app'


//console.log(checkForName);

//alert("I EXIST")
//console.log("CHANGE!!");


import './styles/style.scss'

import img from '.media/01d.svg'

window.addEventListener('DOMContentLoaded',function(){
    document.getElementById('icon').setAttribute('src', img)
  })

export {
    weatherInfo
   }