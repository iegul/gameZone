import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDxaVo2reV2O5mPz_EKEYvcMz62u_H9_RM",
  authDomain: "guess-game-rn.firebaseapp.com",
  projectId: "guess-game-rn",
  storageBucket: "guess-game-rn.appspot.com",
  messagingSenderId: "826625980363",
  appId: "1:826625980363:web:3d2db2d0267c7b096e684e",
};

// Firebase uygulamasını başlat
const app = initializeApp(firebaseConfig);

// Firebase servislerini dışa aktar
const auth = getAuth(app);
const db = getFirestore(app);

console.log("🔥 Firebase bağlantısı başarılı!");

export { auth, db };
