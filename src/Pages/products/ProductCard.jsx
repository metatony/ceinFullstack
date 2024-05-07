function ProductCard({ product, addToCart }) {
  
  function handleAddToCart() {
    addToCart(product);
    alert('Item successfully added to cart');
  }

  const { image, name, quantity, price } = product;

  return (
    <div className="bg-white w-44 flex flex-col py-2 mb-5 justify-center items-center text-xs font-extralight space-y-2 sm:w-44 md:w-64 transition-colors duration-300 ease-in-out hover:bg-[#f1f1f1]">
      <img src={image} alt="facial serum" />
      <p className="text-center text-xs w-40 sm:w-full px-5 font-medium">
        {name}
      </p>
      <p>{quantity}</p>
      <p>£{price}</p>

      {/* <!-- button tag --> */}
      <button
        onClick={handleAddToCart}
        className="font-extralight text-sm bg-transparent border border-gray-400 px-5 py-4 w-full transition-colors duration-300 ease-in-out hover:bg-[#3a3a3a] hover:text-white"
      >
        Add to your cart
      </button>
    </div>
  );
}

export default ProductCard;
