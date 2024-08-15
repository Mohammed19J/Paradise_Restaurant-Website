// Data Access Layer Functions

// Function to initialize local storage with default values if they don't already exist
function initializeLocalStorage() {
    // Check if 'clubCards' key exists in local storage
    if (!localStorage.getItem('clubCards')) {
        // Define initial data for club cards
        const initialClubCards = [
            { name: 'John Doe', email: 'john@example.com', phone: '123456789' },
            { name: 'Jane Smith', email: 'jane@example.com', phone: '987654321' }
        ];
        // Save initial data to local storage
        localStorage.setItem('clubCards', JSON.stringify(initialClubCards));
    }

    // Check if 'bookTableEntries' key exists in local storage
    if (!localStorage.getItem('bookTableEntries')) {
        // Define initial data for table bookings
        const initialBookTableEntries = [
            { customerName: 'Alice Brown', date: '2024-07-20', time: '18:00', numberOfPeople: '4', allergies: 'None' },
            { customerName: 'Bob Green', date: '2024-07-21', time: '19:30', numberOfPeople: '2', allergies: 'Peanuts' }
        ];
        // Save initial data to local storage
        localStorage.setItem('bookTableEntries', JSON.stringify(initialBookTableEntries));
    }
}

// Function to save a new entry to local storage
function saveToLocalStorage(key, entry) {
    // Retrieve existing data from local storage, or initialize as an empty array
    let data = JSON.parse(localStorage.getItem(key)) || [];
    
    // Add new entry to the data array
    data.push(entry);
    
    // Save updated data back to local storage
    localStorage.setItem(key, JSON.stringify(data));
}
