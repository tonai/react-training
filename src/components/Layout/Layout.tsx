import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import { Suspense } from "react";

function Layout() {
  return (
    <>
      <Header />
      <Suspense fallback="loading...">
        <Outlet />
      </Suspense>
    </>
  );
}
export default Layout;
