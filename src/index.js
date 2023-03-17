import React from "react";
import ReactDOM from "react-dom/client";
import CycloPediaClassPage from "./CycloPediaClassPage";
import CycloPediaFuncPage from "./CycloPediaFuncPage";
import Header from "./Header";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div>
    <Header />
    <div className="row text-white">
      <div className="col-6">
        <span className="h1 text-wanring text-center">Class Component</span>
        <CycloPediaClassPage />
      </div>
      <div className="col-6">
        <span className="h1 text-wanring text-center">Func Component</span>
        <CycloPediaFuncPage />
      </div>
    </div>
  </div>
);
