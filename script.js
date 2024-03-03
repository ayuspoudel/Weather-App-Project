const apiKey= "8c46565229c7288ee534816d5fd48a39";
const apiUrl= "https://api.openweathermap.org/data/2.5/weather?&units=metric"
const searchbox = document.querySelector(".search input");
const searchbtn = document.querySelector(".search button")

async function checkWeather(city){
    const response = await fetch(apiUrl +city+ `&appid=${apiKey}`);
    var data = await response.json();
    console.log(data);
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = data.main.temp + "°C";
    document.querySelector(".wind").innerHTML = data.wind.speed +"km/hr";
    document.querySelector(".humidity").innerHTML = data.main.humidity;
}

searchbtn.addEventListener("click", ()=>{
    checkWeather(searchbox.value);
})

checkWeather();

