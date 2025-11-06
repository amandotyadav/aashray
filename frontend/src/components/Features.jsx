import React from "react";

const Features = () => {
  return (
    <div className="py-24 bg-linear-to-b from-amber-50 to-white text-4xl text-red-500 px-5 md:px-10">
      <div className="text-center mb-20">
        <h2 className="text-5xl font-bold text-gray-900 mb-6">
          Everything You Need to{" "}
          <span className="text-orange-500">Connect &amp; Grow</span>
        </h2>
        <p className="text-2xl text-gray-600 max-w-3xl mx-auto">
          Discover all the features designed specifically for senior citizens to
          thrive online
        </p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="text-card-foreground shadow p-8 rounded-3xl border-4 border-gray-200 hover:border-orange-300 transition-all duration-300 hover:shadow-xl bg-white">
          <div className="w-20 h-20 bg-blue-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-message-circle w-12 h-12 text-white"
            >
              <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"></path>
            </svg>
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Community Chat
          </h3>
          <p className="text-xl text-gray-700 leading-relaxed">
            Connect with fellow retirees in real-time. Share stories, ask
            questions, and build lasting friendships.
          </p>
        </div>
        <div className="text-card-foreground shadow p-8 rounded-3xl border-4 border-gray-200 hover:border-orange-300 transition-all duration-300 hover:shadow-xl bg-white">
          <div className="w-20 h-20 bg-green-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-lightbulb w-12 h-12 text-white"
            >
              <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"></path>
              <path d="M9 18h6"></path>
              <path d="M10 22h4"></path>
            </svg>
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Skill Exchange
          </h3>
          <p className="text-xl text-gray-700 leading-relaxed">
            Share your expertise or learn something new. From cooking to
            technology, there's always something to discover.
          </p>
        </div>
        <div className="text-card-foreground shadow p-8 rounded-3xl border-4 border-gray-200 hover:border-orange-300 transition-all duration-300 hover:shadow-xl bg-white">
          <div className="w-20 h-20 bg-purple-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-heart w-12 h-12 text-white"
            >
              <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
            </svg>
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Mentorship Corner
          </h3>
          <p className="text-xl text-gray-700 leading-relaxed">
            Give back by mentoring others or receive guidance on your new
            adventures. Experience matters here.
          </p>
        </div>
        <div className="text-card-foreground shadow p-8 rounded-3xl border-4 border-gray-200 hover:border-orange-300 transition-all duration-300 hover:shadow-xl bg-white">
          <div className="w-20 h-20 bg-orange-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-shield w-12 h-12 text-white"
            >
              <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
            </svg>
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Project Match Making
          </h3>
          <p className="text-xl text-gray-700 leading-relaxed">
            Connects retired individuals with projects and people who need their
            expertise.
          </p>
        </div>
        <div className="text-card-foreground shadow p-8 rounded-3xl border-4 border-gray-200 hover:border-orange-300 transition-all duration-300 hover:shadow-xl bg-white">
          <div className="w-20 h-20 bg-pink-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-users w-12 h-12 text-white"
            >
              <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
              <circle cx="9" cy="7" r="4"></circle>
              <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
              <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
            </svg>
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            AKS (REFLECTION OF LIFE)
          </h3>
          <p className="text-xl text-gray-700 leading-relaxed">
            Retirees share their life stories and experiences to inspire, guide
            and connect with others.
          </p>
        </div>
        <div className="text-card-foreground shadow p-8 rounded-3xl border-4 border-gray-200 hover:border-orange-300 transition-all duration-300 hover:shadow-xl bg-white">
          <div className="w-20 h-20 bg-indigo-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-clock w-12 h-12 text-white"
            >
              <circle cx="12" cy="12" r="10"></circle>
              <polyline points="12 6 12 12 16 14"></polyline>
            </svg>
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Volunteering
          </h3>
          <p className="text-xl text-gray-700 leading-relaxed">
            Young volunteers support and collaborate with retirees in community
            events and social initiatives.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Features;
