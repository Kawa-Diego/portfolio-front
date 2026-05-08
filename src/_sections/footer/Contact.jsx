import { contact, socials } from "../../../_constants/footer";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/all";
import "../../styles/Contact.style.css";
import gsap from "gsap";

export default function Contact() {
  useGSAP(() => {
    const startValue = SplitText.create("#section-contact h4", {
      type: "chars",
    });
    const startValue2 = SplitText.create("#section-contact p", {
      type: "chars",
    });
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: "#section-contact",
        startValue,
        startValue2,
        start: "top center",
      },
      ease: "power1.inOut",
    });

    timeline
      .from(startValue.chars, {
        opacity: 0,
        yPercent: 50,
        stagger: 0.02,
      })
      .from(startValue2.chars, {
        opacity: 0,
        yPercent: 50,
        stagger: 0.02,
      })
      .from("#section-contact p", {
        y: "-30",
        duration: 0.5,
        ease: "power1.inOut",
      })
      .from("#section-contact h4", {
        y: "-30",
        duration: 0.5,
        ease: "power1.inOut",
      });

    const socialButtons = gsap.utils.toArray("#contact-handling .social-btn");
    socialButtons.forEach((button, index) => {
      timeline.from(
        button,
        {
          opacity: 0,
          yPercent:-10,
          duration: 0.45,
          ease: "power1.inOut",
        },
        index === 0 ? "-=0.2" : "-=0.3"
      );
    });
  });

  return (
    <section className="section-contact" id="section-contact">
      <div className="contact-container mx-auto flex items-center justify-between gap-5">
        <div className="contact-describe">
          <div className="contact-describe-text-one">
            <h4>{contact.heading}</h4>
          </div>
          <div className="contact-describe-text-two">
            <p>{contact.contact.email + " • " + contact.contact.phone}</p>
          </div>
        </div>
        <div className="contact-handling" id="contact-handling">
          {socials.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.name}
              className="social-btn"
            >
              <span
                className="social-mask"
                style={{ "--icon-url": `url(${social.icon})` }}
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
