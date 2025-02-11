import { db, collection, getDocs, addDoc, deleteDoc, doc } from "./firebaseConfig.js";

// ** Show Pages in Admin Panel **
function showPage(pageId) {
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });
    document.getElementById(pageId).classList.add('active');
}

// ** Load Dashboard Data **
async function loadDashboard() {
    let totalUsers = 0;
    let totalBalance = 0;
    let activeTasks = 0;

    const usersSnapshot = await getDocs(collection(db, "users"));
    usersSnapshot.forEach(doc => {
        totalUsers++;
        totalBalance += doc.data().balance || 0;
    });

    const tasksSnapshot = await getDocs(collection(db, "tasks"));
    activeTasks = tasksSnapshot.size;

    document.getElementById("totalUsers").textContent = totalUsers;
    document.getElementById("totalBalance").textContent = totalBalance;
    document.getElementById("activeTasks").textContent = activeTasks;
}

// ** Load Users Data **
async function loadUsers() {
    const usersSnapshot = await getDocs(collection(db, "users"));
    let usersTable = document.querySelector("#usersTable tbody");
    usersTable.innerHTML = "";

    usersSnapshot.forEach(doc => {
        let user = doc.data();
        let row = `<tr>
            <td>${user.username}</td>
            <td>${user.balance}</td>
            <td><button onclick="deleteUser('${doc.id}')">Delete</button></td>
        </tr>`;
        usersTable.innerHTML += row;
    });
}

// ** Delete User **
async function deleteUser(userId) {
    await deleteDoc(doc(db, "users", userId));
    alert("User deleted!");
    loadUsers();
}

// ** Load Tasks Data **
async function loadTasks() {
    const tasksSnapshot = await getDocs(collection(db, "tasks"));
    let tasksTable = document.querySelector("#tasksTable tbody");
    tasksTable.innerHTML = "";

    tasksSnapshot.forEach(doc => {
        let task = doc.data();
        let row = `<tr>
            <td>${task.name}</td>
            <td>${task.timeLimit} mins</td>
            <td><button onclick="deleteTask('${doc.id}')">Delete</button></td>
        </tr>`;
        tasksTable.innerHTML += row;
    });
}

// ** Delete Task **
async function deleteTask(taskId) {
    await deleteDoc(doc(db, "tasks", taskId));
    alert("Task deleted!");
    loadTasks();
}

// ** Load All Data on Startup **
window.onload = function() {
    loadDashboard();
    loadUsers();
    loadTasks();
};
