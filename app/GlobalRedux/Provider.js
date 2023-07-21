"use client";
import React from "react";
import { Provider } from "react-redux";

export function Providers({ children, store }) {
  return <Provider store={store}>{children}</Provider>;
}
