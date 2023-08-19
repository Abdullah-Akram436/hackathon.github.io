import{
  db,
  app,
  doc,
  setDoc,
  auth
} from './firebaseconfig.js'
import { signInWithEmailAndPassword, signOut  } from "https://www.gstatic.com/firebasejs/10.2.0/firebase-auth.js";

async function Login(){
    try {
        let email = document.getElementById('Email').value
        let password = document.getElementById('Password').value
        
        const userLogin = await signInWithEmailAndPassword(auth,email,password)
        const userUid =userLogin.user.uid
        console.log(userUid)
        localStorage.setItem("user" , JSON.stringify(userUid))
        alert("login")
        window.location.replace('./dashborard.html')
    } catch (error) {
        alert(error.message)
        console.log(error.message)
    }
}

window.Login=Login


// logoutBtn.addEventListener('click',Logout)
  function Logout(){
      signOut(auth).then(() => {
          // Sign-out successful.
          alert('logout')
          window.location.replace('./index.html')
        }).catch((error) => {
          // An error happened.
        });
        localStorage.removeItem('user')
  }

  window.Logout=Logout