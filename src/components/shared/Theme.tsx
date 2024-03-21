'use client';

import { Setting2 } from 'iconsax-react';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

const Theme = () => {
  const [themDir, setThemDir] = useState('');
  const [modalOpen, setModelOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleThemeSwitch = () => {
    theme == 'light' ? setTheme('dark') : setTheme('light');
    setModelOpen(false);
  };

  useEffect(() => {
    const storeDir = localStorage.getItem('themeDir');
    if (storeDir) {
      setThemDir(storeDir);
    } else {
      setThemDir('ltr');
    }
  }, [themDir]);

  const handleRtl = () => {
    if (themDir === 'ltr') {
      localStorage.setItem('themeDir', 'rtl');
      setThemDir('rtl');
    } else {
      localStorage.setItem('themeDir', 'ltr');
      setThemDir('ltr');
    }
    setModelOpen(false);
  };

  const handleModalOpen = () => {
    setModelOpen(!modalOpen);
  };

  useEffect(() => {
    document.documentElement.dir = themDir;
  }, [themDir]);

  if (!mounted) {
    return null;
  }

  // return (
  //   <>
  //     <div className="theme-modal-button">
  //       <button onClick={handleModalOpen}>
  //         <Setting2
  //           size="32"
  //           color="#ff6900"
  //           className="rotating setting-icon"
  //         />
  //       </button>
  //     </div>{" "}
  //     <div className={`theme-modal ${modalOpen ? "modal-open" : ""}`}>
  //       <button className="theme-modal__theme-dir" onClick={handleRtl}>
  //         {themDir === "ltr" ? "RTL" : "LTR"}
  //       </button>
  //       <button className="theme-modal__theme-dir" onClick={handleThemeSwitch}>
  //         {theme === "dark" ? "Light" : "Dark"}
  //       </button>
  //     </div>
  //   </>
  // );

  return <></>;
};

export default Theme;
