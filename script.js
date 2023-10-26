function convertTemperatures() {
  // Get the input values
  const celsius = parseFloat(document.getElementById("Celcius").value);
  
  // Perform temperature conversions
  const fahrenheit = (celsius * 9/5) + 32;
  const kelvin = celsius + 273.15;
  
  // Update the output fields
  document.getElementById("Fahrenheit").value = fahrenheit;
  document.getElementById("Kelvin").value = kelvin;
}
