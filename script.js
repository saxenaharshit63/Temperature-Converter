function convertToFar() {
    const celcius = parseFloat(document.getElementById('celcius').value);
    const fahrenheit = (celcius * 9/5) + 32;
    document.getElementById('result').innerHTML = `${celcius} Celcius is ${fahrenheit} Fahrenheit`;
}

function convertToCel() {
    const fahrenheit = parseFloat(document.getElementById('fahrenheit').value);
    const celcius = (fahrenheit - 32) * 5/9;
    document.getElementById('result2').innerHTML = `${fahrenheit} Fahrenheit is ${celcius} Celcius`;
}