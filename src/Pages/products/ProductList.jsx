import ProductCard from "./ProductCard";
import { useEffect, useState } from "react";
import { addDoc, collection, getDocs } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";
import { auth, fs } from "../../Config/Config";
import { useNavigate } from "react-router-dom";

function ProductList({ maxItems }) {
  // fetch the products from the database
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const navigate = useNavigate();

  const fetchPost = async () => {
    await getDocs(collection(fs, "cein database")).then((querySnapshot) => {
      const newData = querySnapshot.docs.map((doc) => ({
        ...doc.data(),

        id: doc.id,
      }));
      setProducts(newData);
      console.log(products, newData);
    });
  };

  useEffect(() => {
    fetchPost();
  }, []);

  const [uid, setUid] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUid(user.uid);
      } else {
        setUid(null);
      }
    });
  }, []);

  const addToCart = async (product) => {
    if (uid !== null) {
      console.log(product);

      try {
        // Set the selected product
        setSelectedProduct(product);

        // Calculate the TotalProductPrice
        const TotalProductPrice = product.qty * product.price;
        console.log("TotalProductPrice:", TotalProductPrice);

        // Add qty and TotalProductPrice to the product
        const updatedProduct = {
          ...product,
          qty: 1,
          TotalProductPrice: TotalProductPrice,
        };

        // Add the product to the cart collection
        await addDoc(collection(fs, "Cart " + uid), updatedProduct);

        console.log("Item added to cart successfully");
      } catch (error) {
        console.error("Error adding item to cart:", error.message);
      }

      // Function to add item to cart
    } else {
      navigate("/login");
    }
  };

  return products
    .slice(0, maxItems)
    .map((product) => (
      <ProductCard key={product.id} product={product} addToCart={addToCart} />
    ));
}

export default ProductList;
