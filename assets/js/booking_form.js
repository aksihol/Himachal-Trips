'use strict';

/**
 * navbar toggle
 */

const overlay = document.querySelector("[data-overlay]");
const navOpenBtn = document.querySelector("[data-nav-open-btn]");
const navbar = document.querySelector("[data-navbar]");
const navCloseBtn = document.querySelector("[data-nav-close-btn]");
const navLinks = document.querySelectorAll("[data-nav-link]");

const navElemArr = [navOpenBtn, navCloseBtn, overlay];

const navToggleEvent = function (elem) {
  for (let i = 0; i < elem.length; i++) {
    elem[i].addEventListener("click", function () {
      navbar.classList.toggle("active");
      overlay.classList.toggle("active");
    });
  }
}

navToggleEvent(navElemArr);
navToggleEvent(navLinks);



/**
 * header sticky & go to top
 */

const header = document.querySelector("[data-header]");
const goTopBtn = document.querySelector("[data-go-top]");

window.addEventListener("scroll", function () {

  if (window.scrollY >= 200) {
    header.classList.add("active");
    goTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    goTopBtn.classList.remove("active");
  }

});

document.getElementById('bookingForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting

    // Validate form fields
    let name = document.getElementById('name').value.trim();
    let email = document.getElementById('email').value.trim();
    let phone = document.getElementById('phone').value.trim();
    let date = document.getElementById('date').value;
    let time = document.getElementById('numberofpeople').value;
    let service = document.getElementById('service').value;

    if (name === '' || email === '' || phone === '' || date === '' || numberofpeople === '' || service === '') {
        alert('Please fill in all fields');
        return false;
    }

    // Additional validation for email and phone format
    if (!validateEmail(email)) {
        alert('Please enter a valid email address');
        return false;
    }

    if (!validatePhone(phone)) {
        alert('Please enter a valid phone number');
        return false;
    }

    // If all validations pass, you can submit the form or perform other actions
    alert('Booking successful!');
    this.reset(); // Optionally reset the form
});

// Function to validate email format
function validateEmail(email) {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
}

// Function to validate phone number format
function validatePhone(phone) {
    const re = /^\d{10}$/; // Change this regex based on your phone number format
    return re.test(phone);
}
