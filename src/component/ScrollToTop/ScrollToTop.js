import React, { useState } from "react";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import "./ScrollToTop.css";
import { Tooltip } from "@material-ui/core";
const ScrollToTop = () => {
  const [showScroll, setShowScroll] = useState(false);

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 400) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 400) {
      setShowScroll(false);
    }
  };

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  window.addEventListener("scroll", checkScrollTop);

  return (
    <Tooltip title="Scroll Up">
      <KeyboardArrowUpIcon
        className="scrollTop"
        onClick={scrollTop}
        fontSize="large"
        style={{
          height: 50,
          width: 50,
          color: "white",
          display: showScroll ? "flex" : "none",
        }}
      />
    </Tooltip>
  );
};

export default ScrollToTop;
