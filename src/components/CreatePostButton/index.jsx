import { auth, googleProvider, db } from "../../config/firebase";
import { signInWithPopup } from "firebase/auth";
import { collection, query, where, getDocs } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

export default function CreatePostButton() {
  const navigate = useNavigate();

  const handleCreatePost = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const email = result.user.email;
      console.log("Signed in as:", email);

      // Check Firestore for allowed user
      const q = query(
        collection(db, "blogAdmin"),
        where("email", "==", email),
        where("canPost", "==", true)
      );
      const querySnapshot = await getDocs(q);

      if (!querySnapshot.empty) {
        navigate("/blogpostupload");
      } else {
        alert("You are not authorized to create a blog post.");
      }
    } catch (err) {
      console.error(err);
      alert("Authentication failed.");
    }
  };

  return (
    <button
      onClick={handleCreatePost}
      className="bg-primary text-white px-4 py-2 mt-6 rounded shadow"
    >
      Create Blog Post
    </button>
  );
}
