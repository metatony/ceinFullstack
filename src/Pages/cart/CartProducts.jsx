import ProductCard from "./ProductCard";

function CartProducts({ cartProducts, updateCartProducts }) {
  return cartProducts.map((cartProducts) => (
    <ProductCard
      key={cartProducts.id}
      cartProducts={cartProducts}
      updateCartProducts={updateCartProducts}
      
    />
  ));
}

export default CartProducts;
