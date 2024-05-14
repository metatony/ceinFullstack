import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useState } from "react";
import { auth } from "../../../Config/Config";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";

function Form() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // auth result message
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    await signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        navigate("/");
        alert("Login successful !");
        // ...
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
      {/* <!-- email input --> */}

      <p className="text-center text-3xl font-extralight mt-16 mb-5 text-[#3a3a3a]">
        Login to your account
      </p>

      <div className="flex items-center">
        <input
          className="w-full border-b border-gray-800 py-5 focus:outline-none"
          type="email"
          name="email"
          placeholder="EMail"
          required
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
      </div>

      {/* <!-- password input --> */}

      <div className="flex items-center">
        <input
          className="w-full border-b border-gray-800 py-5 focus:outline-none"
          type="password"
          name="password"
          placeholder="Password"
          required
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
      </div>

      {/* <!-- forgot your password --> */}
      <div className="text-right text-xs font-extralight text-gray-400 mb-5">
        <p>Forgot your password?</p>
      </div>

      {/* <!-- sign in button  --> */}
      <button
        type="submit"
        className="bg-[#3a3a3a] text-white w-full px-5 py-5 mt-5 mb-5"
      >
        Sign in
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
      <p className="flex items-center text-xs font-semibold px-5 text-blue-400">
        <Link to="/SignUp">Create account</Link>
        <span>
          <FaArrowRight className="ml-3 " />
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
