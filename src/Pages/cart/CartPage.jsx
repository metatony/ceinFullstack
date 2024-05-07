import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { onAuthStateChanged } from "firebase/auth";
import { auth, fs } from "../../Config/Config";
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import CartProducts from "./CartProducts";

function CartPage() {

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
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        // ...
        console.log("uid", uid);
      } else {
        // User is signed out
        // ...
        console.log("user is logged out");
      }
    });
  }, []);

  // state of cart products
  const [cartProducts, setCartProducts] = useState([]);
  const [totalProductPrice, setTotalProductPrice] = useState(0);

  // getting cart products from fire store collection and updating the state

  const fetchPost = async () => {
    await auth.onAuthStateChanged((user) => {
      if (user) {
        getDocs(collection(fs, "Cart " + user.uid)).then((querySnapshot) => {
          const newData = querySnapshot.docs.map((doc) => ({
            ...doc.data(),

            id: doc.id,
          }));
          setCartProducts(newData);
          console.log(cartProducts, newData);
        });
      } else {
        console.log("user is not signed in to retrieve cart");
      }
    });
  };

  console.log(cartProducts);

  // Calculate total product price whenever cartProducts changes
  useEffect(() => {
    const totalPrice = cartProducts.reduce((total, product) => {
      return total + product.price * product.qty;
    }, 0);
    setTotalProductPrice(totalPrice.toFixed(2));
  }, [cartProducts]);

  // Define updateCartProducts function
  const updateCartProducts = (productId) => {
    // Filter out the product with the given productId from the cartProducts state
    const updatedCartProducts = cartProducts.filter(
      (product) => product.id !== productId
    );
    // Update the cartProducts state
    setCartProducts(updatedCartProducts);
  };

  // Fetch cart products on component mount
  useEffect(() => {
    fetchPost();
  }, []);

  return (
    <div>
      <Navbar user={user} />

      {/* <!-- section 1: cart items --> */}
      <section className="px-5 mt-14 md:w-1/2 md:flex-col md:items-center md:mx-auto">
        <div className="space-y-5 font-extralight text-sm md:text-base text-center">
          <p className="text-3xl font-normal text-[#3a3a3a]">Cart</p>
          <p>
            Purchase one more item of the sale products and receive free
            shipping!
          </p>
          <p>*Automatically applied on the next page</p>
        </div>

        {cartProducts.length > 0 && (
          <div>
            <CartProducts
              cartProducts={cartProducts}
              updateCartProducts={updateCartProducts}
            />
          </div>
        )}

        {cartProducts.length < 1 && (
          <div className="text-center my-24 font-normal text-[#3a3a3a] ">
            No products to show
          </div>
        )}

        {/* <!-- total price --> */}

        <div className="flex justify-between text-2xl font-extralight">
          <p>Total</p>
          <p>{totalProductPrice}</p>
        </div>
        <p className="text-right font-extralight text-xs mt-5">
          Shipping fee will be calculated at the time of the purchase
        </p>

        {/* <!-- button --> */}
        <button className="bg-[#3a3a3a] text-white text-sm w-full px-5 py-5 mt-5 mb-10">
          Checkout
        </button>
      </section>

      <Footer />
    </div>
  );
}

export default CartPage;
