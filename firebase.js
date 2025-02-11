// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBj_XFwSi9CATeMpMZdKQoQRd-rBt-85iE",
    authDomain: "virus-945ac.firebaseapp.com",
    projectId: "virus-945ac",
    storageBucket: "virus-945ac.firebasestorage.app",
    messagingSenderId: "248199210206",
    appId: "1:248199210206:web:a2053fd638d8274103ce4f"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();

// GitHub Login
function loginWithGitHub() {
    var provider = new firebase.auth.GithubAuthProvider();
    auth.signInWithPopup(provider).then(result => {
        console.log("User logged in:", result.user);
        document.querySelector("button").style.display = "none";
    }).catch(error => {
        console.error("Login failed", error);
    });
}

// Logout
function logout() {
    auth.signOut().then(() => {
        console.log("User logged out");
        location.reload();
    });
}
