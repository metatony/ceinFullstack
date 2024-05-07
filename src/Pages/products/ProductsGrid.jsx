import ProductList from "./ProductList";

function ProductsGrid() {
  return (
    <div>
      <section>
        {/* <!-- product section header--> */}
        <div
          id="products"
          className="px-5 mt-10 font-extralight space-y-5 mb-10 sm:px-20 lg:px-36"
        >
          <p className="text-sm">Revered Formulations</p>
          <p className="text-3xl leading-10">Essentials for Every Skincare</p>
        </div>

        {/* <!-- product grid --> */}
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-4 justify-items-center sm:px-5 md:px-20 sm:mb-16">
          <ProductList/>
        </div>
      </section>
    </div>
  );
}

export default ProductsGrid;
