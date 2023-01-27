const API_KEY = `f7dd07a575d64994bcb174511232701`
const form = document.querySelector("form")
const search = document.querySelector("#search")
const weather = document.querySelector("#weather")


const getWeather = async(city) => {
    const url = `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}&aqi=no`;
    const response = await fetch(url);
    const data = await response.json()
    console.log(data)
    return showWeather(data)
}

const showWeather = (data) =>{
    weather.innerHTML = `
        <div>
            <img src="" alt="">
        </div>
        <div>
            <p class="m-0" style="font-width:bold; font-size:2rem;">${data.location.name}</p>
            <p class="m-0" style="font-width:bold; font-size:4rem;"> ${data.current.temp_c}<sup>°C</sup></p>
        </div>
    `
}

form.addEventListener(
    "submit",
    function(event) {
        getWeather(search.value)
        event.preventDefault();
    }
)