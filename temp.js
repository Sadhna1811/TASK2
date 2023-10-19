function convertTemperature() {
    const celsiusInput = document.getElementById("celsius");
    const resultElement = document.getElementById("result");

    // Get the input value
    const celsius = parseFloat(celsiusInput.value);

    // Check if the input is a valid number
    if (!isNaN(celsius)) {
        // Convert Celsius to Fahrenheit
        const fahrenheit = (celsius * 9/5) + 32;

        // Display the result
        resultElement.textContent = `Temperature in Fahrenheit: ${fahrenheit.toFixed(2)}°F`;
    } else {
        // Display an error message if the input is not a valid number
        resultElement.textContent = "Please enter a valid temperature in Celsius.";
    }
}
