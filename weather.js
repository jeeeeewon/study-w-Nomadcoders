const API_KEY = 'ca69e8633b8e2410841fca0731658efa';
//https://openweathermap.org에서 내 API KEY가져옴.

function onGeoOk(position){
    let lat = position.coords.latitude; //위도
    let lon = position.coords.longitude; //경도
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    // console.log(position) 해보면 coords에 위도,경도 좌표가 찍혀있는 게 보임.
    //https://openweathermap.org/에서 current weather API 불러옴. 화씨로 나오기때문에 &units=metric 해줌(섭씨로)
    fetch(url)
    .then(response => response.json())
    .then(data => {
        const city = document.querySelector('#weather span:first-child');
        const weather = document.querySelector('#weather span:last-child');
            city.innerText = `@${data.name}`
            weather.innerText = `${data.weather[0].main} / ${data.main.temp}℃`
    }); 
    //fetch해서 url해주면 js가 url을 불러옴. 네트워크에서 확인 가능.
}

function onGeoError(){
    alert("Can't find you. No weather for you.");
}
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);