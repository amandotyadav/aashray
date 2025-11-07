import React, { useEffect, useRef, useState } from "react";
import { SendHorizontal, UsersRound } from "lucide-react";
import { io } from "socket.io-client";
import { useNavigate } from "react-router-dom";

const CommunityChat = () => {
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState([]);
  const [socket, setSocket] = useState(null);
  const navigate = useNavigate();
  const chatEndRef = useRef(null);

  useEffect(() => {
    const newSocket = io("http://localhost:3000", {
      withCredentials: true,
      transports: ["websocket", "polling"],
    });
    setSocket(newSocket);

    newSocket.on("connect", () => console.log("✅ Connected:", newSocket.id));
    newSocket.on("connect_error", (err) =>
      console.error("❌ Connection error:", err.message)
    );

    newSocket.on("receiveMessage", (data) => {
      setChat((prev) => [...prev, data]);
    });

    return () => newSocket.disconnect();
  }, []);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chat]);

  const sendMessage = () => {
    if (!message.trim() || !socket) return;

    const newMsg = {
      user: "You",
      text: message,
      time: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    };

    setChat((prev) => [...prev, newMsg]);
    socket.emit("sendMessage", message);
    setMessage("");
  };

  return (
    <div className="w-full h-screen flex flex-col">
      {/* Top bar */}
      <div className="w-full h-20 flex items-center justify-between px-6 shadow-md fixed top-0 left-0 z-50 bg-white">
        <div className="flex gap-3 items-center">
          <UsersRound className="text-orange-500" />
          <div className="flex flex-col">
            <span className="font-bold text-lg">Community Chat</span>
            <span className="text-sm text-green-600">
              {chat.length} messages
            </span>
          </div>
        </div>
        <div
          onClick={() => navigate(-1)}
          className="cursor-pointer flex items-center gap-1 px-4 py-2 btn bg-orange-500 text-white"
        >
          <span>Go Back</span>
        </div>
      </div>

      {/* Chat area */}
      <div className="flex-1 pt-24 pb-28 overflow-y-auto bg-gray-50 scrollbar-hide">
        <div className="max-w-4xl mx-auto px-4 space-y-4">
          {chat.map((msg, index) => {
            const isMine = msg.user === "You";
            return (
              <div
                key={index}
                className={`flex ${
                  isMine ? "justify-end" : "justify-start"
                } items-end`}
              >
                <div
                  className={`max-w-[75%] p-3 rounded-2xl shadow-md ${
                    isMine
                      ? "bg-orange-500 text-white rounded-br-none"
                      : "bg-white text-gray-800 border border-gray-200 rounded-bl-none"
                  }`}
                >
                  <p className="text-sm font-semibold mb-1">
                    {isMine ? "You" : msg.user}
                  </p>
                  <p>{msg.text}</p>
                  <p className="text-xs opacity-70 mt-1 text-right">
                    {msg.time}
                  </p>
                </div>
              </div>
            );
          })}

          <div ref={chatEndRef}></div>
        </div>
      </div>

      {/* Input field */}
      <div className="fixed bottom-4 w-[90%] border py-3 flex items-center justify-between rounded-2xl px-4 left-1/2 -translate-x-1/2 shadow-lg bg-white">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter" && !e.shiftKey) {
              e.preventDefault();
              sendMessage();
            }
          }}
          placeholder="Type your message..."
          className="border-none outline-none w-full px-2 text-gray-700"
        />

        <button
          onClick={sendMessage}
          className="cursor-pointer bg-orange-500 text-white px-4 py-2 rounded-full hover:bg-orange-600 transition-all"
        >
          <SendHorizontal />
        </button>
      </div>
    </div>
  );
};

export default CommunityChat;
