// const mymap = L.map('mymap').setView([22.805, 82.0], 5);
// const attribution =' <a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>';
// //const tileUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
// const tileUrl =
//   'https://api.maptiler.com/maps/basic/{z}/{x}/{y}.png?key=II7uREndG4cP3ocP64ZH';
// const tiles = L.tileLayer(tileUrl, { attribution });
// tiles.addTo(mymap);

// getData();
// async function getData() {
//   const response = await fetch('/api_country');
//   const data = await response.json();
// console.log("check",data);
//   for (item of data) {
//     const marker = L.marker([item.weather.lat, item.weather.lon]).addTo(mymap);
//     let txt = `The weather here at ${item.weather.city_name}&deg;,
//     ${item.weather.city_name}&deg; is ${item.weather.city_name} with
//     a temperature of ${item.weather.city_name}&deg; C.`;

//     // if (item.air.value < 0) {
//     //   txt += 'No air quality reading.';
//     // } else {
//     //   txt += `The concentration of particulate matter 
//     // (${item.city}) is ${item.air.value} 
//     // ${item.air.unit} last read on ${item.air.lastUpdated}`;
//     // }
//     marker.bindPopup(txt);
//   }

//   console.log(data);
// }

const mymap = L.map('mymap').setView([22.805, 82.0], 5);
const attribution ='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';
//const tileUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
const tileUrl =
  'https://{s}.tile.openstreetmap.de/tiles/osmde/{z}/{x}/{y}.png';
const tiles = L.tileLayer(tileUrl, { attribution });
tiles.addTo(mymap);

getData();
async function getData() {
  const response = await fetch('/api_country');
  const data = await response.json();
console.log("check",data);
  for (item of data) {
    const marker = L.marker([item.weather.lat, item.weather.lon]).addTo(mymap);
    let txt = `City: &nbsp  ${item.weather.city_name} <br>
                AQI: &nbsp${item.weather.data[0].aqi}  <br>
                O3:  &nbsp  ${item.weather.data[0].o3} <br>
                SO2: &nbsp  ${item.weather.data[0].so2} <br>
                NO2: &nbsp  ${item.weather.data[0].no2} <br>
                CO:  &nbsp  ${item.weather.data[0].co} <br>
                PM25:&nbsp  ${item.weather.data[0].pm25} <br>
                PM10:&nbsp  ${item.weather.data[0].pm10} <br>`;

    // if (item.air.value < 0) {
    //   txt += 'No air quality reading.';
    // } else {
    //   txt += `The concentration of particulate matter 
    // (${item.city}) is ${item.air.value} 
    // ${item.air.unit} last read on ${item.air.lastUpdated}`;
    // }
    marker.bindPopup(txt);
  }
  console.log(data);
}