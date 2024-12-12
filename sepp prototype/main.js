// Define choreData globally without "Bathroom Cleaning" and "Grocery Shopping" initially
const choreData = {
  "Week1": {
    "Monday": [
      {"Chore": "Vacuuming", "Student": "Rishab", "Time": "8:00 AM"},
      {"Chore": "Laundry", "Student": "Monem", "Time": "10:00 AM"},
      {"Chore": "Lunch Cooking", "Student": "Alagappan", "Time": "1:00 PM"},
      {"Chore": "Dinner Cooking", "Student": "Haseeb", "Time": "5:00 PM"},
      {"Chore": "Dishwashing", "Student": "Rishab", "Time": "7:00 PM"},
      {"Chore": "Trash Disposal", "Student": "Monem", "Time": "9:00 PM"}
    ],
    "Tuesday": [
      {"Chore": "Vacuuming", "Student": "Monem", "Time": "10:00 AM"},
      {"Chore": "Laundry", "Student": "Haseeb", "Time": "12:00 PM"},
      {"Chore": "Lunch Cooking", "Student": "Rishab", "Time": "1:00 PM"},
      {"Chore": "Dinner Cooking", "Student": "Alagappan", "Time": "5:00 PM"},
      {"Chore": "Dishwashing", "Student": "Haseeb", "Time": "7:00 PM"},
      {"Chore": "Trash Disposal", "Student": "Alagappan", "Time": "9:00 PM"}
    ],
    "Wednesday": [
      {"Chore": "Laundry", "Student": "Alagappan", "Time": "11:00 PM"},
      {"Chore": "Vacuuming", "Student": "Haseeb", "Time": "12:00 AM"},
      {"Chore": "Lunch Cooking", "Student": "Monem", "Time": "1:00 PM"},
      {"Chore": "Dinner Cooking", "Student": "Rishab", "Time": "5:00 PM"},
      {"Chore": "Grocery Shopping", "Student": "All Housemates", "Time": "6:00 PM"},
      {"Chore": "Dishwashing", "Student": "Alagappan", "Time": "8:00 PM"},
      {"Chore": "Trash Disposal", "Student": "Haseeb", "Time": "9:00 PM"}
    ],
    "Thursday": [
      {"Chore": "Laundry", "Student": "Rishab", "Time": "9:00 AM"},
      {"Chore": "Vacuuming", "Student": "Alagappan", "Time": "11:00 AM"},
      {"Chore": "Lunch Cooking", "Student": "Haseeb", "Time": "1:00 PM"},
      {"Chore": "Dinner Cooking", "Student": "Monem", "Time": "5:00 PM"},
      {"Chore": "Dishwashing", "Student": "Monem", "Time": "7:00 PM"},
      {"Chore": "Trash Disposal", "Student": "Rishab", "Time": "9:00 PM"}
    ],
    "Friday": [
      {"Chore": "Vacuuming", "Student": "Rishab", "Time": "9:00 AM"},
      {"Chore": "Laundry", "Student": "Monem", "Time": "10:00 AM"},
      {"Chore": "Lunch Cooking", "Student": "Alagappan", "Time": "1:00 PM"},
      {"Chore": "Bathroom Cleaning", "Student": "Haseeb", "Time": "4:00 PM"}, 
      {"Chore": "Dinner Cooking", "Student": "Haseeb", "Time": "5:00 PM"},
      {"Chore": "Dishwashing", "Student": "Rishab", "Time": "7:00 PM"},
      {"Chore": "Trash Disposal", "Student": "Monem", "Time": "9:00 PM"}// Weekly Chore
    ],
    "Saturday": [
      {"Chore": "Vacuuming", "Student": "Monem", "Time": "10:00 AM"},
      {"Chore": "Laundry", "Student": "Haseeb", "Time": "12:00 PM"},
      {"Chore": "Lunch Cooking", "Student": "Rishab", "Time": "1:00 PM"},
      {"Chore": "Dinner Cooking", "Student": "Alagappan", "Time": "5:00 PM"},
      {"Chore": "Dishwashing", "Student": "Haseeb", "Time": "7:00 PM"},
      {"Chore": "Trash Disposal", "Student": "Alagappan", "Time": "9:00 PM"}
    ],
    "Sunday": [
      {"Chore": "Vacuuming", "Student": "Alagappan", "Time": "11:00 AM"},
      {"Chore": "Laundry", "Student": "Haseeb", "Time": "12:00 PM"},
      {"Chore": "Lunch Cooking", "Student": "Monem", "Time": "1:00 PM"},
      {"Chore": "Dinner Cooking", "Student": "Rishab", "Time": "5:00 PM"},
      {"Chore": "Dishwashing", "Student": "Alagappan", "Time": "7:00 PM"},
      {"Chore": "Trash Disposal", "Student": "Haseeb", "Time": "9:00 PM"}// Weekly Chore
    ]
  },
  "Week2": {
    "Monday": [
      {"Chore": "Vacuuming", "Student": "Monem", "Time": "10:00 AM"},
      {"Chore": "Laundry", "Student": "Haseeb", "Time": "12:00 PM"},
      {"Chore": "CLunch Cooking", "Student": "Rishab", "Time": "1:00 PM"},
      {"Chore": "Dinner Cooking", "Student": "Alagappan", "Time": "5:00 PM"},
      {"Chore": "Dishwashing", "Student": "Haseeb", "Time": "7:00 PM"},
      {"Chore": "Trash Disposal", "Student": "Alagappan", "Time": "9:00 PM"}
    ],
    "Tuesday": [
      {"Chore": "Laundry", "Student": "Alagappan", "Time": "11:00 PM"},
      {"Chore": "Vacuuming", "Student": "Haseeb", "Time": "12:00 AM"},
      {"Chore": "Lunch Cooking", "Student": "Monem", "Time": "1:00 PM"},
      {"Chore": "Dinner Cooking", "Student": "Rishab", "Time": "5:00 PM"},
      {"Chore": "Dishwashing", "Student": "Alagappan", "Time": "8:00 PM"},
      {"Chore": "Trash Disposal", "Student": "Haseeb", "Time": "9:00 PM"}
    ],
    "Wednesday": [
      {"Chore": "Laundry", "Student": "Rishab", "Time": "9:00 AM"},
      {"Chore": "Vacuuming", "Student": "Alagappan", "Time": "11:00 AM"},
      {"Chore": "Lunch Cooking", "Student": "Haseeb", "Time": "1:00 PM"},
      {"Chore": "Dinner Cooking", "Student": "Monem", "Time": "4:00 PM"},
      {"Chore": "Grocery Shopping", "Student": "All Housemates", "Time": "6:00 PM"},
      {"Chore": "Dishwashing", "Student": "Rishab", "Time": "8:00 PM"},
      {"Chore": "Trash Disposal", "Student": "Monem", "Time": "9:00 PM"}
    ],
    "Thursday": [
      {"Chore": "Vacuuming", "Student": "Rishab", "Time": "8:00 AM"},
      {"Chore": "Laundry", "Student": "Monem", "Time": "10:00 AM"},
      {"Chore": "Lunch Cooking", "Student": "Alagappan", "Time": "1:00 PM"},
      {"Chore": "Dinner Cooking", "Student": "Haseeb", "Time": "5:00 PM"},
      {"Chore": "Dishwashing", "Student": "Rishab", "Time": "8:00 PM"},
      {"Chore": "Trash Disposal", "Student": "Monem", "Time": "9:00 PM"}
    ],
    "Friday": [
      {"Chore": "Vacuuming", "Student": "Monem", "Time": "10:00 AM"},
      {"Chore": "Laundry", "Student": "Haseeb", "Time": "12:00 PM"},
      {"Chore": "Lunch Cooking", "Student": "Rishab", "Time": "1:00 PM"},
      {"Chore": "Bathroom Cleaning", "Student": "Alagappan", "Time": "3:00 PM"},
      {"Chore": "Dinner Cooking", "Student": "Alagappan", "Time": "5:00 PM"},
      {"Chore": "Dishwashing", "Student": "Haseeb", "Time": "7:00 PM"},
      {"Chore": "Trash Disposal", "Student": "Alagappan", "Time": "9:00 PM"} // Weekly Chore
    ],
    "Saturday": [
      {"Chore": "Vacuuming", "Student": "Alagappan", "Time": "11:00 AM"},
      {"Chore": "Laundry", "Student": "Haseeb", "Time": "12:00 PM"},
      {"Chore": "Lunch Cooking", "Student": "Monem", "Time": "1:00 PM"},
      {"Chore": "Dinner Cooking", "Student": "Rishab", "Time": "5:00 PM"},
      {"Chore": "Dishwashing", "Student": "Alagappan", "Time": "7:00 PM"},
      {"Chore": "Trash Disposal", "Student": "Haseeb", "Time": "9:00 PM"}
    ],
    "Sunday": [
      {"Chore": "Laundry", "Student": "Rishab", "Time": "9:00 AM"},
      {"Chore": "Vacuuming", "Student": "Alagappan", "Time": "11:00 AM"},
      {"Chore": "Lunch Cooking", "Student": "Haseeb", "Time": "1:00 PM"},
      {"Chore": "Dinner Cooking", "Student": "Monem", "Time": "5:00 PM"},
      {"Chore": "Dishwashing", "Student": "Rishab", "Time": "7:00 PM"},
      {"Chore": "Trash Disposal", "Student": "Monem", "Time": "9:00 PM"} // Weekly Chore
    ]
  },
  "Week3": {
    "Monday": [
      {"Chore": "Vacuuming", "Student": "Alagappan", "Time": "11:00 AM"},
      {"Chore": "Laundry", "Student": "Haseeb", "Time": "12:00 PM"},
      {"Chore": "Lunch Cooking", "Student": "Monem", "Time": "1:00 PM"},
      {"Chore": "Dinner Cooking", "Student": "Rishab", "Time": "5:00 PM"},
      {"Chore": "Dishwashing", "Student": "Alagappan", "Time": "7:00 PM"},
      {"Chore": "Trash Disposal", "Student": "Haseeb", "Time": "9:00 PM"}
    ],
    "Tuesday": [
      {"Chore": "Laundry", "Student": "Rishab", "Time": "9:00 AM"},
      {"Chore": "Vacuuming", "Student": "Alagappan", "Time": "11:00 AM"},
      {"Chore": "Lunch Cooking", "Student": "Haseeb", "Time": "1:00 PM"},
      {"Chore": "Dinner Cooking", "Student": "Monem", "Time": "5:00 PM"},
      {"Chore": "Dishwashing", "Student": "Rishab", "Time": "7:00 PM"},
      {"Chore": "Trash Disposal", "Student": "Monem", "Time": "9:00 PM"}
    ],
    "Wednesday": [
      {"Chore": "Vacuuming", "Student": "Rishab", "Time": "8:00 AM"},
      {"Chore": "Laundry", "Student": "Monem", "Time": "10:00 AM"},
      {"Chore": "Lunch Cooking", "Student": "Alagappan", "Time": "12:00 PM"},
      {"Chore": "Dinner Cooking", "Student": "Haseeb", "Time": "4:00 PM"},
      {"Chore": "Grocery Shopping", "Student": "All Housemates", "Time": "5:00 PM"},
      {"Chore": "Dishwashing", "Student": "Rishab", "Time": "7:00 PM"},
      {"Chore": "Trash Disposal", "Student": "Monem", "Time": "9:00 PM"}
    ],
    "Thursday": [
      {"Chore": "Vacuuming", "Student": "Monem", "Time": "10:00 AM"},
      {"Chore": "Laundry", "Student": "Haseeb", "Time": "12:00 PM"},
      {"Chore": "Lunch Cooking", "Student": "Rishab", "Time": "1:00 PM"},
      {"Chore": "Dinner Cooking", "Student": "Alagappan", "Time": "5:00 PM"},
      {"Chore": "Dishwashing", "Student": "Haseeb", "Time": "7:00 PM"},
      {"Chore": "Trash Disposal", "Student": "Alagappan", "Time": "9:00 PM"}
    ],
    "Friday": [
      {"Chore": "Bathroom Cleaning", "Student": "Rishab", "Time": "8:00 AM"},
      {"Chore": "Vacuuming", "Student": "Alagappan", "Time": "11:00 AM"},
      {"Chore": "Laundry", "Student": "Haseeb", "Time": "12:00 PM"},
      {"Chore": "Lunch Cooking", "Student": "Monem", "Time": "1:00 PM"},
      {"Chore": "Dinner Cooking", "Student": "Rishab", "Time": "5:00 PM"},
      {"Chore": "Dishwashing", "Student": "Alagappan", "Time": "7:00 PM"},
      {"Chore": "Trash Disposal", "Student": "Haseeb", "Time": "9:00 PM"} 
    ],
    "Saturday": [
      {"Chore": "Laundry", "Student": "Rishab", "Time": "9:00 AM"},
      {"Chore": "Vacuuming", "Student": "Alagappan", "Time": "11:00 AM"},
      {"Chore": "Lunch Cooking", "Student": "Haseeb", "Time": "1:00 PM"},
      {"Chore": "Dinner Cooking", "Student": "Monem", "Time": "5:00 PM"},
      {"Chore": "Dishwashing", "Student": "Rishab", "Time": "7:00 PM"},
      {"Chore": "Trash Disposal", "Student": "Monem", "Time": "9:00 PM"}
    ],
    "Sunday": [
      {"Chore": "Vacuuming", "Student": "Rishab", "Time": "8:00 AM"},
      {"Chore": "Laundry", "Student": "Monem", "Time": "10:00 AM"},
      {"Chore": "Lunch Cooking", "Student": "Alagappan", "Time": "1:00 PM"},
      {"Chore": "Dinner Cooking", "Student": "Haseeb", "Time": "5:00 PM"},
      {"Chore": "Dishwashing", "Student": "Monem", "Time": "7:00 PM"},
      {"Chore": "Trash Disposal", "Student": "Rishab", "Time": "9:00 PM"} // Weekly Chore
    ]
  },
  "Week4": {
    "Monday": [
      {"Chore": "Laundry", "Student": "Rishab", "Time": "9:00 AM"},
      {"Chore": "Vacuuming", "Student": "Alagappan", "Time": "11:00 AM"},
      {"Chore": "Lunch Cooking", "Student": "Haseeb", "Time": "12:00 PM"},
      {"Chore": "Dinner Cooking", "Student": "Monem", "Time": "5:00 PM"},
      {"Chore": "Dishwashing", "Student": "Rishab", "Time": "7:00 PM"},
      {"Chore": "Trash Disposal", "Student": "Monem", "Time": "9:00 PM"}
    ],
    "Tuesday": [
      {"Chore": "Vacuuming", "Student": "Rishab", "Time": "8:00 AM"},
      {"Chore": "Laundry", "Student": "Monem", "Time": "10:00 AM"},
      {"Chore": "Lunch Cooking", "Student": "Alagappan", "Time": "1:00 PM"},
      {"Chore": "Dinner Cooking", "Student": "Haseeb", "Time": "5:00 PM"},
      {"Chore": "Dishwashing", "Student": "Mounem", "Time": "7:00 PM"},
      {"Chore": "Trash Disposal", "Student": "Rishab", "Time": "9:00 PM"}
    ],
    "Wednesday": [
      {"Chore": "Vacuuming", "Student": "Monem", "Time": "10:00 AM"},
      {"Chore": "Laundry", "Student": "Haseeb", "Time": "12:00 PM"},
      {"Chore": "Lunch Cooking", "Student": "Rishab", "Time": "1:00 PM"},
      {"Chore": "Grocery Shopping", "Student": "All Housemates", "Time": "2:00 PM"},
      {"Chore": "Dinner Cooking", "Student": "Alagappan", "Time": "5:00 PM"},
      {"Chore": "Dishwashing", "Student": "Haseeb", "Time": "7:00 PM"},
      {"Chore": "Trash Disposal", "Student": "Alagappan", "Time": "9:00 PM"}
    ],
    "Thursday": [
      {"Chore": "Bathroom Cleaning", "Student": "Rishab", "Time": "8:00 AM"},
      {"Chore": "Vacuuming", "Student": "Alagappan", "Time": "11:00 AM"},
      {"Chore": "Laundry", "Student": "Haseeb", "Time": "12:00 PM"},
      {"Chore": "Lunch Cooking", "Student": "Monem", "Time": "1:00 PM"},
      {"Chore": "Dinner Cooking", "Student": "Rishab", "Time": "5:00 PM"},
      {"Chore": "Dishwashing", "Student": "Alagappan", "Time": "7:00 PM"},
      {"Chore": "Trash Disposal", "Student": "Haseeb", "Time": "9:00 PM"} 
    ],
  
    "Friday": [
      {"Chore": "Bathroom Cleaning", "Student": "Monem", "Time": "10:00 AM"},
      {"Chore": "Laundry", "Student": "Rishab", "Time": "8:00 AM"},
      {"Chore": "Vacuuming", "Student": "Alagappan", "Time": "11:00 AM"},
      {"Chore": "Lunch Cooking", "Student": "Haseeb", "Time": "12:00 PM"},
      {"Chore": "Dinner Cooking", "Student": "Monem", "Time": "5:00 PM"},
      {"Chore": "Dishwashing", "Student": "Rishab", "Time": "7:00 PM"},
      {"Chore": "Trash Disposal", "Student": "Monem", "Time": "9:00 PM"}
    ],
    "Saturday":[
      {"Chore": "Vacuuming", "Student": "Rishab", "Time": "8:00 AM"},
      {"Chore": "Laundry", "Student": "Monem", "Time": "10:00 AM"},
      {"Chore": "Lunch Cooking", "Student": "Alagappan", "Time": "12:00 PM"},
      {"Chore": "Dinner Cooking", "Student": "Haseeb", "Time": "5:00 PM"},
      {"Chore": "Dishwashing", "Student": "Monem", "Time": "7:00 PM"},
      {"Chore": "Trash Disposal", "Student": "Rishab", "Time": "9:00 PM"}
    ],
    "Sunday":[
      {"Chore": "Vacuuming", "Student": "Monem", "Time": "10:00 AM"},
      {"Chore": "Laundry", "Student": "Haseeb", "Time": "12:00 PM"},
      {"Chore": "Lunch Cooking", "Student": "Rishab", "Time": "1:00 PM"},
      {"Chore": "Dinner Cooking", "Student": "Alagappan", "Time": "5:00 PM"},
      {"Chore": "Dishwashing", "Student": "Haseeb", "Time": "7:00 PM"},
      {"Chore": "Trash Disposal", "Student": "Alagappan", "Time": "9:00 PM"}
    ]
  }
};

