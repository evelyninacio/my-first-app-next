"use client"
import Profile from "../components/Profile"
import Theme from "../components/ThemeSwitch"
import Links from "../components/LinksList"
import SocialLinks from "../components/SocialLinks"

import { useState, useEffect } from "react";

export default function Home() {
  const [isLight, setIsLight] = useState(true);

  function toggleMode() {
    setIsLight((prev) => !prev);
  }

  useEffect(() => {
    if (isLight) {
      document.documentElement.classList.add("light");
    } else {
      document.documentElement.classList.remove("light");
    }
  }, [isLight]);

  return (
    <div id="container">
      <Profile isLight={isLight} />
      <Theme toggleMode={toggleMode} />
      <Links />
      <SocialLinks />
      <footer>Feito com ♥</footer>
    </div>
  );
}
