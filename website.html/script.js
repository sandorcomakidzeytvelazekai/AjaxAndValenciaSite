document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.getElementById("hamburger");
    const navMenu = document.getElementById("navMenu");
    const teamPlayersBtn = document.getElementById("teamPlayersBtn");
  
    const mainContent = document.getElementById("mainContent");
  
    // Hamburger menu toggle
    hamburger.addEventListener("click", () => {
      navMenu.style.display = navMenu.style.display === "flex" ? "none" : "flex";
    });
  
    // Team Players Button Action
    teamPlayersBtn.addEventListener("click", () => {
      mainContent.innerHTML = `
        <div id="teamPlayersPage">
          <button id="submitUserBtn">Submit User</button>
          <div id="userList"></div>
        </div>
      `;
  
      const submitUserBtn = document.getElementById("submitUserBtn");
      const userList = document.getElementById("userList");
  
      // Submit User Button Action
      submitUserBtn.addEventListener("click", () => {
        const discordName = prompt("Enter Discord Name (User#Display):");
        if (discordName) {
          const userElement = document.createElement("div");
          userElement.className = "user";
          userElement.textContent = discordName;
          userList.appendChild(userElement);
        }
      });
    });
  });
  