// List of available students for random assignment
const students = ["Rishab", "Monem", "Alagappan", "Haseeb"];

// Execute after the DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {
  // Handle Login Form
  const loginForm = document.getElementById("loginForm");
  const errorMessage = document.getElementById("errorMessage");
  if (loginForm) {
    loginForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const username = loginForm.username.value.trim();
      const password = loginForm.password.value.trim();
      
      if (username === "123" && password === "123") {
        if (errorMessage) errorMessage.style.display = "none";
        window.location.href = "profile.html";
      } else {
        if (errorMessage) errorMessage.style.display = "block";
      }
    });
  }

  // Handle Password Recovery Form (Optional)
  const recoveryForm = document.getElementById("recoveryForm");
  const recoveryError = document.getElementById("recoveryError");
  const recoverySuccess = document.getElementById("recoverySuccess");
  if (recoveryForm) {
    recoveryForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const email = recoveryForm.email.value.trim();
      // Simple email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (emailRegex.test(email)) {
        if (recoveryError) recoveryError.style.display = "none";
        if (recoverySuccess) recoverySuccess.style.display = "block";
      } else {
        if (recoverySuccess) recoverySuccess.style.display = "none";
        if (recoveryError) recoveryError.style.display = "block";
      }
    });
  }

  // Display Profile Name
  const profileNameDisplay = document.getElementById("profileNameDisplay");
  if (profileNameDisplay) {
    const storedName = localStorage.getItem("selectedProfileName");
    profileNameDisplay.textContent = storedName || "User";
  }

  // Initialize Individual Section
  initializeIndividualSection();

  // Initialize Group Section
  initializeGroupSection();
});

