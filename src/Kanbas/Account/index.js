import React from "react";
import { Routes, Route, Navigate,} from "react-router-dom";
import AccountNavigation from "./AccountNavigation";
import Profile from "./Profile";


function Account() {
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
          </Routes>
        </div>
      </div>
    </div>
  );
}
export default Account;