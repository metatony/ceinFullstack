import { FaArrowRight } from "react-icons/fa6";

function Banner() {
  return (
    <div>
      <section>
        {/* <!-- product hero --> */}

        <div className="productBanner hidden px-5 bg-[#3a3a3a] py-10 text-white w-full sm:flex items-center sm:px-20 lg:px-36">
          <div className="flex-col w-[400px] text-left space-y-5">
            <p className="text-3xl leading-snug">Skin Care</p>
            <p className="font-extralight text-sm leading-8">
              The skin is constantly changing, influenced by the environment,
              lifestyle,and diet. Our range is crafted with this in
              consideration, addressing various preferences and needs to help
              ypu achieve optimal skin health.
            </p>

            {/* <!-- button tag --> */}
            <a href="#products">
              <button className="flex items-center justify-center font-extralight text-sm bg-transparent border border-white px-2 py-4 w-48 transition-colors duration-300 ease-in-out hover:bg-[#3a3a3a] hover:text-white hover:border-none">
                Discover More
                <span className="ml-5">
                  <FaArrowRight />
                </span>
              </button>
            </a>
          </div>
        </div>

        {/* <!-- mobile view --> */}
        <div className="flex flex-col md:hidden">
          {/* <!-- hero image  --> */}
          <div className="">
            <img
              className="w-full"
              src="/assets/producthero.png"
              alt="product hero"
            />
          </div>

          {/* <!-- hero body --> */}
          <div className="font-extralight space-y-5 py-8 px-5 bg-[#f1f1f1]">
            <p className="text-3xl">Skin Care</p>
            <p className="leading-7 text-sm">
              The skin is constantly changing, influenced by the environment,
              lifestyle,and diet. Our range is crafted with this in
              consideration, addressing various preferences and needs to help
              ypu achieve optimal skin health.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Banner;
