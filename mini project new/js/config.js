<script type="module">
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyBeidAMj8prWJ32xojfYvdMOMmExV1Tanc",
    authDomain: "food-waste-management-sy-7968f.firebaseapp.com",
    projectId: "food-waste-management-sy-7968f",
    storageBucket: "food-waste-management-sy-7968f.appspot.com",
    messagingSenderId: "393230194704",
    appId: "1:393230194704:web:c99810c6e398efa9edd295",
    measurementId: "G-Y3GKLLL743"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
</script>
// Initialize Firebase
firebase.initializeApp(firebaseConfig);