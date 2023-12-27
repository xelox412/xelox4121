// document.getElementById("contactForm").addEventListener("submit", function(event) {
//     event.preventDefault();
    
//     // You can add logic here to handle form submission, e.g., sending data to a server.
//     alert("Form submitted! (Note: This is a dummy alert. In a real scenario, you would handle form data differently.)");
// });

document.getElementById("openModalBtn").addEventListener("click", function() {
    document.getElementById("modal").style.display = "block";
});

document.getElementById("closeModalBtn").addEventListener("click", function() {
    document.getElementById("modal").style.display = "none";
});

document.getElementById("requestForm").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Form submitted! (Note: This is a dummy alert. In a real scenario, you would handle form data differently.)");
    document.getElementById("modal").style.display = "none";
});
