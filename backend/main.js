// main.js

// Example of a function declaration
function greet(name) {
    console.log(`Hello, ${name}!`);
}

// Immediately Invoked Function Expression (IIFE) for isolated scope
(function() {
    // Variables
    let message = 'JavaScript is fun!';
    console.log(message);

    // More complex logic or setup can go here
})();

// Event listener for DOMContentLoaded to ensure the DOM is fully loaded before manipulating
document.addEventListener('DOMContentLoaded', function() {
    // DOM manipulation or event listeners setup
    document.getElementById('someButton').addEventListener('click', function() {
        console.log('Button clicked!');
    });

    // Call functions or execute code that requires the DOM to be fully loaded
    greet('World');
});

// Example of an asynchronous function using Promises or async/await
async function fetchData(url) {
    try {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

// Example of usage
fetchData('https://api.example.com/data');
