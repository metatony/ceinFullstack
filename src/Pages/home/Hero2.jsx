import { FaArrowRight } from "react-icons/fa6";

function Hero2() {
  return (
    <div>
      {/* <!--  section 4: hero with background image--> */}
      <section>
        <div
          className="flex Hero2 flex-col items-center justify-center sm:px-20 lg:px-36"
      
        >
          {/* <!-- hero body section--> */}
          <div className="py-10 px-5 sm:px-0 text-white w-full flex flex-col text-left">
            <div className="space-y-5">
              <p className="font-extralight text-sm">Revitalize Your Body</p>

              <p className="font-extralight text-3xl leading-snug sm:w-2/3">
                Effective Ingredients for Visible Results
              </p>
              <p className="font-extralight text-sm leading-7 sm:w-1/3">
                Our body products are rich in highly effective ingredients,
                achieve visible results, firm the skin and leave it feeling soft
                and supple. Fine textures that are quickly absorbed, non-greasy
                and in no way inferior to facial care. Its time to give our body
                the same attention as our face.
              </p>

              {/* <!-- button tag --> */}
              <button className="flex items-center justify-between font-extralight text-sm bg-transparent border border-white px-5 py-4 w-56 transition-colors duration-300 ease-in-out hover:bg-[#3a3a3a] hover:text-white hover:border-none">
                Discover More
                <span className="ml-5">
                  <FaArrowRight />
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Hero2;
