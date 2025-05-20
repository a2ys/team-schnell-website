import AOS from "aos";
import "aos/dist/aos.css";

export const AOSInit = () => {
  if (typeof window !== "undefined") {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: true,
    });
  }
};
