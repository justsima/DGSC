import SignIn from "./pages/signin";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./theme";
import { useState } from "react";
import Dashboard from "./pages/Dashboard";
import AddInventory from "./pages/Inventory";
import ViewInventory from "./pages/ViewInventory";
// import OrderDetails from "./pages/Order";
import OrderDetails from "./pages/order/OrderDetail";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NotFound from "./pages/404";
import Orders from "./pages/order/index";
import AddLocation from "./pages/location/AddLocation";
import ViewLocation from "./pages/location/ViewLocation";

const App = (props) => {
  return (
    <div className="w-[100vw]">
      <ThemeProvider theme={theme}>
        <Router>
          <Routes>
            <Route path="/" element={<SignIn />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/Inventory" element={<AddInventory/>}/>
            <Route path="/ViewInventory" element={<ViewInventory/>}/>
            <Route path="/Order" element={<Orders/>}/>
            <Route path="/AddLocation" element={<AddLocation/>}/>
            <Route path="/ViewLocation" element={<ViewLocation/>}/>
            <Route path="/OrderDetails" element={<OrderDetails/>}/>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </div>
  );
};

export default App;
