// Only change code below this line
class Thermostat {
  constructor(tempFahrenheit){
    this._temperature = 5/9*(tempFahrenheit-32);
  }

  get temperature() {
    return this._temperature;
  }

  set temperature(tempCelcius) {
    this._temperature = tempCelcius;
  }
}
// Only change code above this line

const thermos = new Thermostat(76); // Setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in Celsius
thermos.temperature = 26;
temp = thermos.temperature; // 26 in Celsius
