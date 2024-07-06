document.addEventListener("DOMContentLoaded", function() {
    const serviceSelect = document.getElementById("service");
    const serviceInfo = document.getElementById("service-info");
    const checkinInput = document.getElementById("checkin");
    const checkoutInput = document.getElementById("checkout");

    
    

    
    

    const services = {
      "Service 1": {
        title: "𝐃𝐡𝐚𝐫𝐚𝐦𝐬𝐡𝐚𝐥𝐚 𝐓𝐫𝐢𝐩",
        places: [
          {
            name: "McLeod Ganj",
            description: "A suburb of Dharamshala offering stunning mountain views.",
            image: "./booking images/bhagsu naag temple 1.jpg"
          },
          {
            name: "Bhagsunag Waterfall",
            description: "A beautiful waterfall located near the Bhagsunag Temple.",
            image: "./booking images/bhagsu naag temple 1.jpg"
          },
          {
            name: "Dal Lake",
            description: "A small mid-altitude lake near the village of Tota Rani.",
            image: "./booking images/bhagsu naag temple 1.jpg"
          }
        ]
      },
      "Service 2": {
        title: "𝐏𝐚𝐥𝐚𝐦𝐩𝐮𝐫 𝐓𝐫𝐢𝐩",
        places: [
          {
            name: "Tea Gardens",
            description: "Lush green tea gardens offering scenic views.",
            image: "./booking images/bhagsu naag temple 1.jpg"
          },
          {
            name: "Neugal Khad",
            description: "A picnic spot by the river with panoramic views.",
            image: "./booking images/bhagsu naag temple 1.jpg"
          },
          {
            name: "Saurabh Van Vihar",
            description: "A nature park dedicated to Captain Saurabh Kalia.",
            image: "./booking images/bhagsu naag temple 1.jpg"
          }
        ]
      },
      "Service 3": {
        title: "𝐁𝐚𝐢𝐣𝐧𝐚𝐭𝐡 𝐓𝐫𝐢𝐩",
        places: [
          {
            name: "Baijnath Temple",
            description: "An ancient temple dedicated to Lord Shiva.",
            image: "./booking images/bhagsu naag temple 1.jpg"
          },
          {
            name: "Tashi Jong Monastery",
            description: "A serene monastery offering spiritual vibes.",
            image: "./booking images/bhagsu naag temple 1.jpg"
          },
          {
            name: "Bir Billing",
            description: "A popular spot for paragliding.",
            image: "./booking images/bhagsu naag temple 1.jpg"
          }
        ]
      }
    };
  
    serviceSelect.addEventListener("change", function() {
      const selectedService = serviceSelect.value;
      if (selectedService && services[selectedService]) {
        const serviceDetails = services[selectedService];
        let detailsHtml = `<h4>${serviceDetails.title}</h4>`;
        serviceDetails.places.forEach(place => {
          detailsHtml += `
            <div class="place">
              <img src="${place.image}" alt="${place.name}" class="place-image">
              <h5 class="place-name">${place.name}</h5>
              <p>${place.description}</p>
            </div>
          `;
        });
        serviceInfo.innerHTML = detailsHtml;
      } else {
        serviceInfo.innerHTML = "";
      }
    });
  
    // Function to set the minimum check-in date to the system's current date
    const setMinCheckinDate = () => {
      const systemDate = new Date().toISOString().split("T")[0]; // Get system date in YYYY-MM-DD format
      checkinInput.setAttribute("min", systemDate);
    };
  
    // Function to set the minimum checkout date to the selected check-in date
    const setMinCheckoutDate = () => {
      const checkinDate = checkinInput.value;
      if (checkinDate) {
        checkoutInput.setAttribute("min", checkinDate);
      }
    };
  
    checkinInput.addEventListener("change", setMinCheckoutDate);
  
    setMinCheckinDate(); // Set the initial minimum check-in date
  });
  

  document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('.tour-search-form');
    const nameField = document.getElementById('Name');
    
    nameField.addEventListener('input', (event) => {
      const value = event.target.value;
      event.target.value = value.replace(/[^a-zA-Z\s]/g, '');
    });
  
    form.addEventListener('submit', (event) => {
      if (!isNameValid(nameField.value)) {
        event.preventDefault();
        alert('Name should contain only characters.');
        nameField.focus();
        return;
      }
  
    });
  
    function isNameValid(name) {
      const regex = /^[a-zA-Z\s]+$/;
      return regex.test(name);
    }
  
  });

  document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('.tour-search-form');
    const phoneField = document.getElementById('EnterPhone');
    
  
    // Allow only digits in the Phone Number field
    phoneField.addEventListener('input', (event) => {
      const value = event.target.value;
      event.target.value = value.replace(/[^0-9]/g, '');
    });
  
    form.addEventListener('submit', (event) => {
      
      if (!isPhoneValid(phoneField.value)) {
        event.preventDefault();
        alert('Phone Number should contain only digits.');
        phoneField.focus();
        return;
      }
    });
  
  
    function isPhoneValid(phone) {
      const regex = /^\d+$/;
      return regex.test(phone);
    }
  });
  


// Footer JavaScript

// Show the "go-top" button when scrolling down
const goTopButton = document.querySelector('.go-top');

window.addEventListener('scroll', () => {
  if (window.scrollY > 100) {
    goTopButton.style.display = 'flex';
  } else {
    goTopButton.style.display = 'none';
  }
});

// Smooth scroll to top
goTopButton.addEventListener('click', (event) => {
  event.preventDefault();
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