// Function to initialize the Individual-Based Chore Display
function initializeIndividualSection() {
  const individualWeekButtons = document.getElementById("individualWeekButtons");
  const individualDayButtonsContainer = document.getElementById("individualDayButtons");
  const individualMessage = document.getElementById("individualMessage");
  
  let individualCurrentWeek = null;
  let individualCurrentDay = null;

  // Event Listener for Individual Week Buttons with Toggle Functionality
  if (individualWeekButtons) {
    individualWeekButtons.addEventListener("click", (e) => {
      if (e.target.tagName === "BUTTON") {
        const selectedWeek = e.target.id.replace("individualWeek", "Week");
        
        if (individualCurrentWeek === selectedWeek) {
          // If the clicked week is already active, deactivate it and hide day buttons
          Array.from(individualWeekButtons.children).forEach(btn => btn.classList.remove("active"));
          individualDayButtonsContainer.style.display = 'none';
          individualMessage.style.display = 'none';
          individualCurrentWeek = null;
          individualCurrentDay = null;
        } else {
          // Activate the clicked week and show day buttons
          Array.from(individualWeekButtons.children).forEach(btn => btn.classList.remove("active"));
          e.target.classList.add("active");
          
          individualCurrentWeek = selectedWeek;
          showIndividualDays(selectedWeek);
        }
      }
    });
  }

  // Function to show day buttons for the individual section
  function showIndividualDays(week) {
    individualDayButtonsContainer.innerHTML = '';
    individualDayButtonsContainer.style.display = 'flex';
    individualCurrentDay = null;

    const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    days.forEach(day => {
      const btn = document.createElement('button');
      btn.textContent = day;
      btn.addEventListener("click", () => {
        // Toggle active class
        Array.from(individualDayButtonsContainer.children).forEach(b => b.classList.remove("active"));
        btn.classList.add("active");

        individualCurrentDay = day;
        displayIndividualChores(week, day);
      });
      individualDayButtonsContainer.appendChild(btn);
    });
  }

  // Function to display individual chores
  function displayIndividualChores(week, day) {
    const profileName = localStorage.getItem("selectedProfileName") || "User";
    const choresForDay = choreData[week] && choreData[week][day] ? choreData[week][day] : [];

    // Filter chores for this individual
    const individualChores = choresForDay.filter(chore => 
      chore.Student === profileName || chore.Student === "All Housemates"
    );

    if (individualChores.length === 0) {
      individualMessage.innerHTML = `<p>No chores assigned to ${profileName} on ${day} of ${week}.</p>`;
    } else {
      // Create a list of chores
      let choreList = `<h3>Chores for ${profileName} on ${day}, ${week}</h3><ul>`;
      individualChores.forEach(ch => {
        choreList += `<li><strong>${ch.Chore}</strong> at ${ch.Time}</li>`;
      });
      choreList += `</ul>`;
      individualMessage.innerHTML = choreList;
    }

    individualMessage.style.display = 'block';
  }

  // Note: Removed initialization with the first week active to allow toggle functionality without pre-selection
}

