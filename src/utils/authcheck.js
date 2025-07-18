import { signInWithPopup } from "firebase/auth";
import { auth, googleProvider, db } from "../config/firebase";
import { collection, query, where, getDocs } from "firebase/firestore";

export const authenticateBlogAdmin = async () => {
  try {
    const result = await signInWithPopup(auth, googleProvider);
    const email = result.user.email;

    const q = query(
      collection(db, "blogAdmin"),
      where("email", "==", email),
      where("canPost", "==", true)
    );
    const snapshot = await getDocs(q);

    if (!snapshot.empty) {
      return { success: true, email };
    } else {
      alert("You are not authorized to edit blog posts.");
      return { success: false };
    }
  } catch (err) {
    console.error("Authentication error:", err);
    alert("Authentication failed.");
    return { success: false };
  }
};
