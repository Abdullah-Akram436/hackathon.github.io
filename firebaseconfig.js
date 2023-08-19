  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.2.0/firebase-app.js";
  import { getFirestore, doc, setDoc } from "https://www.gstatic.com/firebasejs/10.2.0/firebase-firestore.js";
  import { getAuth } from "https://www.gstatic.com/firebasejs/10.2.0/firebase-auth.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyBbslv8ZU116be5KYpnEkNVt_vBzQV8700",
    authDomain: "hackathon-4ecc0.firebaseapp.com",
    projectId: "hackathon-4ecc0",
    storageBucket: "hackathon-4ecc0.appspot.com",
    messagingSenderId: "301269508097",
    appId: "1:301269508097:web:09bd2175136150b0cca000"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const auth = getAuth()
  const db = getFirestore(app);
  console.log(app)


  export{
    db,
    doc,
    setDoc,
    app,
    auth
  }