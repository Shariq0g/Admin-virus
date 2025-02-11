document.addEventListener("DOMContentLoaded", function() {
    loadDashboard();
    document.getElementById("dashboard-link").addEventListener("click", loadDashboard);
    document.getElementById("users-link").addEventListener("click", loadUsers);
    document.getElementById("tasks-link").addEventListener("click", loadTasks);
});

// 📌 Load Dashboard Data
function loadDashboard() {
    document.getElementById("users-section").classList.add("hidden");
    document.getElementById("tasks-section").classList.add("hidden");

    db.collection("users").get().then(snapshot => {
        document.getElementById("totalUsers").innerText = snapshot.size;
    });

    db.collection("tasks").where("status", "==", "active").get().then(snapshot => {
        document.getElementById("activeTasks").innerText = snapshot.size;
    });

    db.collection("users").get().then(snapshot => {
        let totalBalance = 0;
        snapshot.forEach(doc => {
            totalBalance += doc.data().balance || 0;
        });
        document.getElementById("totalBalance").innerText = totalBalance;
    });
}

// 📌 Load Users List
function loadUsers() {
    document.getElementById("users-section").classList.remove("hidden");
    document.getElementById("tasks-section").classList.add("hidden");

    let usersTable = document.getElementById("usersTable");
    usersTable.innerHTML = "";

    db.collection("users").get().then(snapshot => {
        snapshot.forEach(doc => {
            let data = doc.data();
            let row = `<tr><td>${data.username}</td><td>${data.balance || 0}</td></tr>`;
            usersTable.innerHTML += row;
        });
    });
}

// 📌 Load Tasks
function loadTasks() {
    document.getElementById("users-section").classList.add("hidden");
    document.getElementById("tasks-section").classList.remove("hidden");

    let tasksList = document.getElementById("tasksList");
    tasksList.innerHTML = "";

    db.collection("tasks").get().then(snapshot => {
        snapshot.forEach(doc => {
            let data = doc.data();
            let item = `<li>${data.title} - ${data.status}</li>`;
            tasksList.innerHTML += item;
        });
    });
}

// 📌 Add Task
function addTask() {
    let taskTitle = prompt("Enter Task Title:");
    if (!taskTitle) return;

    db.collection("tasks").add({
        title: taskTitle,
        status: "active",
        createdAt: firebase.firestore.FieldValue.serverTimestamp()
    }).then(() => {
        alert("Task Added!");
        loadTasks();
    }).catch(error => {
        console.error("Error adding task:", error);
    });
}
