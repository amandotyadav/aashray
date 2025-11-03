// import React from "react";

// const Footer = () => {
//   return (
//     <footer class="bg-white border-t-4 border-orange-400 mt-16">
//       <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
//         <div class="text-center">
//           <div class="flex justify-center mb-6">
//             <div class="w-16 h-16 bg-gradient-to-br from-orange-400 to-orange-600 rounded-2xl flex items-center justify-center">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="24"
//                 height="24"
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 stroke="currentColor"
//                 stroke-width="2"
//                 stroke-linecap="round"
//                 stroke-linejoin="round"
//                 class="lucide lucide-heart w-10 h-10 text-white fill-white"
//               >
//                 <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
//               </svg>
//             </div>
//           </div>
//           <h3 class="text-3xl font-bold text-gray-900 mb-3">AASHRAY</h3>
//           <p class="text-xl text-gray-600 mb-6">
//             Building connections, sharing wisdom, enriching lives
//           </p>
//           <p class="text-lg text-gray-500">
//             © 2025 AASHRAY. A welcoming space for senior citizens to connect,
//             learn, and grow together.
//           </p>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

// import React from "react";
// import { Facebook, Instagram, Twitter, Mail, Heart } from "lucide-react";

// const Footer = () => {
//   return (
//     <footer className="bg-gradient-to-br from-orange-50 to-orange-100 border-t-4 border-orange-400 mt-16 text-gray-700">
//       <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">
//         {/* Brand Section */}
//         <div className="flex flex-col items-center md:items-start text-center md:text-left">
//           <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-orange-600 rounded-2xl flex items-center justify-center mb-4 shadow-md">
//             <Heart className="w-8 h-8 text-white fill-white" />
//           </div>
//           <h3 className="text-2xl font-bold text-gray-900 mb-2">AASHRAY</h3>
//           <p className="text-gray-600 leading-relaxed">
//             Building connections, sharing wisdom, enriching lives.
//           </p>
//         </div>

//         {/* Links Section */}
//         <div className="flex flex-col items-center md:items-start">
//           <h4 className="text-lg font-semibold text-gray-900 mb-3">
//             Quick Links
//           </h4>
//           <ul className="space-y-2">
//             <li>
//               <a href="#" className="hover:text-orange-600 transition-colors">
//                 About Us
//               </a>
//             </li>
//             <li>
//               <a href="#" className="hover:text-orange-600 transition-colors">
//                 Community
//               </a>
//             </li>
//             <li>
//               <a href="#" className="hover:text-orange-600 transition-colors">
//                 Events
//               </a>
//             </li>
//             <li>
//               <a href="#" className="hover:text-orange-600 transition-colors">
//                 Contact
//               </a>
//             </li>
//           </ul>
//         </div>

//         {/* Social / Contact Section */}
//         <div className="flex flex-col items-center md:items-start">
//           <h4 className="text-lg font-semibold text-gray-900 mb-3">
//             Stay Connected
//           </h4>
//           <p className="text-gray-600 mb-4 text-center">
//             Join our vibrant community and never miss an update.
//           </p>
//           <div className="flex gap-4">
//             <a
//               href="#"
//               className="p-2 bg-orange-500 text-white rounded-full hover:bg-orange-600 transition-colors"
//             >
//               <Facebook className="w-5 h-5" />
//             </a>
//             <a
//               href="#"
//               className="p-2 bg-orange-500 text-white rounded-full hover:bg-orange-600 transition-colors"
//             >
//               <Instagram className="w-5 h-5" />
//             </a>
//             <a
//               href="#"
//               className="p-2 bg-orange-500 text-white rounded-full hover:bg-orange-600 transition-colors"
//             >
//               <Twitter className="w-5 h-5" />
//             </a>
//             <a
//               href="mailto:contact@aashray.com"
//               className="p-2 bg-orange-500 text-white rounded-full hover:bg-orange-600 transition-colors"
//             >
//               <Mail className="w-5 h-5" />
//             </a>
//           </div>
//         </div>
//       </div>

//       {/* Bottom Bar */}
//       <div className="border-t border-orange-200 mt-8">
//         <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row items-center justify-between text-sm text-gray-500">
//           <p>© {new Date().getFullYear()} AASHRAY. All rights reserved.</p>
//           <p className="flex items-center gap-1 mt-2 md:mt-0">
//             Made with{" "}
//             <Heart className="w-4 h-4 text-orange-500 fill-orange-500" /> by
//             <span className="font-medium text-gray-700">Team Aashray</span>
//           </p>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

// import React from "react";
// import { Facebook, Instagram, Twitter, Mail, Heart } from "lucide-react";

// const Footer = () => {
//   return (
//     <footer className="bg-gradient-to-t from-orange-900 via-orange-800 to-orange-700 text-orange-50 mt-16 relative">
//       <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/noise.png')] opacity-10"></div>

//       <div className="relative max-w-7xl mx-auto px-6 py-16 text-center">
//         {/* Logo + Title */}
//         <div className="flex flex-col items-center justify-center mb-6">
//           <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-orange-600 rounded-2xl flex items-center justify-center shadow-lg shadow-orange-500/30">
//             <Heart className="w-8 h-8 text-white fill-white" />
//           </div>
//           <h2 className="text-3xl font-bold mt-4 tracking-wide">AASHRAY</h2>
//           <p className="text-orange-100 mt-2 text-lg max-w-lg mx-auto">
//             A space where every story matters — connecting, caring, and growing
//             together.
//           </p>
//         </div>

