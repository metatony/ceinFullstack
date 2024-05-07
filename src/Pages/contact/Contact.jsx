import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { auth } from "../../Config/Config";

function Contact() {
  
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
      {/* <!--  contact info and form--> */}

      <section className="flex flex-col-reverse md:flex-row md:items-center md:justify-between lg:px-36">
        {/* <!-- section 1: contact info --> */}
        <section className="space-y-10 mb-10">
          {/* <!-- write to us --> */}
          <div className="font-extralight text-sm md:text-base space-y-5 px-5 text-left">
            <p className="text-xl font-normal">Write to us</p>
            <p>
              Please fill out our form and we will contact you within 24 hours.
            </p>
            <p>Customer enquiries: customer@cein.com</p>
            <p>Support: support@cein.com</p>
          </div>

          {/* <!-- call us --> */}
          <div className="font-extralight text-sm md:text-base space-y-5 px-5 text-left">
            <p className="text-xl font-normal">Call us</p>
            <p>We are available 24/7 days a week</p>
            <p>phone: +44 7789 296628</p>
          </div>
        </section>

        {/* <!-- Section 2: form --> */}

        <form
          className="md:border-l flex flex-col px-5 space-y-8 mb-10 md:w-[60%] md:px-10"
          action=""
        >
          <p className="text-center text-3xl font-normal mt-16 mb-5 text-[#3a3a3a]">
            Contact Us
          </p>

          <div className="flex items-center">
            <input
              className="w-full border-b border-gray-800 py-5 focus:outline-none"
              type="text"
              placeholder="Your name"
            />
          </div>

          {/* <!-- email input --> */}

          <div className="flex items-center">
            <input
              className="w-full border-b border-gray-800 py-5 focus:outline-none"
              type="email"
              placeholder="Your email"
            />
          </div>

          {/* <!--  phone number input--> */}

          {/* <!-- text area input --> */}
          <div className="flex items-center">
            <input
              className="w-full border-b border-gray-800 py-5 focus:outline-none"
              type="text"
              placeholder=" Your phone number"
            />
          </div>

          {/* <!-- your message input --> */}
          <div className="flex items-center">
            <textarea
              className="w-full border-b border-gray-800 py-5 focus:outline-none"
              type="text"
              placeholder="Your message"
            />
          </div>

          {/* <!-- Send message in button  --> */}
          <button
            type="submit"
            className="bg-[#3a3a3a] text-white text-sm w-full px-5 py-5 mt-5 mb-5"
          >
            Send message
          </button>
        </form>
      </section>

      <Footer />
    </div>
  );
}

export default Contact;
