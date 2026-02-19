import React from "react";
import { Outlet } from "react-router-dom";
import ProductsShell from "./ProductsShell";
import "./products.css";

export default function ProductsLayout() {
  return (
    <main className="prodWrap">
      <ProductsShell />
      <section className="prodBody">
        <Outlet />
      </section>
    </main>
  );
}
