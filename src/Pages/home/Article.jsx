import { FaArrowRight } from "react-icons/fa6";

function Article() {
  return (
    <div>
      {/* <!-- section 2: article --> */}
      <div className="flex flex-col items-center sm:flex-row sm:justify-center sm:my-20 sm:px-20">
        {/* <!-- image --> */}
        <div className="m-5 sm:w-1/2 sm:m-5 sm:flex sm:justify-center">
          <img
            className="h-96 w-96"
            src="src/assets/hero2.png"
            alt="hero background"
          />
        </div>

        {/* <!-- hero body section--> */}
        <div className="py-10 px-5 text-black w-full flex flex-col sm:w-1/2 sm:py-0">
          <div className="flex flex-col text-left space-y-5">
            <p className="font-extralight text-sm sm:text-xs">Skin Care</p>

            <p className="font-extralight text-3xl leading-snug sm:text-xl">
              Potent Solutions for Demanding Skins
            </p>
            <p className="font-extralight text-sm leading-7 sm:text-xs sm:leading-8">
              Discover our potent antioxidant-rich Parsley Seed Skin Care,
              perfect for all skin types.
            </p>

            {/* <!-- button tag --> */}
            <button className="flex items-center justify-between font-extralight text-sm bg-transparent border border-gray-400 px-5 py-4 w-56 transition-colors duration-300 ease-in-out hover:bg-[#3a3a3a] hover:text-white sm:w-48 sm:text-xs">
              Read More
              <span className="ml-5">
                <FaArrowRight />
              </span>
            </button>
          
          </div>
        </div>
      </div>
    </div>
  );
}

export default Article;
