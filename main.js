
document.addEventListener("DOMContentLoaded", function () {
    const backgrounds = [
        "background/bg1.jpg" ,
        "background/bg2.jpg" ,
        "background/bg3.jpg" ,
        "background/bg4.jpg" ,
        "background/bg5.jpg" ,
        "background/bg6.jpg" ,
        "background/bg7.jpg" 
    ];

    function getRandomIndex(max) {
        return Math.floor(Math.random() * max);
    }

    function changeBackground() {
        const randomIndex = getRandomIndex(backgrounds.length);
        const randomImage = backgrounds[randomIndex];
        const imageUrl = `url(${randomImage})`;
        //console.log(imageUrl)

        document.body.style.backgroundImage = imageUrl;
    }
    // Change background every 5 seconds
    setInterval(changeBackground, 5000);
});

let citiesData = [
  {city: 'Tehran', temp: 12, weather: 'Sunny', humidity: 23, windSpeed: 32},
  {city: 'Shiraz', temp: 9, weather: 'Cloudy', humidity: 12, windSpeed: 14},
  {city: 'Tabriz', temp: 1, weather: 'rainy', humidity: 43, windSpeed: 12},
  {city: 'Mashhad', temp: 16, weather: 'snowy', humidity: 7, windSpeed: 24},
  {city: 'Esfahan', temp: 23, weather: 'Sunny', humidity: 15, windSpeed: 18},
]

let inputWeather = document.querySelector(".Search__input-Tag")
let SearchBtn = document.querySelector(".Search__Icon")


SearchBtn.addEventListener("click" , function(){
    let searchValue = inputWeather.value
    let mainCityDatas = citiesData.find(function(item){
        return item.city === searchValue
    });
    //console.log(mainCityDatas)
    let $ = document ;
    if(mainCityDatas){
        $.querySelector(".Weather_status").style.display = "inline"
        $.querySelector(".Load_title").style.display = "none"
        $.querySelector(".City__title").innerHTML = "Weather IN "+ mainCityDatas.city + " :)"
        $.querySelector(".Temp__status").innerHTML = mainCityDatas.temp 
        $.querySelector(".Weather__title-status").innerHTML = mainCityDatas.weather
        $.querySelector(".Humidity").innerHTML = "Humidity : " + mainCityDatas.humidity + "%"
        $.querySelector(".wind__speed").innerHTML = "Wind Speed : " + mainCityDatas.windSpeed + "Km/h"
    }else{
        alert("The desired city was not found!")
    }
})
