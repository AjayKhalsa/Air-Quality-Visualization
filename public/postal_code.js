const mymap = L.map('mymap').setView([22.805, 82.0], 5);
const attribution ='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';
//const tileUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
const tileUrl =
  'https://{s}.tile.openstreetmap.de/tiles/osmde/{z}/{x}/{y}.png';
const tiles = L.tileLayer(tileUrl, { attribution });
tiles.addTo(mymap);

getData();
async function getData() {
  const response = await fetch('/api_postal_code');
  const data = await response.json();
console.log("check",data);

var iconcolor;
var greenIcon = new L.Icon({
  iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
 // shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  //shadowSize: [41, 41]
});

var redIcon = new L.Icon({
  iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
  //shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  //shadowSize: [41, 41]
});

var yellowIcon = new L.Icon({
  iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-yellow.png',
  //shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  //shadowSize: [41, 41]
});

var orangeIcon = new L.Icon({
  iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-orange.png',
  //shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  //shadowSize: [41, 41]
});

var violetIcon = new L.Icon({
  iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-violet.png',
  //shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  //shadowSize: [41, 41]
});

var blackIcon = new L.Icon({
  iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-black.png',
  //shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  //shadowSize: [41, 41]
});

  for (item of data) {

    if (item.weather.data[0].aqi >= 301)
      iconcolor = blackIcon
    else if (item.weather.data[0].aqi >= 201 & item.weather.data[0].aqi <= 300)
      iconcolor = violetIcon;
    else if (item.weather.data[0].aqi >= 151 & item.weather.data[0].aqi <= 200)
      iconcolor = redIcon;
    else if (item.weather.data[0].aqi >= 101 & item.weather.data[0].aqi <= 150)
      iconcolor = orangeIcon;
    else if (item.weather.data[0].aqi >= 51 & item.weather.data[0].aqi <= 100)
      iconcolor = yellowIcon;
    else if (item.weather.data[0].aqi <= 50)
          iconcolor = greenIcon;

          const marker = L.marker([item.weather.lat, item.weather.lon], {icon:iconcolor}).addTo(mymap);
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