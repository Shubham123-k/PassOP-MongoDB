import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Manager from "./components/Manager";
import Footer from "./components/Footer";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className="relative min-h-screen overflow-x-hidden">

      {/* DARK MODE BACKGROUND (YOURS) */}
      {darkMode && (
        <div className="fixed top-0 z-[-2] h-screen w-screen bg-neutral-950 
        bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      )}

      {/* LIGHT MODE BACKGROUND (YOURS) */}
      {!darkMode && (
        <div className="fixed inset-0 -z-10 h-full w-full bg-green-50 
        bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),
        linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] 
        bg-[size:14px_24px]">
          <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-green-400 opacity-20 blur-[100px]"></div>
        </div>
      )}

      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

      <Manager darkMode={darkMode} />

      <Footer darkMode={darkMode} />
    </div>
  );
}

export default App;