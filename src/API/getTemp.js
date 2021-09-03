
// const fetchGetTemp = (cityName)=>{
//     const url ='http://api.openweathermap.org/data/2.5/find?units=metric&appid=01cc37655736835b0b75f2b395737694&q=hanoi';
//    return fetch(url,{
//     method: 'GET',
//     headers: {
//         Accept: 'application/json',
//         'Content-Type': 'application/json'
//     }
// })
//     .then(data=>data.json())
//     .then(dataJson=>dataJson.main);
// }





const URL = 'http://api.openweathermap.org/data/2.5/find?units=metric&appid=01cc37655736835b0b75f2b395737694&q=';

  function getTemp(cityName) {
    return  fetch(URL + cityName)
    .then(res => res.json())
    .then(resJson =>{return resJson.list[0].main.temp})
}


export default getTemp;