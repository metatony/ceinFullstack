import { useState } from "react";
import { FaRegHeart, FaShoppingBag, FaBars } from "react-icons/fa";
import { FaRegUser, FaMagnifyingGlass, FaXmark } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { auth } from "../Config/Config";
import { signOut } from "firebase/auth";

function Navbar({ user }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen);
  }

  const navigate = useNavigate();

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/");
        console.log("Signed out successfully");
        alert("Signed out successfully");
      })
      .catch((error) => {
        // An error happened.
        console.log(error.message);
      });
  };

  return (
    <div>
      <nav className="sm:px-20 lg:px-36 border border-b-gray-300 bg-white">
        <ul className="flex justify-between items-center h-20 w-full p-5">
          {/* <!-- menu and search container --> */}
          <div className="hidden md:flex font-light text-xs space-x-6 lg:text-sm">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/About">About Us</Link>
            </li>
            <li>
              <Link to="/Products">Products</Link>
            </li>
            <li>
              <Link to="/Contact">Contact Us</Link>
            </li>
            {!user ? (
              <li>
                <Link to="/Login">Login</Link>
              </li>
            ) : (
              <button onClick={handleLogout}>SignOut</button>
            )}
          </div>

          {/* <!-- Mobile menu container --> */}

          <div className="flex items-center space-x-8  md:hidden">
            <button onClick={toggleMenu}>
              {isMenuOpen ? (
                <div className=" flex-col fixed top-0 left-0 w-full h-full bg-white z-50 ">
                  <FaXmark className="mt-8 ml-5 h-6 w-6" />
                  <ul className="flex flex-col items-center justify-center h-full text-lg space-y-5">
                    <li>
                      <Link to="/">Home</Link>
                    </li>
                    <li>
                      <Link to="/About">About Us</Link>
                    </li>
                    <li>
                      <Link to="/Products">Products</Link>
                    </li>
                    <li>
                      <Link to="/Contact">Contact Us</Link>
                    </li>

                    {!user ? (
                      <li>
                        <Link to="/Login">Login</Link>
                      </li>
                    ) : (
                      <button onClick={handleLogout}>SignOut</button>
                    )}
                    <li>
                      <Link to="/CartPage">Cart</Link>
                    </li>
                  </ul>
                </div>
              ) : (
                <li id="hamburg-menu-btn">
                  <FaBars />
                </li>
              )}
            </button>

            <li>
              <FaMagnifyingGlass />
            </li>
          </div>

          {/* <!-- logo tag --> */}
          <div className="w-28 flex items-center justify-center">
            <li>
              <img src="https://ceinbucket.s3.eu-north-1.amazonaws.com/Logo.png" alt="logo icon" />
            </li>
          </div>

          {/* <!-- favorite and cart container --> */}

          <div className="hidden sm:flex items-center space-x-8">
            <li>
              <FaRegHeart className="text-black" />
            </li>
            <Link to="/SignUp">
              <li>
                <FaRegUser />
              </li>
            </Link>
            <li>
              <FaMagnifyingGlass />
            </li>
            <Link to="/CartPage">
              <li>
                <FaShoppingBag />
              </li>
            </Link>
          </div>

          <div className="sm:hidden flex items-center space-x-8">
            <li>
              <FaRegHeart className="text-black" />
            </li>
            <Link to="/CartPage">
              <li>
                <FaShoppingBag />
              </li>
            </Link>
          </div>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