// Function to initialize the Group-Based Chore Display
function initializeGroupSection() {
  const groupWeekList = document.getElementById("groupWeekList");
  const groupDayList = document.getElementById("groupDayList");
  const groupChoreTableBody = document.querySelector("#groupChoreTable tbody");
  
  let groupCurrentWeek = "Week1";
  let groupCurrentDay = "Monday";

  // Event Listener for Group Week List
  if (groupWeekList) {
    groupWeekList.addEventListener("click", (e) => {
      if (e.target.tagName === "A") {
        e.preventDefault();
        const selectedWeek = e.target.dataset.week; // e.g., "W1"
        groupCurrentWeek = `Week${selectedWeek.replace("W", "")}`;
        
        // Toggle active class
        Array.from(groupWeekList.querySelectorAll("a")).forEach(link => link.classList.remove("active"));
        e.target.classList.add("active");
        
        updateGroupChoresTable(groupCurrentWeek, groupCurrentDay);
      }
    });
  }

  // Event Listener for Group Day List
  if (groupDayList) {
    groupDayList.addEventListener("click", (e) => {
      if (e.target.tagName === "A") {
        e.preventDefault();
        const selectedDay = e.target.dataset.day; // e.g., "Mon"
        
        // Toggle active class
        Array.from(groupDayList.querySelectorAll("a")).forEach(link => link.classList.remove("active"));
        e.target.classList.add("active");
        
        // Map short day to full day name
        const dayMap = {
          "Mon": "Monday",
          "Tue": "Tuesday",
          "Wed": "Wednesday",
          "Thu": "Thursday",
          "Fri": "Friday",
          "Sat": "Saturday",
          "Sun": "Sunday"
        };
        groupCurrentDay = dayMap[selectedDay];
        updateGroupChoresTable(groupCurrentWeek, groupCurrentDay);
      }
    });
  }

  // Initial Population of Group Chores Table
  updateGroupChoresTable(groupCurrentWeek, groupCurrentDay);
}

// Function to update the Group Chores Table
function updateGroupChoresTable(week, day) {
  const choresForDay = choreData[week] && choreData[week][day] ? choreData[week][day] : [];
  
  const groupChoreTableBody = document.querySelector("#groupChoreTable tbody");

  if (!groupChoreTableBody) return;

  if (choresForDay.length === 0) {
    groupChoreTableBody.innerHTML = "<tr><td colspan='3'>No chores found for this selection</td></tr>";
    return;
  }

  let rows = "";
  choresForDay.forEach(ch => {
    // If Student is not assigned, assign a random student
    let student = ch.Student;
    if (!student || student.trim() === "") {
      student = students[Math.floor(Math.random() * students.length)];
    }
    rows += `
      <tr>
        <td>${ch.Chore}</td>
        <td>${student}</td>
        <td>${ch.Time}</td>
      </tr>`;
  });

  groupChoreTableBody.innerHTML = rows;
}
