// js file for Module 7 Mastery Assessment ITSE 2302-7P2 Intermediate Web Programming
// event listener for the form submission
document.getElementById('orderForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission
   // calling the validateFunction to validate the form inputs
    validateFunction();
  
    // boolean value of true or false to determine if the form inputs are valid
    if (validateFunction() === true) {
        //call checkAge to validate the user's age
        if (checkAge() === true) {
            // if both validations pass, calculate the total cost
            calculateTotal();
        }
    }
 
});


// validateFunction validates the form inputs
function validateFunction() {
    // if/else statement for validating if input values are empty by id
    var firstName = document.getElementById('firstName');
    var lastName = document.getElementById('lastName');
    
    if (firstName.value === '') {                                           
        alert('Please fill in your first name');                

        firstName.focus();
        return false;
    } else 
    if (lastName.value === '') {
        alert('Please fill in your last name');

        lastName.focus();
          return false;

    } else 
    if (firstName.value !== '' && lastName.value !== '') {
        return true;
    }

   }

// checkAge function to check if the user is old enough to make an order
function checkAge() {
    // Get the age input value
    var age = document.getElementById('age').value; // variables 

    // Check if the age is less than 18
    if (age < 18) {
        alert('You must be at least 18 years old to place an order.');
        return false; // Prevent form submission
    } else {
        return true; // Allow form submission
    }
}

// function for deselecting other radio buttons when one is selected
   function deselectOthers(selectedId) {
    // Get all radio buttons with the class "fabric"
    const radios = document.querySelectorAll('.fabric');

    // Loop through each radio button
    radios.forEach(radio => {
        if (radio.id !== selectedId) {
            radio.checked = false; // Deselect other radio buttons
        }
    });
}


//  creating constant for a cart to gather the info needed to calculate the total cost of the order
//  the cart is an array and a constant that contains the name and price of each product; required for the mastery assessment
// 
const cart = [                                          // array
    { name: 'tshirt', price: 20 },
    { name: 'hoodie', price: 40 },
    { name: 'cotton', price: 20 },
    { name: 'linen', price: 30 },
    { name: 'logoOption', price: 10 },
    { name: 'uvf', price: 50 },
    { name: 'ename', price: 10 }
];


// function for using try, throw, catch, finally, inside the calulate function 
// makes code more robust and handles errors gracefully, mastery requirement
function calculateTotal() {
    // try/Catch/Finally/Throw
    try { 
        // Get user details
        let firstName = document.getElementById('firstName').value; // let 
        let lastName = document.getElementById('lastName').value;

        // capitalize the first letter of names with a string method
        firstName = firstName.charAt(0).toUpperCase() + firstName.slice(1).toLowerCase();
        lastName = lastName.charAt(0).toUpperCase() + lastName.slice(1).toLowerCase();

        // Get the selected product and quantity 
        // constants
        const productDropdown = document.getElementById('product'); // Get the dropdown element
        const productValue = parseInt(productDropdown.value); // Get the product price
        const productName = productDropdown.options[productDropdown.selectedIndex].text; // Get the product name
        const quantity = parseInt(document.getElementById('quantity').value); // Get the quantity

        // Validate product and quantity using throw
        if (isNaN(productValue)) {
            throw "Please select a valid product.";
        }
        if (isNaN(quantity) || quantity <= 0) {
            throw "Please enter a valid quantity.";
        }

        // Calculate the base price
        // arithmetic operators
        var totalCost = productValue * quantity; // Multiply the product value by the quantity

        // Apply product-specific logic using a switch statement
        switch (productName) {
            case "T-Shirt":
                alert("Great choice! T-Shirts are always in style.");
                break;
            case "Hoodie":
                alert("Stay warm and stylish with your Hoodie!");
                break;
            default:
                alert("You selected a great product!");
                break;
        }

        // Loop through the cart array to add additional costs
        cart.forEach(item => {
            const checkbox = document.getElementById(item.name); // Get the checkbox by its id
            if (checkbox && checkbox.checked) {
                totalCost += item.price; // Add the price to the total if the checkbox is checked, arithmetic operator
            }
        });

        // Display the total cost
        alert('Thank you for your order, ' + firstName + ' ' + lastName + '. You chose a ' + productName + '. Congrats on a great fashion find! The total cost of your order is $' + totalCost + '.');

    } catch (error) {
        // Handle errors gracefully
        alert("Error: " + error);
    } finally {
        // Code that always runs, regardless of success or failure
        console.log("Order processing completed.");
    }
}
