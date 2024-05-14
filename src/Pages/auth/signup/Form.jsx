import { useState } from "react";
import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { auth } from "../../../Config/Config";
import { useNavigate } from "react-router-dom";

import { createUserWithEmailAndPassword } from "firebase/auth";

function Form() {
  const navigate = useNavigate();

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // auth result message
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        navigate("/login");
        // ...
        alert("SignUp successful, please login !");
      })
      .catch((error) => {
        const errorCode = error.code;
        //const errorMessage = error.message;
        setErrorMessage(error.message);
        console.log(errorCode, errorMessage);
        // ..
      });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="md:border-l flex flex-col px-5 space-y-8 mb-10 md:w-[60%] md:px-10 lg:px-48"
      action=""
    >
      <p className="text-center text-3xl font-extralight mt-16 mb-5 text-[#3a3a3a]">
        Create Account
      </p>

      {/* full name input */}

      <div className="flex items-center">
        <input
          className="w-full border-b border-gray-800 py-5 focus:outline-none tracking-wider"
          type="name"
          name="name"
          placeholder="Full Name"
          onChange={(e) => setFullName(e.target.value)}
          value={fullName}
          required
        />
      </div>

      {/* <!-- email input --> */}
      <div className="flex items-center">
        <input
          className="w-full border-b border-gray-800 py-5 focus:outline-none tracking-wider"
          type="email"
          name="email"
          placeholder="E-Mail"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          required
        />
      </div>

      {/* <!-- password input --> */}

      <div className="flex items-center">
        <input
          className="w-full border-b border-gray-800 py-5 focus:outline-none tracking-wider"
          type="password"
          name="password"
          placeholder="Password"
          required
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
      </div>

      {/* <!-- sign in button  --> */}
      <button
        type="submit"
        className="bg-[#3a3a3a] text-white w-full px-5 py-5 mt-5 mb-5"
      >
        Register
      </button>

      {/* <!-- new to CEIN? --> */}
      <div className="px-5 mt-8 space-y-7 text-[#3a3a3a] mb-10">
        <p className="font-extralight text-xl">New to CEIN.?</p>

        <p className="font-extralight text-sm leading-6 text-gray-400">
          With an account, you can save products to your cabinet, view your
          order history and swiftly checkout using saved details.
        </p>
      </div>

      {/* <!-- create account --> */}
      <p className="flex items-center text-xs font-semibold px-5 text-blue-400  ">
        <Link to="Login">Login </Link>
        <span className="ml-3">
          <FaArrowRight />
        </span>
      </p>

      {errorMessage && (
        <>
          <div className="text-center text-orange-600 text-xs">
            {errorMessage}
          </div>
          <br></br>
        </>
      )}
    </form>
  );
}

export default Form;
