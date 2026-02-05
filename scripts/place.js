const year = document.querySelector('#currentyear-js');
year.textContent = new Date().getFullYear();

const modified = document.querySelector('#lastmodified-js');
modified.textContent = `Last Modified: ${document.lastModified}`;


const temperature = 24; 
const windSpeed = 5; 

function calculateWindChill (temperature, windspeed) {
  return (13.12 + 0.6215 * temperature - 11.37 * (windspeed ** 0.16) + 0.3965 * temperature * (windspeed ** 0.16)).toFixed(2);
}


const windChillElement = document.querySelector("#wind-js");
if (temperature <= 10 && windSpeed > 4.8) {
  windChillElement.textContent = 
    `${calculateWindChill(temperature, windSpeed)} °C`;
}
else {
  windChillElement.textContent = "N/A";
}