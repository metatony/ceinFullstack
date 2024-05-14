import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <div>
      {/* <!-- desktop view--> */}
      <div
        className="hidden HomeHero px-5 bg-[#ddb3b3] py-10 text-white w-full sm:flex items-center sm:px-20 lg:px-36"
        style={{
      backgroundImage: "url('assets/bg_web.png')",
      backgroundSize: 'cover',
      height: '828px',
        }}
      >
        <div className="flex-col w-5/12 text-left space-y-5">
          <p className="font-extralight text-sm">
            Treat Your Body Like Your Face
          </p>

          <p className="text-3xl leading-snug">Highly Effective Body Care</p>
          <p className="font-extralight text-sm leading-8 sm:w-72">
            A combination of nature and advanced technology. Vegan, natural,
            skin-friendly and rich in effective biotechnological ingredients.
          </p>

          {/* <!-- button tag --> */}
          <a href="productPage.html#products">
            <Link to="/products">
              <button className="flex items-center justify-center font-extralight text-sm bg-transparent border border-white px-2 py-4 w-48 transition-colors duration-300 ease-in-out hover:bg-[#3a3a3a] hover:text-white hover:border-none">
                Discover More
                <span className="ml-5">
                  <FaArrowRight />
                </span>
              </button>
            </Link>
          </a>
        </div>
      </div>

      {/* <!-- mobile view --> */}
      <div className="hidden flex-col">
        {/* <!-- image --> */}
        <img
          className="w-full h-64"
          src="/assets/hero_background.png"
          alt="hero background"
        />

        {/* <!-- hero body section--> */}
        <div className="bg-[#3a3a3a] py-10 text-white w-full flex justify-center">
          <div className="flex-col w-56 text-left space-y-5">
            <p className="font-extralight text-sm">
              Treat Your Body Like Your Face
            </p>

            <p className="font-extralight text-4xl leading-snug">
              Highly Effective Body Care
            </p>
            <p className="font-extralight text-sm leading-8">
              A combination of nature and advanced technology. Vegan, natural,
              skin-friendly and rich in effective biotechnological ingredients.
            </p>

            {/* <!-- button tag --> */}
            <a href="productPage.html#products">
              <button className="flex items-center justify-center font-extralight text-sm bg-transparent border border-white px-2 py-6 w-full">
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
  );
}
export default Hero;
