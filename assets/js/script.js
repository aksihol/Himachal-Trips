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

// Function to redirect to a different URL
function goToUrl(url) {
  window.location.href = url;
}

document.addEventListener('DOMContentLoaded', () => {
  const checkinDateInput = document.getElementById('checkin');
  const checkoutDateInput = document.getElementById('checkout');
  const destinationInput = document.getElementById('destination');

  // Set the minimum check-in date to today
  const today = new Date().toISOString().split('T')[0];
  checkinDateInput.setAttribute('min', today);

  // Add event listener to check-in date input
  checkinDateInput.addEventListener('change', () => {
    const checkinDate = checkinDateInput.value;
    // Set the minimum check-out date to the selected check-in date
    checkoutDateInput.setAttribute('min', checkinDate);
    // If the current check-out date is before the new check-in date, clear the check-out date
    if (checkoutDateInput.value && checkoutDateInput.value < checkinDate) {
      checkoutDateInput.value = '';
    }
  });

  // Add event listener to check-out date input
  checkoutDateInput.addEventListener('change', () => {
    const checkinDate = checkinDateInput.value;
    const checkoutDate = checkoutDateInput.value;
    // If the check-out date is before the check-in date, clear the check-out date
    if (checkoutDate < checkinDate) {
      alert('Check-out date cannot be before check-in date.');
      checkoutDateInput.value = '';
    }
  });

  // Add event listener to destination input to only allow alphabets
  destinationInput.addEventListener('input', (event) => {
    const value = event.target.value;
    const alphabetRegex = /^[a-zA-Z\s]*$/;
    if (!alphabetRegex.test(value)) {
      destinationInput.value = value.replace(/[^a-zA-Z\s]/g, '');
    }
  });
});
