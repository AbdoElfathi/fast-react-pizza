import Header from "./Header";
import CardOverview from "../features/cart/CartOverview";
import { Outlet } from "react-router-dom";

function AppLayout() {
  return (
    <div>
      <Header />
      <main>
        <Outlet />
      </main>
      <CardOverview />
    </div>
  );
}

export default AppLayout;
