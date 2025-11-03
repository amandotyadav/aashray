import {
  ArrowBigLeft,
  EllipsisVertical,
  SendHorizontal,
  UsersRound,
} from "lucide-react";
import React from "react";
import { useNavigate } from "react-router-dom";

const CommunityChat = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full max-h-screen">
      {/* topbar */}
      <div className="w-full h-20 flex items-center justify-between px-4 shadow-md fixed top-0 left-0 z-50 bg-white">
        <div className="flex gap-3 items-center">
          <UsersRound />
          <div className="flex flex-col">
            <span className="font-bold text-lg">Community Chat</span>
            <span className="text-sm text-green-600">24 members online</span>
          </div>
        </div>

        <div
          onClick={() => navigate(-1)}
          className="cursor-pointer flex items-center gap-1 px-4 py-2 btn bg-orange-500 text-white"
        >
          {/* <ArrowBigLeft /> */}
          <span>Go Back</span>
        </div>
      </div>

      {/* chat area */}
      <div className="w-full h-screen relative">
        {/* chat */}
        <div className="py-30 max-w-7xl mx-auto px-4 xl:px-0">
          <div className="chat chat-start">
            <div className="chat-image avatar">
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS chat bubble component"
                  src="https://img.daisyui.com/images/profile/demo/kenobee@192.webp"
                />
              </div>
            </div>
            <div className="chat-header">
              Obi-Wan Kenobi
              <time className="text-xs opacity-50">12:45</time>
            </div>
            <div className="chat-bubble">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores,
              libero?
            </div>
            <div className="chat-footer opacity-50">Delivered</div>
          </div>
          <div className="chat chat-end">
            <div className="chat-image avatar">
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS chat bubble component"
                  src="https://img.daisyui.com/images/profile/demo/anakeen@192.webp"
                />
              </div>
            </div>
            <div className="chat-header">
              Anakin
              <time className="text-xs opacity-50">12:46</time>
            </div>
            <div className="chat-bubble">Lorem ipsum dolor sit amet.</div>
            <div className="chat-footer opacity-50">Seen at 12:46</div>
          </div>
          <div className="chat chat-start">
            <div className="chat-image avatar">
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS chat bubble component"
                  src="https://img.daisyui.com/images/profile/demo/kenobee@192.webp"
                />
              </div>
            </div>
            <div className="chat-header">
              Obi-Wan Kenobi
              <time className="text-xs opacity-50">12:45</time>
            </div>
            <div className="chat-bubble">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores,
              libero?
            </div>
            <div className="chat-footer opacity-50">Delivered</div>
          </div>
          <div className="chat chat-end">
            <div className="chat-image avatar">
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS chat bubble component"
                  src="https://img.daisyui.com/images/profile/demo/anakeen@192.webp"
                />
              </div>
            </div>
            <div className="chat-header">
              Anakin
              <time className="text-xs opacity-50">12:46</time>
            </div>
            <div className="chat-bubble">Lorem ipsum dolor sit amet.</div>
            <div className="chat-footer opacity-50">Seen at 12:46</div>
          </div>
          <div className="chat chat-start">
            <div className="chat-image avatar">
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS chat bubble component"
                  src="https://img.daisyui.com/images/profile/demo/kenobee@192.webp"
                />
              </div>
            </div>
            <div className="chat-header">
              Obi-Wan Kenobi
              <time className="text-xs opacity-50">12:45</time>
            </div>
            <div className="chat-bubble">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores,
              libero?
            </div>
            <div className="chat-footer opacity-50">Delivered</div>
          </div>
          <div className="chat chat-end">
            <div className="chat-image avatar">
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS chat bubble component"
                  src="https://img.daisyui.com/images/profile/demo/anakeen@192.webp"
                />
              </div>
            </div>
            <div className="chat-header">
              Anakin
              <time className="text-xs opacity-50">12:46</time>
            </div>
            <div className="chat-bubble">Lorem ipsum dolor sit amet.</div>
            <div className="chat-footer opacity-50">Seen at 12:46</div>
          </div>
          <div className="chat chat-start">
            <div className="chat-image avatar">
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS chat bubble component"
                  src="https://img.daisyui.com/images/profile/demo/kenobee@192.webp"
                />
              </div>
            </div>
            <div className="chat-header">
              Obi-Wan Kenobi
              <time className="text-xs opacity-50">12:45</time>
            </div>
            <div className="chat-bubble">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores,
              libero?
            </div>
            <div className="chat-footer opacity-50">Delivered</div>
          </div>
          <div className="chat chat-end">
            <div className="chat-image avatar">
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS chat bubble component"
                  src="https://img.daisyui.com/images/profile/demo/anakeen@192.webp"
                />
              </div>
            </div>
            <div className="chat-header">
              Anakin
              <time className="text-xs opacity-50">12:46</time>
            </div>
            <div className="chat-bubble">Lorem ipsum dolor sit amet.</div>
            <div className="chat-footer opacity-50">Seen at 12:46</div>
          </div>
        </div>

        {/* typing */}
        <div className="fixed bottom-4 w-[90%] border py-3 flex items-center justify-between rounded-2xl px-4 left-1/2 -translate-x-1/2 shadow-lg bg-white">
          <input
            type="text"
            placeholder="Type your message here..."
            className="border-none outline-none w-full px-2"
          />
          <button className="cursor-pointer bg-orange-500 text-white px-4 py-2 rounded-full">
            <SendHorizontal />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CommunityChat;
