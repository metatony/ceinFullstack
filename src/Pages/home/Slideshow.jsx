// import ProductCard from "../products/ProductCard";

import ProductList from "../products/ProductList";

function Slideshow() {
  return (
    <div>
      {/* <!-- section 3: products slideshow --> */}
      <section>
        {/* <!--  body section--> */}
        <div className="sm:hidden bg-white py-10 px-5 text-black w-full flex flex-col sm:px-20">
          <div className="flex flex-col text-left space-y-5">
            <p className="font-extralight text-sm">Parsley Seed Skin Care</p>

            <p className="font-extralight text-3xl leading-snug">
              Supreme Skin Fortification
            </p>
            <p className="font-extralight text-sm leading-7">
              Discover our potent antioxidant-rich Parsley Seed Skin Care,
              perfect for all skin types.
            </p>
          </div>
        </div>

        {/* <!-- product items --> */}
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-4 sm:mt-32 justify-items-center sm:px-5 md:px-20">
       <ProductList maxItems={4}/>
        </div>

        {/* <!-- all products button link --> */}

        <div className="px-5 sm:pl-20">
          <a href="productPage.html">
            <p className="flex items-center text-sm font-extralight my-10">
              All Products
              <span className="ml-5">
                <i className="fa-solid fa-arrow-right"></i>
              </span>
            </p>
          </a>
        </div>

        {/* <!-- product items end --> */}
      </section>
    </div>
  );
}

export default Slideshow;
