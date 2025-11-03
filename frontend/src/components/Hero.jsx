import React from "react";
import assets from "../assets/assets";
import { Users } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();
  return (
    <div
      className="hero min-h-screen bg-cover bg-center relative"
      style={{
        backgroundImage:
          "url(https://images.unsplash.com/photo-1504004030892-d06adf9ffbcf?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=1170)",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30 backdrop-blur-[2px]" />

      {/* Content container */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-center md:justify-between w-full min-h-screen px-6 sm:px-10 lg:px-20 text-neutral-content gap-10">
        {/* Left text section */}
        <div className="w-full md:w-1/2 text-center md:text-left flex flex-col items-center md:items-start">
          <h1 className="mb-5 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight drop-shadow-lg">
            Your Companion for a New Beginning!
          </h1>

          <p className="mb-6 text-md font-medium sm:text-base md:text-lg lg:text-xl text-gray-200 leading-relaxed max-w-lg">
            AASHRAY is your welcoming online community where experience meets
            friendship. Connect with fellow retirees, share your wisdom, learn
            new skills, and build meaningful relationships.
          </p>

          <button
            onClick={() => navigate("/communitychat")}
            className="btn btn-lg flex items-center gap-2 mt-2 shadow-md hover:scale-105 transition-transform duration-300"
          >
            <Users className="w-5 h-5" />
            <span>Join the Conversation</span>
          </button>
        </div>

        {/* Right image section */}
        <div className="w-full md:w-1/2 relative h-64 sm:h-80 md:h-[500px] rounded-2xl overflow-hidden shadow">
          <img
            src={assets.heroImg}
            alt="Community togetherness"
            className="w-full h-full object-cover object-bottom transition-transform duration-700 hover:scale-105"
          />

          {/* Caption overlay */}
          <div className="absolute bottom-0 left-0 w-full bg-black/60 px-6 py-4">
            <h2 className="text-2xl sm:text-3xl font-semibold">
              Together, We Thrive
            </h2>
            <p className="text-sm sm:text-base">
              Building connections that last a lifetime
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
