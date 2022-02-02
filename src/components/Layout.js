import React from "react";
import { Oullet, Outlet } from "react-router-dom";
import Header from "./Header";

function Layout(props) {
  return (
    <div>
      <Header />
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
