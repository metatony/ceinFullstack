import { FiPlus } from "react-icons/fi";
function Footer() {
  return (
    <div>
      {/* <!-- desktop footer view --> */}
      <footer className="bg-[#2b2b2b]">
        {/* <!-- product footer --> */}
        <div className="hidden pt-20 pb-40 text-white font-extralight md:flex flex-row justify-between sm:px-20 lg:px-36">
          <div className="space-y-7">
            {/* <!-- logo --> */}
            <div>
              <img src="https://ceinbucket.s3.eu-north-1.amazonaws.com/Logowhite.png" alt="logo" />
            </div>

            {/* <!-- follow us --> */}
            <div className="font-extralight text-xs mt-10">
              <p>FOLLOW US</p>
            </div>

            {/* <!-- social media icons --> */}
            <div className="flex space-x-5 mb-">
              <img src="/assets/Social/twitter.png" alt="twitter logo" />
              <img src="/assets/Social/instagram.png" alt="instagram logo" />
              <img src="/assets/Social/facebook.png" alt="facebook logo" />
            </div>
          </div>

          <div className="font-extralight text-xs space-y-5">
            <p className="font-semibold">Products</p>
            <p>Inner Care</p>
            <p>Skin Care</p>
            <p>Scalp Care</p>
          </div>

          <div className="font-extralight text-xs space-y-5">
            <p className="font-semibold">Guides</p>
            <p>News</p>
            <p>Vision</p>
            <p>Q&A</p>
          </div>

          <div className="font-extralight text-xs space-y-5">
            <p className="font-semibold">Service</p>
            <p>About Concierge</p>
            <p>Online Consultation</p>
            <p>Market</p>
          </div>

          <div className="font-extralight text-xs space-y-5">
            <p className="font-semibold">Contact</p>
            <p>Contact Us</p>
          </div>
        </div>

        <div className="hidden md:flex items-center space-x-28 text-gray-400 pl-20 pb-20 text-xs">
          {/* <!-- footer texts --> */}
          <p className="font-extralight">
            Anthony &copy; D1 Assessment All rights reserved 2024.
          </p>

          <div className="font-extralight space-x-5 flex">
            <p>Company Profile</p>
            <p>Privacy policy</p>
            <p>Cancellation policy</p>
            <p>Terms of service</p>
            <p>Refund/Return Policy</p>
          </div>
        </div>
      </footer>

      {/* <!-- mobile footer view --> */}
      <footer className="md:hidden p-5 bg-[#2b2b2b] text-white font-extralight">
        {/* <!-- product footer --> */}
        <div className="mt-10 border-b border-white">
          <div className="flex justify-between items-center my-10">
            <p>Products</p>
            <FiPlus />
          </div>
        </div>

        {/* <!-- Guides footer --> */}
        <div className="mt-10 border-b border-white">
          <div className="flex justify-between items-center my-10">
            <p>Guides</p>
            <FiPlus />
          </div>
        </div>

        {/* <!-- Services footer --> */}
        <div className="mt-10 border-b border-white">
          <div className="flex justify-between items-center my-10">
            <p>Services</p>
            <FiPlus />
          </div>
        </div>

        {/* <!-- Contacts footer --> */}
        <div className="mt-10 border-b border-white">
          <div className="flex justify-between items-center my-10">
            <p>Contacts</p>
            <FiPlus />
          </div>
        </div>

        {/* <!-- footer social media links --> */}
        <div className="space-y-6">
          <div className="font-extralight text-sm mt-10">
            <p>FOLLOW US</p>
          </div>
          {/* <!-- social media icons --> */}
          <div className="flex space-x-5 mb-">
            <img src="/assets/Social/twitter.png" alt="twitter logo" />
            <img src="/assets/Social/instagram.png" alt="instagram logo" />
            <img src="/assets/Social/facebook.png" alt="facebook logo" />
          </div>

          {/* <!-- footer texts --> */}
          <div className="text-xs font-thin space-y-5 flex flex-col">
            <p>Company Profile</p>
            <p>Privacy policy</p>
            <p>Cancellation policy</p>
            <p>Terms of service</p>
            <p>Refund/Return Policy</p>
          </div>

          <p className="text-xs font-extralight">
            Anthony &copy; D1 Assessment All rights reserved 2024.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
