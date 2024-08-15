// Function to validate the club card registration form
function validateRegisterForm() {
    // Retrieve and trim input values
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();

    // Define regular expressions for validation
    const nameRegex = /^[a-zA-Z\s]+$/;
    const phoneRegex = /^\d{10}$/;

    // Validate name field
    if (!nameRegex.test(name)) {
        alert('Name must contain only letters.');
        return false;
    }

    // Validate email field
    if (!email.includes('@')) {
        alert('Please enter a valid email address.');
        return false;
    }

    // Validate phone number field
    if (!phoneRegex.test(phone)) {
        alert('Phone must contain exactly 10 digits.');
        return false;
    }

    // Ensure all fields are filled
    if (name && email && phone) {
        return true;
    } else {
        alert('Please fill out all fields.');
        return false;
    }
}

// Function to validate the book table form
function validateBookTableForm() {
    // Retrieve and trim input values
    const customerName = document.getElementById('customerName').value.trim();
    const date = document.getElementById('date').value.trim();
    const time = document.getElementById('time').value.trim();
    const currentDate = new Date().toISOString().split('T')[0];

    // Check if the selected date is in the future
    if (date <= currentDate) {
        alert('Please choose a future date.');
        return false;
    }

    // Define acceptable time range
    const startTime = "09:00";
    const endTime = "22:00";

    // Validate the time input
    if (time < startTime || time > endTime) {
        alert('Please choose a time between 09:00 and 22:00.');
        return false;
    }

    // Define regular expression for name validation
    const nameRegex = /^[a-zA-Z\s]+$/;

    // Validate customer name field
    if (!nameRegex.test(customerName)) {
        alert('Name must contain only letters.');
        return false;
    }

    // Ensure all fields are filled
    if (customerName && date && time) {
        return true;
    } else {
        alert('Please fill out all fields.');
        return false;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    // Get the button element by its ID
    const registerButton = document.getElementById('registerButton');
    
    // Add the event listener to the button
    // Pass a reference to the updateClubCardCount method
    registerButton.addEventListener('click', () => clubCardCounter.updateClubCardCount());
});
// Function to save club card data to local storage
function saveClubCardData() {
    // Validate form before saving data
    if (!validateRegisterForm()) {
        return;
    }

    // Retrieve input values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;

    // Create an entry object
    const entry = {
        name: name,
        email: email,
        phone: phone
    };

    // Save the entry to local storage
    saveToLocalStorage('clubCards', entry);
    alert('Club card data saved successfully!');
    // Clear the form after saving
    clearClubCard();
}

// Function to save table booking data to local storage
function saveBookTableData() {
    // Validate form before saving data
    if (!validateBookTableForm()) {
        return;
    }

    // Retrieve input values
    const customerName = document.getElementById('customerName').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;
    const numberOfPeople = document.getElementById('NumberOfPeople').value;
    const allergies = document.getElementById('Allergies').value;

    // Create an entry object
    const entry = { customerName, date, time, numberOfPeople, allergies };

    // Save the entry to local storage
    saveToLocalStorage('bookTableEntries', entry);
    alert('Table booking data saved successfully!');
    
    // Generate chart data and clear the form after saving
    generateChartData();
    clearBookTable();
}

// Function to save an entry to local storage
function saveToLocalStorage(key, entry) {
    let data = JSON.parse(localStorage.getItem(key)) || [];
    data.push(entry);
    localStorage.setItem(key, JSON.stringify(data));
}

// Function to clear the club card form
function clearClubCard() {
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('phone').value = '';
}

// Function to clear the book table form
function clearBookTable() {
    document.getElementById('customerName').value = '';
    document.getElementById('date').value = '';
    document.getElementById('time').value = '';
    document.getElementById('NumberOfPeople').value = '';
    document.getElementById('Allergies').value = '';
}