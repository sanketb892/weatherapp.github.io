const apiKey = "f8f9bb7318d36b1372db93636f51c03c";
const apiUrl ="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    var data = await response.json();

    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round (data.main.temp) + "°c";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

    if(data.weather[0].main =="Clouds"){
        weatherIcon.src = "images/clouds.png"
    }
    else if(data.weather[0].main == "Clear"){
        weatherIcon.src = "image/clear.png"
    }
    else if(data.weather[0].mian == "Rain"){
        weatherIcon.src = "iamge/rain.png"
    }
    else if(data.weather[0].main == "Drizzle"){
        weatherIcon.src = "image/drizzle.png"
    }
    else if(data.weather[0].main == "Mist"){
        weatherIcon.src = "image/mist.png"
    }

}
searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value);
})

