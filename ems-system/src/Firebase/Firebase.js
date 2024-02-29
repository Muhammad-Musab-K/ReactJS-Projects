import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage} from "firebase/storage";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBfi_qD0PWpUI4er8xKdwk62O_7LTveqBk",
  authDomain: "employee-mangement-20546.firebaseapp.com",
  projectId: "employee-mangement-20546",
  storageBucket: "employee-mangement-20546.appspot.com",
  messagingSenderId: "554335186660",
  appId: "1:554335186660:web:e923e1e2db8c1da6dd86f1",
  measurementId: "G-667W2ZC4NQ"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth();
export const storage = getStorage();

export const IsUserIn = () => {
  onAuthStateChanged(auth, (user) => {
    if (!user) {

      window.location.assign("/signin")

    }
  });
}


