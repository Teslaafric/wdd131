const year = document.querySelector('#currentyear-js');
year.textContent = new Date().getFullYear();

const modified = document.querySelector('#lastmodified-js');
modified.textContent = `Last Modified: ${document.lastModified}`;


const temperature = 9; 
const windSpeed = 5; 

function calculateWindChill (temperature, windSpeed) {
  return (13.12 + 0.6215 * temperature - 11.37 * (windSpeed ** 0.16) + 0.3965 * temperature * (windSpeed ** 0.16)).toFixed(2);
}


const windChillElement = document.querySelector("#wind-js");
if (temperature <= 10 && windSpeed > 4.8) {
  windChillElement.textContent = 
    `${calculateWindChill(temperature, windSpeed)} °C`;
}
else {
  windChillElement.textContent = "N/A";
}