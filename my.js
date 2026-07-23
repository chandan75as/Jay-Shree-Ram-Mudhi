// ==========================================
// FIREBASE CONFIGURATION (Global)
// ==========================================

const firebaseConfig = {
    apiKey: "AIzaSyCVGhebdM8r-N82dYlOtXuvJghM3FK_iwc",
    authDomain: "jay-shree-ram-mudhi.firebaseapp.com",
    databaseURL: "https://jay-shree-ram-mudhi-default-rtdb.firebaseio.com",
    projectId: "jay-shree-ram-mudhi",
    storageBucket: "jay-shree-ram-mudhi.firebasestorage.app",
    messagingSenderId: "146218859864",
    appId: "1:146218859864:web:56a4dac1c0c20a3281b92d",
    measurementId: "G-Z86Z8VSQKT"
};

// Initialize Firebase
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

// Global database objects jo har file use kar sakti hai
const database = firebase.database();
const dbRef = database.ref('appData/mainState');

console.log("Firebase Connected via my.js");
