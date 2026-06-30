// ==========================================
// ROYAL CREST HOTEL
// Main JavaScript File
// ==========================================

document.addEventListener("DOMContentLoaded", () => {

    console.log("Welcome to Royal Crest Hotel Website");

    /* ===============================
       HEADER SCROLL EFFECT
    =============================== */

    const header = document.querySelector("header");

    if (header) {

        window.addEventListener("scroll", () => {

            if (window.scrollY > 50) {

                header.style.background = "#111";
                header.style.boxShadow = "0 4px 15px rgba(0,0,0,0.3)";

            } else {

                header.style.background = "rgba(0,0,0,0.75)";
                header.style.boxShadow = "none";

            }

        });

    }

    /* ===============================
       SCROLL TO TOP BUTTON
    =============================== */

    const topButton = document.createElement("button");

    topButton.innerHTML = "↑";
    topButton.classList.add("scroll-top");

    document.body.appendChild(topButton);

    window.addEventListener("scroll", () => {

        if (window.scrollY > 400) {

            topButton.classList.add("active");

        } else {

            topButton.classList.remove("active");

        }

    });

    topButton.addEventListener("click", () => {

        window.scrollTo({

            top: 0,
            behavior: "smooth"

        });

    });

    /* ===============================
       FADE ANIMATION ON SCROLL
    =============================== */

    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver((entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }

        });

    }, {

        threshold: 0.2

    });

    sections.forEach((section) => {

        observer.observe(section);

    });

    /* ===============================
       BOOKING FORM VALIDATION
    =============================== */

    const bookingForm = document.getElementById("bookingForm");

    if (bookingForm) {

        bookingForm.addEventListener("submit", function (e) {

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

        contactForm.addEventListener("submit", function (e) {

            e.preventDefault();

            alert("Thank you! Your message has been sent successfully.");

            contactForm.reset();

        });

    }

});