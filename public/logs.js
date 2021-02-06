const mymap = L.map('mymap').setView([22.805, 82.0], 5);
const attribution =
  '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';
//const tileUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
const tileUrl =
  'https://{s}.tile.openstreetmap.de/tiles/osmde/{z}/{x}/{y}.png';
const tiles = L.tileLayer(tileUrl, { attribution });
tiles.addTo(mymap);

getData();

async function getData() {
  const response = await fetch('/api');
  const data = await response.json();

  for (item of data) {
    const marker = L.marker([item.lat, item.lon]).addTo(mymap);
    let txt = `LAT: &nbsp${item.lat}  <br>
    LON: &nbsp${item.lon}  <br>
    AQI: &nbsp${item.air.aqi}  <br>
    O3:  &nbsp  ${item.air.o3} <br>
    SO2:  &nbsp  ${item.air.so2} <br>
    NO2:  &nbsp  ${item.air.no2} <br>
    CO:  &nbsp  ${item.air.co} <br>
    PM10:  &nbsp  ${item.air.pm10} <br>
    PM25:  &nbsp  ${item.air.pm25} <br>`;

    if (item.air.value < 0) {
      txt += '  No air quality reading.';
    } else {
      txt += `  `;
    }
    marker.bindPopup(txt);
  }
  console.log(data);
}