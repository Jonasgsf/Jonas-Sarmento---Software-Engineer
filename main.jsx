import { useEffect, useRef } from "react";
import "/src/assets/css/index.css"; 

const Header = () => {
  const mainHeaderRef = useRef(null);
  const menuBtnRef = useRef(null);

  useEffect(() => {
    const mainHeader = mainHeaderRef.current;
    const menuBtn = menuBtnRef.current;

    if (!mainHeader || !menuBtn) return;

    const toggleMenu = () => {
      mainHeader.dataset.state =
        mainHeader.dataset.state === "active" ? "closed" : "active";
    };

    menuBtn.addEventListener("click", toggleMenu);

    return () => {
      menuBtn.removeEventListener("click", toggleMenu);
    };
  }, []);

  return (
    <header ref={mainHeaderRef} id="header" data-state="closed">
      <button ref={menuBtnRef} id="menu-btn">
        Menu
      </button>
    </header>
  );
};

export default Header;