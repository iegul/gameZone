import { auth } from "./firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

// Kullanıcı kayıt fonksiyonu
export const registerUser = async (email, password) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    return userCredential.user;
  } catch (error) {
    console.error("Kayıt hatası:", error.message);
    throw error;
  }
};

// Kullanıcı giriş fonksiyonu
export const loginUser = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    return userCredential.user;
  } catch (error) {
    console.error("Giriş hatası:", error.message);
    throw error;
  }
};

// Kullanıcı çıkış fonksiyonu
export const logoutUser = async () => {
  try {
    await signOut(auth);
    console.log("Kullanıcı çıkış yaptı.");
  } catch (error) {
    console.error("Çıkış hatası:", error.message);
    throw error;
  }
};