//         {/* Social Media */}
//         <div className="flex justify-center gap-6 my-8">
//           <a
//             href="#"
//             className="p-3 bg-orange-600/20 rounded-full hover:bg-orange-600/40 transition-all hover:scale-110"
//           >
//             <Facebook className="w-6 h-6 text-white" />
//           </a>
//           <a
//             href="#"
//             className="p-3 bg-orange-600/20 rounded-full hover:bg-orange-600/40 transition-all hover:scale-110"
//           >
//             <Instagram className="w-6 h-6 text-white" />
//           </a>
//           <a
//             href="#"
//             className="p-3 bg-orange-600/20 rounded-full hover:bg-orange-600/40 transition-all hover:scale-110"
//           >
//             <Twitter className="w-6 h-6 text-white" />
//           </a>
//           <a
//             href="mailto:contact@aashray.com"
//             className="p-3 bg-orange-600/20 rounded-full hover:bg-orange-600/40 transition-all hover:scale-110"
//           >
//             <Mail className="w-6 h-6 text-white" />
//           </a>
//         </div>

//         {/* Links */}
//         <div className="flex flex-wrap justify-center gap-6 text-orange-200 mb-10 text-sm font-medium">
//           <a href="#" className="hover:text-white transition-colors">
//             About Us
//           </a>
//           <a href="#" className="hover:text-white transition-colors">
//             Community
//           </a>
//           <a href="#" className="hover:text-white transition-colors">
//             Events
//           </a>
//           <a href="#" className="hover:text-white transition-colors">
//             Support
//           </a>
//           <a href="#" className="hover:text-white transition-colors">
//             Contact
//           </a>
//         </div>

//         {/* Copyright */}
//         <div className="border-t border-orange-500/40 pt-6 flex flex-col md:flex-row justify-center items-center gap-2 text-orange-300 text-sm">
//           <p>© {new Date().getFullYear()} AASHRAY. All rights reserved.</p>
//           <span className="hidden md:inline-block mx-2">|</span>
//           <p className="flex items-center gap-1">
//             Made with{" "}
//             <Heart className="w-4 h-4 text-orange-400 fill-orange-400" /> by{" "}
//             <span className="font-semibold text-orange-200">Team Aashray</span>
//           </p>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

import React from "react";
import { Facebook, Instagram, Twitter, Linkedin, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative mt-20 backdrop-blur-xl bg-white/70 border-t border-orange-200 shadow-inner">
      <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col items-center text-center">
        {/* Logo */}
        <div className="flex items-center justify-center gap-3 mb-4">
          <div className="w-14 h-14 bg-linear-to-br from-orange-400 to-orange-600 rounded-2xl flex items-center justify-center shadow-lg shadow-orange-500/30">
            <Heart className="w-7 h-7 text-white fill-white" />
          </div>
          <h2 className="text-3xl font-bold text-gray-800">AASHRAY</h2>
        </div>

        {/* Tagline */}
        <p className="text-gray-600 text-lg max-w-2xl mb-8">
          Building connections, sharing wisdom, and creating a community where
          every moment matters.
        </p>

        {/* Social icons */}
        <div className="flex justify-center gap-6 mb-8">
          <a
            href="#"
            className="p-3 rounded-full bg-orange-100 hover:bg-orange-500 hover:text-white transition-all duration-300"
          >
            <Facebook className="w-5 h-5" />
          </a>
          <a
            href="#"
            className="p-3 rounded-full bg-orange-100 hover:bg-orange-500 hover:text-white transition-all duration-300"
          >
            <Instagram className="w-5 h-5" />
          </a>
          <a
            href="#"
            className="p-3 rounded-full bg-orange-100 hover:bg-orange-500 hover:text-white transition-all duration-300"
          >
            <Twitter className="w-5 h-5" />
          </a>
          <a
            href="#"
            className="p-3 rounded-full bg-orange-100 hover:bg-orange-500 hover:text-white transition-all duration-300"
          >
            <Linkedin className="w-5 h-5" />
          </a>
        </div>

        {/* Links */}
        <div className="flex flex-wrap justify-center gap-8 text-gray-700 text-sm mb-10">
          <a href="#" className="hover:text-orange-500 transition-colors">
            About
          </a>
          <a href="#" className="hover:text-orange-500 transition-colors">
            Services
          </a>
          <a href="#" className="hover:text-orange-500 transition-colors">
            Blog
          </a>
          <a href="#" className="hover:text-orange-500 transition-colors">
            Contact
          </a>
          <a href="#" className="hover:text-orange-500 transition-colors">
            Privacy Policy
          </a>
        </div>

        {/* Copyright */}
        <div className="border-t border-orange-200 w-full pt-6 text-sm text-gray-500 flex flex-col md:flex-row items-center justify-center gap-2">
          <p>© {new Date().getFullYear()} AASHRAY. All rights reserved.</p>
          <span className="hidden md:inline-block">|</span>
          <p className="flex items-center gap-1">
            Made with{" "}
            <Heart className="w-4 h-4 text-orange-400 fill-orange-400" /> by{" "}
            <span className="font-semibold text-orange-500">Team Aashray</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
