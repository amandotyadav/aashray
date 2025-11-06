// import React, { useState } from "react";
// import { Heart } from "lucide-react";

// const Auth = () => {
//   const [isLogin, setIsLogin] = useState(true);

//   return (
//     <div className="min-h-screen flex flex-col md:flex-row">
//       {/* Left Section - Illustration / Message */}
//       <div className="hidden md:flex flex-1 bg-orange-100 items-center justify-center relative">
//         <div className="text-center p-8">
//           <Heart className="text-orange-500 mx-auto w-16 h-16 mb-4" />
//           <h1 className="text-4xl font-bold text-orange-600 mb-3">AASHRAY</h1>
//           <p className="text-gray-700 text-lg">
//             Your community, your home. <br /> Stay connected, stay inspired.
//           </p>
//         </div>
//       </div>

//       {/* Right Section - Auth Form */}
//       <div className="flex-1 flex items-center justify-center bg-white p-8">
//         <div className="w-full max-w-md rounded-2xl shadow-lg border border-gray-100 p-8">
//           <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
//             {isLogin ? "Welcome Back!" : "Create Your Account"}
//           </h2>

//           <form className="space-y-4">
//             {!isLogin && (
//               <div>
//                 <label className="block text-sm font-medium text-gray-700">
//                   Full Name
//                 </label>
//                 <input
//                   type="text"
//                   placeholder="Enter your name"
//                   className="w-full mt-1 border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-orange-400"
//                 />
//               </div>
//             )}

//             <div>
//               <label className="block text-sm font-medium text-gray-700">
//                 Email
//               </label>
//               <input
//                 type="email"
//                 placeholder="Enter your email"
//                 className="w-full mt-1 border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-orange-400"
//               />
//             </div>

//             <div>
//               <label className="block text-sm font-medium text-gray-700">
//                 Password
//               </label>
//               <input
//                 type="password"
//                 placeholder="Enter your password"
//                 className="w-full mt-1 border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-orange-400"
//               />
//             </div>

//             <button
//               type="submit"
//               className="w-full bg-orange-500 text-white font-semibold py-3 rounded-xl hover:bg-orange-600 transition"
//             >
//               {isLogin ? "Login" : "Sign Up"}
//             </button>
//           </form>

//           <p className="text-center text-gray-600 mt-5 text-sm">
//             {isLogin ? "New to Aashray?" : "Already have an account?"}{" "}
//             <button
//               onClick={() => setIsLogin(!isLogin)}
//               className="text-orange-500 font-medium hover:underline"
//             >
//               {isLogin ? "Create an account" : "Login here"}
//             </button>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Auth;

import React, { useState } from "react";
import { Heart } from "lucide-react";
import axiosInstance from "../configs/axios";
import { useNavigate } from "react-router-dom";

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setMessage("");
    setLoading(true);

    try {
      const endpoint = isLogin ? "/api/auth/login" : "/api/auth/register";
      const payload = isLogin
        ? { email: formData.email, password: formData.password }
        : {
            name: formData.name,
            email: formData.email,
            password: formData.password,
          };

      const res = await axiosInstance.post(endpoint, payload);

      if (res.data.success) {
        setMessage(res.data.message);
        // small delay for user feedback before redirect
        setTimeout(() => navigate("/"), 800);
      } else {
        setError(res.data.message || "Something went wrong");
      }
    } catch (err) {
      setError(err.response?.data?.message || "Server error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Left Section */}
      <div className="hidden md:flex flex-1 bg-orange-100 items-center justify-center relative">
        <div
          className="text-center p-8 cursor-pointer"
          onClick={() => navigate("/")}
        >
          <Heart className="text-orange-500 mx-auto w-16 h-16 mb-4" />
          <h1 className="text-4xl font-bold text-orange-600 mb-3">AASHRAY</h1>
          <p className="text-gray-700 text-lg">
            Your community, your home. <br /> Stay connected, stay inspired.
          </p>
        </div>
      </div>

      {/* Right Section - Auth Form */}
      <div className="flex-1 flex items-center justify-center bg-white p-8">
        <div className="w-full max-w-md rounded-2xl shadow-lg border border-gray-100 p-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
            {isLogin ? "Welcome Back!" : "Create Your Account"}
          </h2>

          {error && (
            <p className="text-red-500 text-sm text-center mb-3">{error}</p>
          )}
          {message && (
            <p className="text-green-500 text-sm text-center mb-3">{message}</p>
          )}

          <form className="space-y-4" onSubmit={handleSubmit}>
            {!isLogin && (
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Full Name
                </label>
                <input
                  name="name"
                  type="text"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full mt-1 border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-orange-400"
                />
              </div>
            )}

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                name="email"
                type="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full mt-1 border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                name="password"
                type="password"
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleChange}
                required
                className="w-full mt-1 border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-orange-500 text-white font-semibold py-3 rounded-xl hover:bg-orange-600 transition disabled:opacity-50"
            >
              {loading ? "Please wait..." : isLogin ? "Login" : "Sign Up"}
            </button>
          </form>

          <p className="text-center text-gray-600 mt-5 text-sm">
            {isLogin ? "New to Aashray?" : "Already have an account?"}{" "}
            <button
              onClick={() => setIsLogin(!isLogin)}
              className="text-orange-500 font-medium hover:underline"
            >
              {isLogin ? "Create an account" : "Login here"}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Auth;
