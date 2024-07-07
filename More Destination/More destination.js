// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function () {
    // Get all the 'Explore' buttons
    const exploreButtons = document.querySelectorAll('.btn-primary');
  
    // Add click event listeners to each button
    exploreButtons.forEach(button => {
      button.addEventListener('click', function (event) {
        event.preventDefault(); // Prevent default link behavior
  
        // Custom functionality: You can navigate to another page or show more details
        alert(`Exploring: ${this.previousElementSibling.previousElementSibling.textContent}`); // Example: show an alert with the destination name
  
        // Example: Navigate to a new page (replace with your actual destination URL)
        // window.location.href = 'destination.html'; 
      });
    });
  });
  
  // Function to redirect to a different URL


 
// Example JavaScript to dynamically load destination cards
function bookNow(destination) {
  alert('Booking for ' + destination);
  // Redirect to booking page or handle booking functionality
  window.location.href = 'booking.html?destination=' + encodeURIComponent(destination);
}


function bookNow(destination) {
  alert('Booking for ' + destination);
  window.location.href = 'booking.html?destination=' + encodeURIComponent(destination);
}

function viewMore(page) {
  window.location.href = page;
}
