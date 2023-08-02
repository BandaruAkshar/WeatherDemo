let button = document.querySelector('.button')
let inputval = document.querySelector('.inputVal')
let nameVal = document.querySelector('.name');
let temp = document.querySelector('.temp');
let feelsLike = document.querySelector('.feelsLike');
let wind = document.querySelector('.windspeed');
let heading = document.querySelector('.windheading');
let humidity = document.querySelector('.humidity');
let desc = document.querySelector('.description');
let x = 0;

button.addEventListener('click', function(){
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inputval.value}&units=metric&appid=3ac840f58d218e955a184a6e50202780`)
    .then(response => response.json())
    .then(displayData)
    .catch(err => alert('Enter a valid city name.'));

})

const displayData=(weather)=>{
    temp.innerText = `Temperature: ${weather.main.temp}°C`
    feelsLike.innerText = `Feels Like: ${weather.main.feels_like}°C`
    wind.innerText = `Wind Speed: ${weather.wind.speed} m/s`
    heading.innerText = `Heading: ${headingConvert(weather)}`
    humidity.innerText = `Humidity: ${weather.main.humidity}%`
    desc.innerText = `Forecast: ${weather.weather[0].description}`
}

function headingConvert(weather){
    x = weather.wind.deg;
    if(x==0 || x==360){
        return `North`
    }
    else if(x>0 && x<90){
        return `North-East`
    }
    else if(x==90){
        return `East`
    }
    else if(x>90 && x<180){
        return `South-East`
    }
    else if(x==180){
        return `South`
    }
    else if(x>180 && x<270){
        return `South-West`
    }
    else if(x==270){
        return `West`
    }
    else if(x>270 && x<360){
        return `North-West`
    }
}