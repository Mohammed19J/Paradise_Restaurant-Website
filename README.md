# FoodParadise Restaurant Website

## Overview
FoodParadise is a dynamic restaurant website designed to provide customers with an interactive experience. The website includes functionalities for browsing the menu, booking tables, registering for a club card, and viewing customer demand data. The project is built using HTML, CSS, and JavaScript with local storage for data persistence.

## Features
###  Navigation Bar
- **Home:** Displays a welcome message with a background image.
- **About Us:** Provides information about the restaurant's vision, location, and service offerings.
- **Menu:** A dropdown with various food categories, including breakfast, salads, main courses, drinks, and sweets.
- **Location:** Shows the restaurant's address and an embedded Google Map.
- **Contact:** Displays the contact information of restaurant representatives.
- **Club Card Registration:** Allows users to register for a club card and view the total number of members.
- **Book a Table:** Enables customers to book a table and view customer demand by the hour.
- **Social Media Links:** Quick access to Facebook, Instagram, and WhatsApp.

## Technologies Used
- **HTML**: Structure of the website.
- **CSS**: Styling and layout using an external `cssf.css` file.
- **JavaScript**: Used for interactivity, form validation, local storage management, and dynamic UI updates.
- **ECharts.js**: For generating demand charts in the booking section.
- **Local Storage**: Saves club card registration and table booking data.
- **Google Maps API**: Embedded map for the restaurant location.

## Project Structure
```
FoodParadise/
│── index.html          # Main HTML file
│── cssf.css            # Stylesheet for layout and design
│── js/
│   ├── data-source.js  # Handles local storage and data fetching
│   ├── business-logic.js # Contains validation logic and data processing
│   ├── presentation.js # Manages dynamic UI changes and content loading
│── images/             # Contains images for menu and UI elements
```

## Installation & Setup
1. **Clone the Repository**
   ```sh
   git clone https://github.com/your-username/FoodParadise.git
   cd FoodParadise
   ```
2. **Open the Project**
   - Open `index.html` in a web browser to view the website.
3. **Ensure JavaScript is Enabled**
   - The website requires JavaScript to function properly.

## Functionality Breakdown
### 🛠️ **JavaScript Features**
- **Club Card Registration (`business-logic.js`)**
  - Validates user input (name, email, and phone number).
  - Saves the data in local storage.
  - Updates the number of registered members dynamically.
- **Table Booking (`data-source.js`)**
  - Ensures valid date and time selection.
  - Saves booking details in local storage.
  - Generates a bar chart of customer demand by the hour.
- **Menu Navigation (`presentation.js`)**
  - Dynamically updates the menu content based on the selected category.
- **Location & Contact Info (`index.html`)**
  - Displays restaurant details and an embedded Google Map.

## Screenshots
### Home Page
![Home Page](images/homepage.png)

### Menu Dropdown
![Menu Dropdown](images/menu-dropdown.png)

### Club Card Registration
![Club Card Form](images/club-card-form.png)

### Table Booking with Demand Chart
![Table Booking](images/book-table.png)

## Future Improvements
🔹 Implement a backend (Node.js/Express with a database).  
🔹 Add user authentication for login and profile management.  
🔹 Enhance styling for better UI/UX.  

## Contributing
If you’d like to contribute:
1. Fork the repository.
2. Create a new feature branch (`git checkout -b feature-name`).
3. Commit your changes (`git commit -m 'Add feature'`).
4. Push to the branch (`git push origin feature-name`).
5. Submit a pull request.

