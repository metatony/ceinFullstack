import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { FaArrowRight } from "react-icons/fa6";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../Config/Config";
import { useEffect, useState } from "react";

function About() {
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

      {/* our story section */}
      {/* <!-- hero image section --> */}
      <div className="flex flex-col items-center sm:flex-row sm:my-20 sm:px-20">
        {/* <!-- image --> */}
        <div className="sm:w-1/2 sm:m-5 sm:flex sm:justify-center">
          <img
            className="sm:h-80 sm:w-[400px] w-full"
            src="src/assets/about1.jpg"
            alt="hero background"
          />
        </div>

        {/* <!-- hero body section--> */}
        <div className="py-10 px-5 text-black w-full flex flex-col sm:w-1/3 sm:py-0">
          <div className="flex flex-col text-left space-y-5">
            <p className="font-extralight text-3xl leading-snug sm:text-xl">
              Our Story
            </p>

            <p className="font-extralight text-sm sm:text-xs sm:leading-8 leading-7">
              Our line features meticulous skin, hair, and body care
              formulations, crafted with both efficacy and sensory delight in
              focus.
            </p>
            <p className="font-extralight text-sm leading-7 sm:text-xs sm:leading-8">
              We are dedicated to creating top-quality skin, hair, and body care
              products. We extensively research plant-based and lab made
              ingredients, selecting only those with proven safety and
              effectiveness. At our distinctive stores, knowledgeable
              consultants are eager to introduce you to the Aesop range and
              assist with your choices.
            </p>

            {/* <!-- button tag --> */}
            <button className="flex items-center justify-between font-extralight text-sm bg-transparent border border-gray-400 px-5 py-4 w-64 transition-colors duration-300 ease-in-out hover:bg-[#3a3a3a] hover:text-white sm:w-64 sm:text-xs">
              Our approach to products
              <span className="ml-5">
                <FaArrowRight />
              </span>
            </button>
          </div>
        </div>
      </div>

      <article>
        <div className="mt-14 flex flex-col sm:flex-row">
          <div className="col1 flex flex-col items-center justify-center sm:w-1/2">
            {/* <!-- hero body section--> */}
            <div className="py-10 px-5 sm:pl-16 text-white w-full flex flex-col">
              <div className="flex flex-col text-left space-y-5">
                <p className="font-extralight text-sm">Our Credo</p>

                <p className="font-extralight text-3xl leading-snug">
                  Quality & Efficacy
                </p>
                <p className="font-extralight text-sm leading-7 sm:w-96">
                  Those serious about skin health, trust someone dedicated since
                  1986. With over 35 years of crafting certified natural
                  cosmetics, we leverage extensive experience. Our mission is to
                  create products beneficial for both body and planet
                </p>

                {/* <!-- button tag --> */}
                <a href="productPage.html#products">
                  <button className="flex items-center justify-center font-extralight text-sm bg-transparent border border-white px-2 py-4 w-48 transition-colors duration-300 ease-in-out hover:bg-[#3a3a3a] hover:text-white hover:border-none">
                    Our Best Sellers
                    <span className="ml-5">
                      <FaArrowRight />
                    </span>
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/* <!-- col 2 --> */}
          <div className="col2 flex flex-col items-center justify-center sm:w-1/2">
            {/* <!-- hero body section--> */}
            <div className="py-10 px-5 sm:pl-16 text-white w-full flex flex-col">
              <div className="flex flex-col text-left space-y-5">
                <p className="font-extralight text-sm">
                  Modern Science, Your Skins Perfection
                </p>

                <p className="font-extralight text-3xl leading-snug">
                  High tech Natural Skin Care
                </p>
                <p className="font-extralight text-sm leading-7 sm:w-96">
                  We build our formulas on natures most precious raw materials,
                  refined with modern technologies to guarantee the best results
                  for your skin.
                </p>

                {/* <!-- button tag --> */}
                <a href="productPage.html#products">
                  <button className="flex items-center justify-center font-extralight text-sm bg-transparent border border-white px-2 py-4 w-48 transition-colors duration-300 ease-in-out hover:bg-[#3a3a3a] hover:text-white hover:border-none">
                    Discover More
                    <span className="ml-5">
                      <FaArrowRight />
                    </span>
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
}

export default About;
