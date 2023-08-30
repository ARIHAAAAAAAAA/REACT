// import React from "react";
import Title from "./Title";

export default function Header() {
  return (
    <header style={{display: "flex", justifyContent: "space-between", alignItems: "center" }}>
      <Title title = "my website" />
      <button>button</button>
    </header>
  );
}
