// Scroll to biography section

const learnMoreBtn = document.getElementById("learnMoreBtn");

learnMoreBtn.addEventListener("click", function () {
    document.getElementById("biography").scrollIntoView({
        behavior: "smooth"
    });
});


// Show inspirational message

const messageBtn = document.getElementById("messageBtn");
const message = document.getElementById("message");

messageBtn.addEventListener("click", function () {

    message.textContent =
        "Dream big, work hard, stay curious, and never stop learning!";

});
