import Footer from "../../../components/Footer";
import Navbar from "../../../components/Navbar";
import Form from "./Form";
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../../Config/Config";

function SignUp() {
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
      <section>
        <div className="flex h-[764px] md:h-[864px]">
          {/* <!-- image --> */}
          <div className="hidden md:w-2/5 md:block">
            <img
              className="h-[864px] w-full"
              src="/assets/register.jpg"
              alt="serum"
            />
          </div>

          {/* Form section */}

          <Form />
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default SignUp;
