import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";

const TITLE = "ADNA COSMETICS";
const isFirstVisit = !sessionStorage.getItem("adna_visited");
sessionStorage.setItem("adna_visited", "1");

export default function Preloader() {
  const [show, setShow] = useState(isFirstVisit);

  useEffect(() => {
    if (!show) return;
    document.documentElement.style.overflow = "hidden";

    const isPhone = window.matchMedia("(max-width: 767px)").matches;
    const TARGET = isPhone ? 3000 : 2000;   // ms od navigacije do razkritja
    const MIN_HOLD = isPhone ? 2200 : 1800; // da animacija vedno odigra do konca

    let timer: ReturnType<typeof setTimeout>;
    let cancelled = false;

    const startCountdown = () => {
      if (cancelled) return;
      const remaining = Math.max(MIN_HOLD, TARGET - performance.now());
      timer = setTimeout(() => {
        setShow(false);
        document.documentElement.style.overflow = "";
      }, remaining);
    };

    // Počakaj na pisavo, da se napis ne "prestavi" sredi animacije,
    // nato zaženi odštevanje vezano na začetek nalaganja strani.
    if (typeof document !== "undefined" && document.fonts?.ready) {
      document.fonts.ready.then(startCountdown);
    } else {
      startCountdown();
    }

    return () => {
      cancelled = true;
      clearTimeout(timer);
      document.documentElement.style.overflow = "";
    };
  }, [show]);

  return (
    <AnimatePresence>
      {show && (
        <>
          <motion.div
            key="curtain-nude"
            className="fixed inset-0 z-[99] bg-brand-nude"
            exit={{ y: "-100%" }}
            transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1], delay: 0.12 }}
          />
          <motion.div
            key="curtain-dark"
            className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-brand-dark"
            exit={{ y: "-100%" }}
            transition={{ duration: 0.85, ease: [0.76, 0, 0.24, 1] }}
          >
            <div className="overflow-hidden px-4 whitespace-nowrap">
              {TITLE.split("").map((ch, i) => (
                <motion.span
                  key={i}
                  initial={{ y: "115%" }}
                  animate={{ y: "0%" }}
                  transition={{ delay: 0.15 + i * 0.04, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                  className="inline-block font-serif text-[22px] tracking-[0.18em] text-brand-light sm:text-3xl sm:tracking-[0.25em] md:text-5xl"
                >
                  {ch === " " ? "\u00A0" : ch}
                </motion.span>
              ))}
            </div>
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.4, duration: 1.3, ease: [0.22, 1, 0.36, 1] }}
              className="mt-5 h-px w-32 origin-left bg-brand-taupe sm:mt-6 sm:w-40 md:w-56"
            />
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="mt-4 px-4 text-center text-[10px] tracking-[0.28em] uppercase text-brand-light/60 sm:mt-5 sm:text-[11px] sm:tracking-[0.35em]"
            >
              Kozmetični salon · Vrhnika
            </motion.p>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
