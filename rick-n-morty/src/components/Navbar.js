// this will be the holder of our dark mode toggle button
import React from 'react';
import { useDarkMode } from "../hooks/useDarkMode";

// notice this is another way of writing a function
const Navbar = () => {
  const [darkMode, setDarkMode] = useDarkMode(); 
  const toggleMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };
  return (
    <nav className="navbar">
      <p>click Rick to switch between dark and light mode</p>
      <div className="dark-mode__toggle">
        <img
          src="https://lh3.googleusercontent.com/proxy/f1k9qvxPnudlhVXfVyscfIB-qB21dHN6Hbl5KS8SnQHT_ozF195UIhMkmOJ-UgqNxscPSUS-sQVMZbkmoOk1RRr-yGFR42vlHJgBxyDqawpgTv7chLNOB823jaxDuA9WWVDfWURDTKp8ECgfzw"
          onClick={toggleMode}
          className={darkMode ? 'toggle toggled' : 'toggle'}
        />
      </div>
    </nav>
  );
};

export default Navbar;