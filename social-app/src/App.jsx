import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Create from "./pages/Create";
import Profile from "./pages/Profile";
import Home from "./pages/Home";
import Nav from "./components/Nav";
import { useState } from "react";
import Explore from "./pages/Explore";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export default function App() {
  const queryClient = new QueryClient();
  const [showFollowers, setShowFollowers] = useState(false);
  const [showFollowing, setShowFollowing] = useState(false);

  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <div className="sm:max-w-[calc(100%-160px) mx-auto min-h-screen border-[2px] border-t-0 border-white bg-slate-900 px-0 pt-4">
          <Nav />
          <Routes>
            <Route path="/explore" element={<Explore />} />
            <Route path="/create" element={<Create />} />
            <Route path="/" element={<Home />} />
            <Route
              path="/profile"
              element={
                <Profile
                  showFollowers={showFollowers}
                  showFollowing={showFollowing}
                  setShowFollowers={setShowFollowers}
                  setShowFollowing={setShowFollowing}
                />
              }
            />
          </Routes>
        </div>
      </Router>
    </QueryClientProvider>
  );
}
