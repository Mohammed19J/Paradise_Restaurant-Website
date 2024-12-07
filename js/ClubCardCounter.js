class ClubCardCounter {
    constructor() {
        if (ClubCardCounter.instance) {
            return ClubCardCounter.instance;
        }

        ClubCardCounter.instance = this;
        document.addEventListener('DOMContentLoaded', () => {
            this.updateClubCardCount(); // Ensure the count is updated when the DOM is fully loaded
        });
    }

    updateClubCardCount() {
        const clubCards = JSON.parse(localStorage.getItem('clubCards')) || [];
        const clubCardCountElement = document.getElementById('clubCardCount');
        if (clubCardCountElement) {
            clubCardCountElement.innerText = clubCards.length;
        }
    }
}

// Ensure the singleton instance is created and globally accessible
const clubCardCounter = new ClubCardCounter();
window.clubCardCounter = clubCardCounter;  // Make it globally accessible
