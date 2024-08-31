import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

interface AutoScrollToTopProps {
  children: React.ReactNode;
}

const AutoScrollToTop: React.FC<AutoScrollToTopProps> = ({ children }) => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [pathname]); // Scrolls when the pathname changes

  return <>{children}</>;
};

export default AutoScrollToTop;
