// main.js

document.addEventListener("DOMContentLoaded", () => {
    // Login form logic
    const loginForm = document.getElementById("loginForm");
    if (loginForm) {
      loginForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const username = loginForm.username.value.trim();
        const password = loginForm.password.value.trim();
  
        if (username === "123" && password === "123") {
          window.location.href = "profile.html";
        } else {
          alert("Invalid credentials. Try 123/123.");
        }
      });
    }
  
    // Profile selection logic
    const profileCards = document.querySelectorAll(".profile-card");
    profileCards.forEach(card => {
      card.addEventListener("click", () => {
        // On clicking profile, go to listing page
        window.location.href = "listing.html";
      });
    });
  
    // Day selector logic on listing page
    const dayList = document.getElementById("dayList");
    if (dayList) {
      dayList.addEventListener("click", (e) => {
        if (e.target.tagName === "A") {
          e.preventDefault();
          // Remove active from all
          const allLinks = dayList.querySelectorAll("a");
          allLinks.forEach(link => link.classList.remove("active"));
          // Add active to clicked
          e.target.classList.add("active");
  
          // For now, we show the same table data for all days (no changes needed)
          // If needed, you could dynamically change table content here.
        }
      });
    }
  });
  