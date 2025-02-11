function showPage(pageId) {
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });
    document.getElementById(pageId).classList.add('active');
}

function changeTheme() {
    document.body.classList.toggle('dark-theme');
}

function addTask() {
    alert("Task adding feature coming soon...");
}
