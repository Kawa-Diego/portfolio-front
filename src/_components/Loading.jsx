import { useEffect, useState } from "react";
import "../styles/Loading.styles.css";

export default function Loading() {
  const [showIntro, setShowIntro] = useState(false);
  const [isIntroLeaving, setIsIntroLeaving] = useState(false);

  useEffect(() => {
    const hasSeenIntro = window.sessionStorage.getItem("portfolio-intro-seen");
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (hasSeenIntro || reduceMotion) return;

    setShowIntro(true);
    document.body.style.overflow = "hidden";

    const startLeavingTimeout = window.setTimeout(() => {
      setIsIntroLeaving(true);
    }, 1500);

    const finishTimeout = window.setTimeout(() => {
      setShowIntro(false);
      setIsIntroLeaving(false);
      window.sessionStorage.setItem("portfolio-intro-seen", "1");
      document.body.style.overflow = "";
    }, 2100);

    return () => {
      window.clearTimeout(startLeavingTimeout);
      window.clearTimeout(finishTimeout);
      document.body.style.overflow = "";
    };
  }, []);

    return (
      <>
      {showIntro && (
        <div className={`intro-overlay ${isIntroLeaving ? "intro-overlay-leave" : ""}`}>
          <div className="intro-content">
            <div className="intro-progress">
              <span className="intro-progress-bar" />
            </div>
          </div>
        </div>
      )}
    </>
  );
}  