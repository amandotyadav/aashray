import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home.jsx";
import Friends from "./pages/Friends.jsx";
import Contact from "./pages/Contact.jsx";
import About from "./pages/About.jsx";
import CommunityChat from "./pages/CommunityChat.jsx";
import ChatComponentLayout from "./layouts/ChatComponentLayout.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        {/* <Route path="communitychat" element={<CommunityChat />} /> */}
      </Route>

      <Route
        path="communitychat"
        element={
          <ChatComponentLayout>
            <CommunityChat />
          </ChatComponentLayout>
        }
      />
    </>
  )
);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
