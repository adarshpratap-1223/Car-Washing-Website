<script>
// Feedback form submission (basic message simulation)
document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault(); // prevent actual submission
    alert("Thank you for your feedback!");
    this.reset(); // reset form fields
});

// Payment button actions
const payButtons = document.querySelectorAll(".price-table button");
payButtons.forEach(button => {
    button.addEventListener("click", () => {
        alert("Redirecting to payment gateway...");
    });
});
</script>
