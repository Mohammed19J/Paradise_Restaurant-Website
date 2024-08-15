// Function to load content based on the selected category
function loadContent(category) {
    let content = '';

    // Switch statement to determine which category to display
    switch (category) {
        case 'breakfast':
            content = `
                <h1 class="menu-title">Breakfast Menu</h1>
                <ul>
                    <li class="menu-item">
                        <img src="images/breakfast/shaksho.png" width="400" height="300" alt="Shakshuka">
                        <img src="images/breakfast/mnaqesh.png" width="400" height="300" alt="Manakish">
                        <p>Shakshuka &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp Manakish</p>
                    </li></br>
                    <li class="menu-item">
                        <img src="images/breakfast/tost.png" width="400" height="300" alt="Toast">
                        <img src="images/breakfast/egg.png" width="400" height="300" alt="Eggs">
                        <p>Toast &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp Eggs</p>
                    </li></br>
                    <li class="menu-item">
                        <img src="images/breakfast/korson.png" width="400" height="300" alt="Croissant">
                        <p>Croissant</p>
                    </li></br>
                </ul>`;
            break;
        case 'salad':
            content = `
                <h1 class="menu-title">Salad Menu</h1>
                <ul>
                    <li class="menu-item">
                        <img src="images/salad/caesr.png" width="400" height="300" alt="Caesar Salad">
                        <img src="images/salad/gogo.png" width="400" height="300" alt="Greek Salad">
                        <p>Caesar Salad &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp Greek Salad</p>
                    </li></br>
                    <li class="menu-item">
                        <img src="images/salad/fatosh.png" width="400" height="300" alt="Fattoush">
                        <img src="images/salad/tabole.png" width="400" height="300" alt="Tabbouleh">
                        <p>Fattoush &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp Tabbouleh</p>
                    </li></br>
                </ul>`;
            break;
        case 'main_course':
            content = `
                <h1 class="menu-title">Main Course Menu</h1>
                <ul>
                    <li class="menu-item">
                        <img src="images/main_course/seafood.png" width="400" height="300" alt="Seafood Platter">
                        <img src="images/main_course/shnetsl.png" width="400" height="300" alt="Schnitzel">
                        <p>Seafood Platter &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp Schnitzel</p>
                    </li></br>
                    <li class="menu-item">
                        <img src="images/main_course/mokpts.png" width="400" height="300" alt="Mixed Grill">
                        <img src="images/main_course/raveole.png" width="400" height="300" alt="Ravioli">
                        <p>Mixed Grill &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp Ravioli</p>
                    </li></br>
                    <li class="menu-item">
                        <img src="images/main_course/pizza.png" width="400" height="300" alt="Pizza">
                        <img src="images/main_course/meet.png" width="400" height="300" alt="Steak">
                        <p>Pizza &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp Steak</p>
                    </li></br>
                </ul>`;
            break;
        case 'drinks':
            content = `
                <h1 class="menu-title">Drinks Menu</h1>
                <ul>
                    <li class="menu-item">
                        <img src="images/Drinks/cock.png" width="400" height="500" alt="Cocktail">
                        <img src="images/Drinks/gros.png" width="400" height="500" alt="Smoothie">
                        <p>Cocktail &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp Smoothie</p>
                    </li></br>
                    <li class="menu-item">
                        <img src="images/Drinks/perot.png" width="400" height="500" alt="Juice">
                        <img src="images/Drinks/cokct.png" width="400" height="500" alt="Mocktail">
                        <p>Juice &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp Mocktail</p>
                    </li></br>
                    <li class="menu-item">
                        <img src="images/Drinks/jojo.png" width="400" height="500" alt="Lemonade">
                        <img src="images/Drinks/caffe.png" width="400" height="500" alt="Coffee">
                        <p>Lemonade &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp Coffee</p>
                    </li></br>
                </ul>`;
            break;
        case 'sweets':
            content = `
                <h1 class="menu-title">Sweets Menu</h1>
                <ul>
                    <li class="menu-item">
                        <img src="images/sweets/sofle.png" width="400" height="300" alt="Soufflé">
                        <img src="images/sweets/Cheesecake.png" width="400" height="300" alt="Cheesecake">
                        <p>Soufflé &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp Cheesecake</p>
                    </li></br>
                    <li class="menu-item">
                        <img src="images/sweets/bufel.png" width="400" height="300" alt="Buffet">
                        <img src="images/sweets/choko.png" width="400" height="300" alt="Chocolate Cake">
                        <p>Waffle &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp Chocolate Cake</p>
                    </li></br>
                </ul>`;
            break;
        default:
            content = '<p>Select a category from the menu.</p>';
            break;
    }

    // Update the content area with the generated HTML
    document.getElementById('content').innerHTML = content;
    document.getElementById('content').style.display = 'block';
    // Hide other sections
    document.getElementById('description').style.display = 'none';
    document.getElementById('club-card-form').style.display = 'none';
    document.getElementById('book-table-form').style.display = 'none';
    document.getElementById('contactsection').style.display = 'none';
    document.getElementById('location-section').style.display = 'none';
    document.getElementById('saas1').style.display = 'none';
    document.getElementById('demandChart').style.display = 'none';
}

