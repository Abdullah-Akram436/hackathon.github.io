import{
    db,
    app,
    doc,
    setDoc,
    auth
  } from './firebaseconfig.js'
  
  import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.2.0/firebase-auth.js";

async function createUer(e){
    try {
        let fullName = document.getElementById('Name').value
        let email = document.getElementById('Email').value
        let password = document.getElementById('Password').value
        const userAuth = await createUserWithEmailAndPassword(auth,email,password)
        const userUid = userAuth.user.uid
        console.log(userUid)

        alert('signed in',userAuth)
        window.location.replace('./index.html')
    } catch (error) {
        console.log(error.message)
        alert(error.measage)
    }
}


window.createUer=createUer











  
//   const signupBtn = document.querySelector("#signupbtn")
  
//   async function signUp(e) {
//     try {
//         const fullName = document.getElementById("Name").value
//         const phoneNumber = document.getElementById("Number").value
//         const email = document.getElementById("Email").value
//         const password = document.getElementById("Password").value
  
//         if (!fullName || !phoneNumber || !email || !password) {
//             alert("required field are missing")
//             return
//         }
    
//         const userAuth = await createUserWithEmailAndPassword(auth, email, password)
//         console.log(userAuth.user.uid)
//         const uid = userAuth.user.uid
//         const userObj = {
//             fullName,
//             phoneNumber,
//             email,
//             accountActivate: true,
//             uid,
//         }
//         const userRef = doc(db, "users", uid);
//         const userDB = await setDoc(userRef, userObj)
//         window.location.assign("/")
//     } catch (error) {
//         console.log("error", error.message)
//         alert(error.message)
//     }
  
  
//   }
  
//   window.signUp=signUp




