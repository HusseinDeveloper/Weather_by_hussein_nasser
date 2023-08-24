let inputType = document.getElementById('inputType')

async function getApi(city){
      
      let response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=7d77b96c972b4d119a3151101212704&q=${city}&days=7`)
      let finalResponse = await response.json();
            
            display1(finalResponse.location , finalResponse.current);
            display2(finalResponse.forecast.forecastday[1])
            display3(finalResponse.forecast.forecastday[2])

}

inputType.addEventListener('keyup',()=>{
            let city = inputType.value;
            getApi(city)
})
getApi('cairo');

// 
function display1 (location , current){
      // let data = new Date(current.last_updataed.replace(' ' , "T"))
            
            document.getElementById('location').innerHTML = location.name;
            document.getElementById('tempc').innerHTML = `${current.temp_c}<sup>o</sup>C`;
            document.getElementById('logo').innerHTML = `<img class="w-100" src="https:${current.condition.icon}" alt="">`;
            document.getElementById('text').innerHTML = current.condition.text;
      
}
function display2(forecast){
      
      document.getElementById('icons2').innerHTML=`<img class="w-25" src="https:${forecast.day.condition.icon}" alt="">`
       document.getElementById('degree2').innerHTML=`${forecast.day.maxtemp_c}<sup>o</sup>`
       document.getElementById('small').innerHTML=`${forecast.day.mintemp_c}<sup>o</sup>C`
       document.getElementById('text2').innerHTML = forecast.day.condition.text;
}
function display3(forecast){
      
      document.getElementById('icons3').innerHTML=`<img class="w-25" src="https:${forecast.day.condition.icon}" alt="">`
       document.getElementById('degreeText').innerHTML=`${forecast.day.maxtemp_c}<sup>o</sup>`
       document.getElementById('small2').innerHTML=`${forecast.day.mintemp_c}<sup>o</sup>C`
       document.getElementById('text3').innerHTML = forecast.day.condition.text;
}

