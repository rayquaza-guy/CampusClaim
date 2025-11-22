const firebaseConfig = {
  apiKey: "AIzaSyB7C3gK1b1JyPef4POO424WLO3Fq5zzCYk",
  authDomain: "campusclaim-66cc9.firebaseapp.com",
  projectId: "campusclaim-66cc9",
  storageBucket: "campusclaim-66cc9.firebasestorage.app",
  messagingSenderId: "713802161418",
  appId: "1:713802161418:web:779d640618ed7944216ef3"
};
if (!window.firebase) {
  console.error('Firebase SDK not loaded. Make sure you included the firebase scripts in your HTML.');
} else {
  if (!firebase.apps || !firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }
}