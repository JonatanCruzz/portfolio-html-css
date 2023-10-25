import stickyHeader from "./components/stickyHeader.js";
import toggleIconNavbar from "./components/toggleIconNavbar.js";
import readMore from "./components/readMore.js";
import {sendEmail, reset} from "./components/sendEmail.js";

//toggle icon navbar
toggleIconNavbar();

// scroll sections
stickyHeader();

// read more
readMore();

document.getElementById("contact-form").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the default form submission

    // Call your sendEmail function here
    sendEmail();

    // Optionally, you can call the reset function after email submission
    reset();
});