// Function to navigate to the home page
function homeButton() {
    window.location = 'Resturant.html'; // Redirect to the home page
}

// Function to display the "About Us" section
function aboutUs() {
    document.getElementById('content').style.display = 'none';
    document.getElementById('description').style.display = 'block';
    document.getElementById('saas1').style.display = 'block';
    document.getElementById('club-card-form').style.display = 'none';
    document.getElementById('book-table-form').style.display = 'none';
    document.getElementById('contactsection').style.display = 'none';
    document.getElementById('location-section').style.display = 'none';
    document.getElementById('demandChart').style.display = 'none';

    // HTML content for the "About Us" section
    const restaurantDescription = `</br><h3> About Us</h3><h2>Welcome to Food Paradise, located at Sderot Nesi'ei Israel 101, Braude. Our vision is to offer a dining experience with exceptional food, a warm atmosphere, and outstanding service. We use the freshest, locally sourced ingredients, emphasizing a farm-to-table approach for delicious and sustainable meals. Our diverse menu features contemporary and classic dishes, from steaks to innovative seafood,
     crafted with seasonal produce and artisanal ingredients. Food Paradise is the perfect place to satisfy all your cravings. We are open from 9:00 AM to 10:00 PM.
</h2>`;

    // Update the description section with the restaurant's description
    document.getElementById('description').innerHTML = restaurantDescription;
}

// Function to display the club card registration form
function showClubCardForm() {
    document.getElementById('content').style.display = 'none';
    document.getElementById('club-card-form').style.display = 'block';
    document.getElementById('book-table-form').style.display = 'none';
    document.getElementById('description').style.display = 'none';
    document.getElementById('contactsection').style.display = 'none';
    document.getElementById('location-section').style.display = 'none';
    document.getElementById('saas1').style.display = 'none';
    document.getElementById('demandChart').style.display = 'none';
}

// Function to display the table booking form
function showBookTableForm() {
    document.getElementById('content').style.display = 'none';
    document.getElementById('club-card-form').style.display = 'none';
    document.getElementById('book-table-form').style.display = 'block';
    document.getElementById('description').style.display = 'none';
    document.getElementById('contactsection').style.display = 'none';
    document.getElementById('location-section').style.display = 'none';
    document.getElementById('saas1').style.display = 'none';
    document.getElementById('demandChart').style.display = 'block';
}

// Function to display the contact information
function contact() {
    // HTML content for the contact section
    const contactSection = `
        <div id="contact-section">
            <h2>Contact Us</h2>
            <table>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                </tr>
                <tr>
                    <td>Amal Kandeel</td>
                    <td>Amal.Kandeel@e.braude.ac.il</td>
                </tr>
                <tr>
                    <td>Mohammed Jaber</td>
                    <td>Mohammad.Jaber@e.braude.ac.il</td>
                </tr>
                <tr>
                    <td>Raeda Khoury</td>
                    <td>Raeda.khoury@e.braude.ac.il</td>
                </tr>
                <tr>
                    <td>Yosef Jirees</td>
                    <td>Yosef.Jirees@e.braude.ac.il</td>
                </tr>
            </table>
        </div>
    `;

    // Update the content area with the contact information
    document.getElementById('content').innerHTML = contactSection;
    document.getElementById('content').style.display = 'block';
    // Hide other sections
    document.getElementById('description').style.display = 'none';
    document.getElementById('club-card-form').style.display = 'none';
    document.getElementById('book-table-form').style.display = 'none';
    document.getElementById('location-section').style.display = 'none';
    document.getElementById('saas1').style.display = 'none';
    document.getElementById('demandChart').style.display = 'none';
}

// Function to display the restaurant location
function showLocation() {
    document.getElementById('content').style.display = 'none';
    document.getElementById('club-card-form').style.display = 'none';
    document.getElementById('book-table-form').style.display = 'none';
    document.getElementById('contactsection').style.display = 'none';
    document.getElementById('location-section').style.display = 'block';
    document.getElementById('description').style.display = 'none';
    document.getElementById('saas1').style.display = 'none';
    document.getElementById('demandChart').style.display = 'none';
}

// Function to clear the fields in the club card registration form
function clearClubCard() {
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('phone').value = '';
}

// Function to clear the fields in the table booking form
function clearBookTable() {
    document.getElementById('customerName').value = '';
    document.getElementById('date').value = '';
    document.getElementById('time').value = '';
    document.getElementById('Allergies').value = '';
    document.getElementById('NumberOfPeople').selectedIndex = 0;
}
