import React from "react";
import ReactDOM from "react-dom/client";

// My Css
import "./assets/css/style.css";
import BaiTapReactBuoi2 from "./components/BaiTapReactBuoi2.jsx";
import Content from "./components/Content.jsx";
import Header from "./components/Header.jsx";
import Item from "./components/Item.jsx";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div>
    <BaiTapReactBuoi2 />
  </div>
);
