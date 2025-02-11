// Show sections on sidebar click
function showSection(section) {
    document.querySelectorAll("section").forEach(sec => sec.classList.add("hidden"));
    document.getElementById(section).classList.remove("hidden");
}

// Toggle Dark Mode
function changeTheme() {
    document.body.classList.toggle("dark-mode");
}

// Fetch Users
async function fetchUsers() {
    const snapshot = await db.collection("users").get();
    document.getElementById("totalUsers").innerText = snapshot.size;
}

// Fetch Tasks
async function fetchTasks() {
    const snapshot = await db.collection("tasks").get();
    document.getElementById("activeTasks").innerText = snapshot.size;
}

// Fetch Balance
async function fetchBalance() {
    const snapshot = await db.collection("users").get();
    let totalBalance = 0;
    snapshot.forEach(doc => totalBalance += doc.data().balance || 0);
    document.getElementById("totalBalance").innerText = totalBalance;
}

// Initialize Dashboard Data
fetchUsers();
fetchTasks();
fetchBalance();
