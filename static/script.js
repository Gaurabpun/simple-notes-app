// Run when page loads
document.addEventListener("DOMContentLoaded", function () {

    // Select elements
    const textarea = document.getElementById("note");
    const form = document.querySelector("form");

    // 1. Auto-focus textarea
    if (textarea) {
        textarea.focus();
    }

    // 2 & 3. Form submission handling
    form.addEventListener("submit", function (event) {

        // Get trimmed value
        const noteValue = textarea.value.trim();

        // 3. Prevent empty submission (frontend validation)
        if (noteValue === "") {
            event.preventDefault(); // stop form submission
            alert("Please enter a note!");
            return;
        }

        // 2. Clear textarea after submit (small UX improvement)
        textarea.value = "";
    });

});