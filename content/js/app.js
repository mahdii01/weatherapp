let $ = document
let searchBox = $.querySelector('.search-box')   
let city = $.querySelector('.city') 
let date = $.querySelector('.date')
let temp = $.querySelector('.temp')
let weather = $.querySelector('.weather')
let hiLowWeather = $.querySelector('.hi-low')
let Time=new Date()
let day =Time.getDay();
let dateTime =Time.getDate();
let month=Time.getMonth();
let year=Time.getFullYear();


let apiData ={
    url:'https://api.openweathermap.org/data/2.5/weather?q=',
    key:'3c7df7e311f8aee9aedaad04124637e0',
    temp:'metric'
}

function fetchData() {
    let inputVal = searchBox.value
    fetch(`${apiData.url}${inputVal}&appid=${apiData.key}&units=${apiData.temp}`)
    .then(res=>res.json())
    .then(data=>{
        console.log(data);
        city.innerHTML = `${data.name}, ${data.sys.country}`
        weather.innerHTML = data.weather[0].main
        temp.innerHTML = `${Math.floor(data.main.temp)}<span>°c</span>`
        hiLowWeather.innerHTML = `${Math.floor(data.main.temp_min)}°c / ${Math.floor(data.main.temp_max)}°c`
        date.innerHTML = showData();
    })
    .catch(err=>console.log(err))
}
function showData() {
    
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    return `${days[day]} ${dateTime} ${months[month]} ${year}`;
}

searchBox.addEventListener('keyup',event=>{
    if (event.keyCode===13) {
        fetchData();
    }
})
