import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

const App = () => {
  return (
    <main>
      <div className="pattern" />
      <div className="wrapper">
        <header>
          <h1>
            Find <span className="text-gradient">Movies</span> You&apos;ll
            Enjoy!
          </h1>
        </header>
        <p>Search</p>
      </div>
    </main>
  );
};

export default App;
