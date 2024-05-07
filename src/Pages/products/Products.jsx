import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Banner from "./Banner";
import ProductsGrid from "./ProductsGrid";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { auth } from "../../Config/Config";

function Products() {
  // fetching user
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
      <Navbar user={user} />

      {/* Banner */}
      <Banner />

      {/* Products grid*/}
      <ProductsGrid />

      <Footer />
    </div>
  );
}

export default Products;
