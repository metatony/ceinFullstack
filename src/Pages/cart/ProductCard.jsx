import { FaMinus, FaPlus, FaTrash } from "react-icons/fa6";
import { updateDoc, doc, deleteDoc } from "firebase/firestore";
import { auth, fs } from "../../Config/Config";
import { useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";

function ProductCard({ cartProducts, updateCartProducts }) {
  const [user, setUser] = useState(null);
  const [quantity, setQuantity] = useState(cartProducts.qty);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    if (user) {
      setQuantity(cartProducts.qty);
    }
  }, [cartProducts, user]);

  // function to increment cart items
  const incrementQuantity = () => {
    const newQuantity = quantity + 1;
    updateQuantityInFirestore(newQuantity);
    setQuantity(newQuantity);
  };

  // function to decrement cart items
  const decrementQuantity = async () => {
    if (quantity > 1) {
      const newQuantity = quantity - 1;
      setQuantity(newQuantity); // Update local state first
      updateQuantityInFirestore(newQuantity); // Then update Firestore
    } else {
      try {
        if (user) {
          // If quantity is 0, delete the item from Firestore
          await deleteDoc(doc(fs, "Cart " + user.uid, cartProducts.id));
          // Call updateCartProducts function to remove the product from cartProducts state
          updateCartProducts(cartProducts.id);
        }
      } catch (error) {
        console.error("Error deleting document: ", error);
      }
    }
  };

  // function to update item quantity in firestore

  const updateQuantityInFirestore = async (newQuantity) => {
    try {
      await updateDoc(doc(fs, "Cart " + user.uid, cartProducts.id), {
        qty: newQuantity,
      });
    } catch (error) {
      console.error("Error updating document: ", error);
    }
  };

  // function to handle deletion of item from cart
  const handleDelete = async () => {
    try {
      if (user) {
        // Delete the item from Firestore
        await deleteDoc(doc(fs, "Cart " + user.uid, cartProducts.id));
        // Call updateCartProducts function to remove the product from cartProducts state
        updateCartProducts(cartProducts.id);
      }
    } catch (error) {
      console.error("Error deleting document: ", error);
    }
  };

  return (
    <div>
      {/* <!-- product --> */}
      <div className="flex items-center justify-between mt-8 mb-10">
        {/* <!-- mobile view --> */}
        <div className="flex sm:mr-9">
          <img className="w-20 h-20" src={cartProducts.image} alt="hand balm" />

          <div className="font-extralight space-y-2">
            <p className="text-sm sm:text-base font-normal w-32">{cartProducts.name}</p>
            <p className="text-xs">{cartProducts.size}</p>
            <p className="text-xs">{cartProducts.price}</p>
          </div>
        </div>

        {/* <!-- counter --> */}
        <div className="space-x-5 flex items-center border text-sm p-3 bg-[#fefefe]">
          <FaMinus
            onClick={decrementQuantity}
            className="font-extralight counter-btn"
          />
          <p className="counter">{quantity}</p>
          <FaPlus
            onClick={incrementQuantity}
            className="font-extralight counter-btn"
          />
        </div>
        <div>
          <button onClick={handleDelete}>
            <FaTrash />
          </button>
        </div>
      </div>

      {/* <!-- divider --> */}
      <hr className="mb-5" />
    </div>
  );
}

export default ProductCard;
