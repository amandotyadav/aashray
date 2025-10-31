import React from "react";

const GetStartNow = () => {
  return (
    <div class="bg-linear-to-r from-orange-500 to-orange-600 py-20">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="text-5xl font-bold text-white mb-6">
          Ready to Join Our Community?
        </h2>
        <p class="text-2xl text-orange-100 mb-10">
          Your next chapter starts here. Connect, learn, and grow with AASHRAY
          today.
        </p>
        <button class="bg-white text-orange-600 px-12 py-8 text-2xl font-bold rounded-2xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300">
          Get Started Now
        </button>
      </div>
    </div>
  );
};

export default GetStartNow;
