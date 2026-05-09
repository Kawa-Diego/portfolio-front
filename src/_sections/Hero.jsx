import { useEffect, useState } from "react";
import "../styles/Hero.styles.css";

const STATIC_PREFIX = "I ";
const DESCRIPTION_PHRASES = [
  "am a Fullstack Developer.",
  "build Landing Pages.",
  "create Web Applications.",
];

export default function Hero() {
  const defaultText = "<o-diego.dev>";
  const [activePhraseIndex, setActivePhraseIndex] = useState(0);
  const [typedText, setTypedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const activePhrase = DESCRIPTION_PHRASES[activePhraseIndex];
    const typingSpeed = isDeleting ? 42 : 80;
    let timeoutId;

    if (!isDeleting && typedText === activePhrase) {
      timeoutId = window.setTimeout(() => {
        setIsDeleting(true);
      }, 1400);
    } else if (isDeleting && typedText === "") {
      setIsDeleting(false);
      setActivePhraseIndex((prev) => (prev + 1) % DESCRIPTION_PHRASES.length);
    } else {
      timeoutId = window.setTimeout(() => {
        const nextText = isDeleting
          ? activePhrase.slice(0, typedText.length - 1)
          : activePhrase.slice(0, typedText.length + 1);

        setTypedText(nextText);
      }, typingSpeed);
    }

    return () => window.clearTimeout(timeoutId);
  }, [activePhraseIndex, isDeleting, typedText]);

  return (
    <section className="hero-section" id="section-hero">
      <div className="hero-panel">
        <div className="hero-content">
          <span className="hero-role">{defaultText}</span>

          <h1 className="hero-title">
            Hello, my name is <br />
            <span>Kawã Diego</span>
          </h1>

          <p className="hero-description hero-description-typing" aria-live="polite">
            <span className="hero-description-static">{STATIC_PREFIX}</span>
            <span className="hero-description-dynamic">{typedText}</span>
            <span className="hero-description-caret" aria-hidden="true">
              |
            </span>
          </p>
        </div>

        <span className="hero-dot hero-dot-top" />
        <span className="hero-dot hero-dot-bottom" />
      </div>
    </section>
  );
}
