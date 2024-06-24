
// Task 1: Create an array containing information about different products, including their names, prices, and descriptions.

let products = [
    { name: "Laptop", price: 999.99, description: "Powerful computing on the go" },
    { name: "Smartphone", price: 699.99, description: "Stay connected wherever you are" },
    { name: "Headphones", price: 149.99, description: "Immersive audio experience" }
];


// Task 2: Write a function to display the product information on the webpage dynamically. Task 3: Implement an event listener to trigger the display of products when the page loads. **Expected Outcomes:** 1. Successful creation of an array containing product information. 2. Proper display of product information on the webpage using JavaScript. 3. Implementation of an event listener to trigger the display of products upon page load. ---

function displayProducts() {
    let productListContainer = document.getElementById('product-list');

    // Clear any existing content in the productListContainer
    productListContainer.innerHTML = '';

    // Iterate through the products array and create HTML elements for each product
    products.forEach(product => {
        // Create elements for each product
        let productDiv = document.createElement('div');
        productDiv.classList.add('product');

        let productName = document.createElement('h2');
        productName.textContent = product.name;

        let productPrice = document.createElement('p');
        productPrice.textContent = `Price: $${product.price}`;

        let productDescription = document.createElement('p');
        productDescription.textContent = product.description;

        // Append elements to productDiv
        productDiv.appendChild(productName);
        productDiv.appendChild(productPrice);
        productDiv.appendChild(productDescription);

        // Append productDiv to productListContainer
        productListContainer.appendChild(productDiv);
    });
}
document.addEventListener('DOMContentLoaded', function() {
    displayProducts();
});





// Add event listener for form submission
document.getElementById('submit-form').addEventListener('submit', handleFormSubmit);

let productListContainer = document.getElementById('product-list');

products.forEach(product => {
    // Create elements for each product
    let productDiv = document.createElement('div');
    productDiv.classList.add('product');

    let productName = document.createElement('h2');
    productName.textContent = product.name;

    let productPrice = document.createElement('p');
    productPrice.textContent = `Price: $${product.price}`;

    let productDescription = document.createElement('p');
    productDescription.textContent = product.description;

    // Append elements to productDiv
    productDiv.appendChild(productName);
    productDiv.appendChild(productPrice);
    productDiv.appendChild(productDescription);

    // Append productDiv to productListContainer
    productListContainer.appendChild(productDiv);
});






// Function to handle form submission
function handleFormSubmit(event) {
    event.preventDefault(); // Prevent default form submission

    // Get form input values
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let message = document.getElementById('message').value;

    // Create an object to store the form data
    let formData = {
        name: name,
        email: email,
        message: message
    };

    // Display the formData object in the console
    console.log('Form Data:', formData);

    
}

// Add event listener for form submission
document.getElementById('submit-form').addEventListener('submit', handleFormSubmit);


// Function to change the color of the box
function changeColor() {
    let box = document.getElementById('box');

    // Generate a random color
    let randomColor = getRandomColor();

    // Apply the random color to the box background
    box.style.backgroundColor = randomColor;
}

// Function to generate a random color (hex format)
function getRandomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Function to handle form submission
function handleFormSubmit(event) {
    event.preventDefault(); // Prevent default form submission

    // Get form input values
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let message = document.getElementById('message').value;

    // Validate form input
    if (validateForm(name, email, message)) {
        // Create an object to store the form data
        let formData = {
            name: name,
            email: email,
            message: message
        };

        // Display the formData object in the console
        console.log('Form Data:', formData);

        // You can further process formData here (e.g., send it to a server using fetch() or XMLHttpRequest)
    }
}

// Implementation of form validation to ensure that all required fields are filled before submission.
// Function to validate form input
function validateForm(name, email, message) {
    let isValid = true;

    // Validate name
    if (name.trim() === '') {
        isValid = false;
        document.getElementById('name-error').textContent = 'Name is required';
    } else {
        document.getElementById('name-error').textContent = '';
    }

    // Validate email
    if (email.trim() === '') {
        isValid = false;
        document.getElementById('email-error').textContent = 'Email is required';
    } else {
        document.getElementById('email-error').textContent = '';
    }

    // Validate message
    if (message.trim() === '') {
        isValid = false;
        document.getElementById('message-error').textContent = 'Message is required';
    } else {
        document.getElementById('message-error').textContent = '';
    }

    return isValid;
}

// Add event listener for form submission
document.getElementById('user-info-form').addEventListener('submit', handleFormSubmit);

