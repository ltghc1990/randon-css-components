import { useState, useEffect } from "react";

const useCurrentWidthHook = () => {
  const [breakpoint, setbreakPoint] = useState(null);

  const determineBreakpoint = () => {
    if (window.innerWidth < 768) {
      setbreakPoint("mobile");
    } else if (window.innerWidth > 768 && window.innerWidth < 1024) {
      setbreakPoint("tablet");
    } else {
      setbreakPoint("desktop");
    }
  };

  const onResize = () => {
    if (breakpoint === "mobile") {
      if (window.innerWidth > 768 && window.innerWidth < 1024) {
        setbreakPoint("tablet");
      } else if (window.innerWidth > 1024) {
        setbreakPoint("desktop");
      }
    }

    if (breakpoint === "tablet") {
      if (window.innerWidth < 768) {
        setbreakPoint("mobile");
      } else if (window.innerWidth > 1024) {
        setbreakPoint("desktop");
      }
    }

    if (breakpoint === "desktop") {
      if (window.innerWidth < 768) {
        setbreakPoint("mobile");
      } else if (window.innerWidth > 768 && window.innerWidth < 1024) {
        setbreakPoint("tablet");
      }
    }
  };

  useEffect(() => {
    determineBreakpoint();
  }, []);

  useEffect(() => {
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("resize", onResize);
    };
  });

  return {
    breakpoint,
  };
};

export default useCurrentWidthHook;
