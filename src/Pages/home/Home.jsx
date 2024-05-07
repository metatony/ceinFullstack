import { useEffect, useState } from "react";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import Article from "./Article";
import Hero from "./Hero";
import Hero2 from "./Hero2";
import Slideshow from "./Slideshow";
import { onAuthStateChanged } from "firebase/auth";
import { auth} from "../../Config/Config";

function Home() {

  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // If user is logged in, update the user state
        setUser(user);
        console.log("User logged in:", user.uid);
      } else {
        // If user is logged out, set user state to null
        setUser(null);
        console.log("User logged out");
      }
    });

    // Clean up the subscription to avoid memory leaks
    return () => unsubscribe();
  }, []);

  return (
    <div>
      <Navbar user = {user}/>
      <Hero />
      <Article />
      <Slideshow />
      <Hero2 />
      <Footer />
    </div>
  );
}

export default Home;
