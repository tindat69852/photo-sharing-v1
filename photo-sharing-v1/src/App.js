import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import TopBar from "./components/TopBar";
import UserList from "./components/UserList";
import UserDetail from "./components/UserDetail";
import UserPhotos from "./components/UserPhotos";

function App() {
  return (
    <Router>
      <TopBar />
      <div style={{ display: "flex" }}>
        <UserList />
        <Routes>
          <Route path="/users" element={<UserList />} />
          <Route path="/users/:userId" element={<UserDetail />} />
          <Route path="/photos/:userId" element={<UserPhotos />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;