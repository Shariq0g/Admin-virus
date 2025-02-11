// Firebase configuration
const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_PROJECT.firebaseapp.com",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_PROJECT.appspot.com",
    messagingSenderId: "YOUR_SENDER_ID",
    appId: "YOUR_APP_ID"
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
