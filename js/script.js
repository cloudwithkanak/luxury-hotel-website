// ==========================================
// ROYAL CREST HOTEL
// Main JavaScript File
// ==========================================


// ===============================
// Smooth Welcome Message
// ===============================

window.addEventListener("load", () => {
    console.log("Welcome to Royal Crest Hotel Website");
});


// ===============================
// Navbar Shadow on Scroll
// ===============================

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {
        header.style.background = "#111";
        header.style.boxShadow = "0 4px 15px rgba(0,0,0,0.3)";
    } else {
        header.style.background = "rgba(0,0,0,0.75)";
        header.style.boxShadow = "none";
    }

});


// ===============================
// Scroll To Top Button
// ===============================

const topButton = document.createElement("button");

topButton.innerHTML = "⬆";

topButton.id = "topBtn";

document.body.appendChild(topButton);

topButton.style.position = "fixed";
topButton.style.bottom = "30px";
topButton.style.right = "30px";
topButton.style.width = "50px";
topButton.style.height = "50px";
topButton.style.border = "none";
topButton.style.borderRadius = "50%";
topButton.style.background = "#d4af37";
topButton.style.color = "#fff";
topButton.style.fontSize = "20px";
topButton.style.cursor = "pointer";
topButton.style.display = "none";
topButton.style.zIndex = "999";


window.addEventListener("scroll", () => {

    if (window.scrollY > 400) {

        topButton.style.display = "block";

    } else {

        topButton.style.display = "none";

    }

});


topButton.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});


// ===============================
// Fade Animation on Scroll
// ===============================

const sections = document.querySelectorAll(".section");

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

});

sections.forEach(section => {

    observer.observe(section);

});

/* ===============================
BOOKING FORM VALIDATION
=============================== */

const bookingForm = document.getElementById("bookingForm");

if (bookingForm) {

    bookingForm.addEventListener("submit", function(e){

        e.preventDefault();

        const checkin = new Date(document.getElementById("checkin").value);

        const checkout = new Date(document.getElementById("checkout").value);

        if (checkout <= checkin) {

            alert("Check-out date must be after the check-in date.");

            return;

        }

        alert("Thank you! Your booking request has been submitted successfully.");

        bookingForm.reset();

    });

}

/* ===============================
CONTACT FORM
=============================== */

const contactForm = document.getElementById("contactForm");

if (contactForm) {

    contactForm.addEventListener("submit", function(e){

        e.preventDefault();

        alert("Thank you! Your message has been sent successfully.");

        contactForm.reset();

    });

}