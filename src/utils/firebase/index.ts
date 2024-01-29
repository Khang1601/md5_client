import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  // apiKey: "AIzaSyDbWN61ecsuc2zwZ_v6oi4rgBVoFlNi-uA",
  // authDomain: "singin-3f381.firebaseapp.com",
  // projectId: "singin-3f381",
  // storageBucket: "singin-3f381.appspot.com",
  // messagingSenderId: "575462663784",
  // appId: "1:575462663784:web:eac45c255e74edf180fddd",
  // measurementId: "G-93MCXSFED4"

  apiKey: "AIzaSyBc9Lr_NtAqvEW1xwCROtkBdTrbamqk3JE",
  authDomain: "loginwith-13-12.firebaseapp.com",
  projectId: "loginwith-13-12",
  storageBucket: "loginwith-13-12.appspot.com",
  messagingSenderId: "726735368306",
  appId: "1:726735368306:web:f8ede18bde60dce2e752eb",
  measurementId: "G-5QV234LPVH"
};

const app = initializeApp(firebaseConfig);

const handleLoginWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    const auth = getAuth(app);
    return await signInWithPopup(auth, provider)
}

export default {
    handleLoginWithGoogle
}