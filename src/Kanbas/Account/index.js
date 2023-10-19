import React from "react";
import { useParams, Routes, Route, Navigate, useLocation } from "react-router-dom";
// import db from "../Database";
import AccountNavigation from "./AccountNavigation";
import Notifications from "./Notifications";
import Profile from "./Profile";
import Files from "./Files";
import Settings from "./Settings";
import ePortfolios from "./ePortfolios";
import SharedContent from "./SharedContent";
import TheHub from "./TheHub";
import QwicklyCourseTools from "./QwicklyCourseTools";
import GlobalAnnouncements from "./GlobalAnnouncements";

function Account() {
  const { AccountId } = useParams();
  return (
    <div>
      <h1>Account</h1>
      <hr />
      <div>
        <AccountNavigation />
        <div className="overflow-y-scroll col-9">
          <Routes>
            <Route path="/" element={<Navigate to="Profile" />} />
            <Route path="Profile" element={<Profile />} />
            <Route path="Notifications" element={<Notifications />} />
            <Route path="Files" element={<Files />} />
            <Route path="Settings" element={<Settings />} />
            <Route path="ePortfolios" element={<ePortfolios />} />
            <Route path="SharedContent" element={<SharedContent />} />
            <Route path="TheHub" element={<TheHub />} />
            <Route path="QwicklyCourseTools" element={<QwicklyCourseTools />} />
            <Route path="GlobalAnnouncements" element={<GlobalAnnouncements />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}
export default Account;