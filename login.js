let users = [];

// Load users from local storage on page load
window.onload = function () {
  loadUsers();
  if (window.location.pathname.endsWith("admin_customer.html")) {
    showUserList();
  }
};

// Load users from local storage
function loadUsers() {
  let storedUsers = localStorage.getItem("users");
  if (storedUsers) {
    users = JSON.parse(storedUsers);
  }
}

// Save users to local storage
function saveUsers() {
  localStorage.setItem("users", JSON.stringify(users));
}

// Register a new user
function registerUser() {
  let username = document.getElementById("username").value;
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  let confirmPassword = document.getElementById("confirm-password").value;

  if (!username || !email || !password || !confirmPassword) {
    alert("Please fill in all fields.");
    return;
  }

  if (password !== confirmPassword) {
    alert("Passwords do not match.");
    return;
  }

  if (users.some(user => user.username === username)) {
    alert("Username already exists. Please choose another.");
    return;
  }

  users.push({ username: username, email: email, password: password });
  saveUsers();
  alert("Registration successful! Please log in.");
  window.location.href = "login.html";
}

// Authenticate user on login
// Authenticate user on login
function loginUser() {
  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;

  let user = users.find(user => user.username === username && user.password === password);

  if (user) {
    if (user.username === "admin" && user.password === "123") {
      // Redirect to admin panel
      window.location.href = "admin_dashboard.html";
    } else {
      // Redirect to user dashboard or home page
      window.location.href = "index.html";
    }
  } else {
    alert("Invalid username or password.");
  }
}

// Show user list in the admin panel
function showUserList() {
  let usersTableBody = document.getElementById("users-table-body");
  usersTableBody.innerHTML = "";

  users.forEach((user, index) => {
    let row = usersTableBody.insertRow();
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    let cell3 = row.insertCell(2);

    cell1.textContent = user.username;
    cell2.textContent = user.email;

    let deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.onclick = function () {
      deleteUser(index);
    };

    cell3.appendChild(deleteButton);
  });
}

// Delete a user from the admin panel
function deleteUser(index) {
  if (confirm("Are you sure you want to delete this user?")) {
    users.splice(index, 1);
    saveUsers();
    showUserList();
  }
}

// Logout and clear user data
function logout() {
  localStorage.removeItem("users");
  window.location.href = "login.html"; // Redirect to login page
}
