import { useEffect } from "react";
import type { RefObject } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitText from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger, SplitText);

/* =========================================================
   SPLIT TEXT + BUTTON + HOVER ANIMATION
========================================================= */
const useSplitTextAnimation = <T extends HTMLElement>(
  containerRef: RefObject<T | null>
): void => {

  useEffect(() => {
    if (!containerRef.current) return;

    let splits: SplitText[] = [];
    let rafId: number | null = null;

    const hoverHandlers: {
      el: HTMLElement;
      enter: () => void;
      leave: () => void;
    }[] = [];

    const btnHandlers: {
      el: HTMLElement;
      move: (e: MouseEvent) => void;
      leave: () => void;
    }[] = [];

    const ctx = gsap.context(() => {

      const init = async () => {

        await document.fonts.ready;

        /* =============================
           SPLITTEXT LINE
        ============================== */
        const splitTextLines =
          containerRef.current!.querySelectorAll<HTMLElement>(".splittext-line");

        splitTextLines.forEach((el) => {
          const split = new SplitText(el, { type: "lines" });
          splits.push(split);

          gsap.set(el, { perspective: 400 });

          gsap.from(split.lines, {
            duration: 1,
            opacity: 0,
            rotationX: -80,
            stagger: 0.1,
            scrollTrigger: {
              trigger: el,
              start: "top 90%",
            },
          });
        });

        /* =============================
           POORT TEXT
        ============================== */
        const poortText =
          containerRef.current!.querySelectorAll<HTMLElement>(".poort-text");

        poortText.forEach((el) => {

          const split = new SplitText(el, {
            type: "lines,words,chars",
            linesClass: "poort-line",
          });

          splits.push(split);

          gsap.set(el, { perspective: 600 });

          const direction =
            el.classList.contains("poort-in-right") ? { x: 100 } :
              el.classList.contains("poort-in-left") ? { x: -100 } :
                el.classList.contains("poort-in-up") ? { y: 80 } :
                  el.classList.contains("poort-in-down") ? { y: -80 } : {};

          gsap.set(split.chars, { opacity: 0, ...direction });

          gsap.to(split.chars, {
            x: 0,
            y: 0,
            opacity: 1,
            duration: 0.6,
            stagger: 0.02,
            scrollTrigger: {
              trigger: el,
              start: "top 90%",
            },
          });
        });

        /* =============================
           ROLLING TEXT
        ============================== */
        const rollingTexts =
          containerRef.current!.querySelectorAll<HTMLElement>(".rolling-text");

        rollingTexts.forEach((el) => {

          const wrapper = el.querySelector<HTMLElement>(".text-wrapper");
          if (!wrapper) return;

          const enter = () => gsap.to(wrapper, { yPercent: -50, duration: 0.4 });
          const leave = () => gsap.to(wrapper, { yPercent: 0, duration: 0.4 });

          el.addEventListener("mouseenter", enter);
          el.addEventListener("mouseleave", leave);

          hoverHandlers.push({ el, enter, leave });
        });

        /* =============================
           BUTTON PARALLAX
        ============================== */
        const allBtns =
          containerRef.current!.querySelectorAll<HTMLElement>(".btn-wrapper");

        const btnCircles =
          containerRef.current!.querySelectorAll<HTMLElement>(".btn-move");

        allBtns.forEach((btn, i) => {

          const circle = btnCircles[i];
          if (!circle) return;

          const move = (e: MouseEvent) => {

            if (rafId) cancelAnimationFrame(rafId);

            rafId = requestAnimationFrame(() => {

              const rect = btn.getBoundingClientRect();
              const relX = e.clientX - rect.left;
              const relY = e.clientY - rect.top;

              const movement = 80;

              gsap.to(circle, {
                x: ((relX - rect.width / 2) / rect.width) * movement,
                y: ((relY - rect.height / 2) / rect.height) * movement,
                duration: 0.5,
                ease: "power2.out",
              });

            });
          };

          const leave = () => {
            gsap.to(circle, {
              x: 0,
              y: 0,
              duration: 0.5,
            });
          };

          btn.addEventListener("mousemove", move);
          btn.addEventListener("mouseleave", leave);

          btnHandlers.push({ el: btn, move, leave });
        });

      };

      init();

    }, containerRef);

    return () => {
      splits.forEach((s) => s.revert());
      ctx.revert();

      if (rafId) cancelAnimationFrame(rafId);

      hoverHandlers.forEach(({ el, enter, leave }) => {
        el.removeEventListener("mouseenter", enter);
        el.removeEventListener("mouseleave", leave);
      });

      btnHandlers.forEach(({ el, move, leave }) => {
        el.removeEventListener("mousemove", move);
        el.removeEventListener("mouseleave", leave);
      });
    };

  }, [containerRef]);
};


/* =========================================================
   FLOATING CURSOR
========================================================= */
const useFloatingCursor = <T extends HTMLElement>(
  containerRef: React.RefObject<T | null>
) => {
  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const cursor = container.querySelector<HTMLElement>(".moving-cursor");
    if (!cursor) return;

    let rafId: number;
    let mouseX = 0;
    let mouseY = 0;
    let isMoving = false;

    const enter = () => {
      cursor.style.opacity = "1";
      cursor.style.transform = "scale(1)";
    };

    const move = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const cursorRect = cursor.getBoundingClientRect();

      // 🔥 PERFECT CENTER ALIGNMENT
      mouseX = e.clientX - rect.left - cursorRect.width / 2;
      mouseY = e.clientY - rect.top - cursorRect.height / 2;

      isMoving = true;
    };

    const leave = () => {
      cursor.style.opacity = "0";
      cursor.style.transform = "scale(0)";
    };

    const update = () => {
      if (isMoving) {
        cursor.style.left = `${mouseX}px`;
        cursor.style.top = `${mouseY}px`;
        isMoving = false;
      }
      rafId = requestAnimationFrame(update);
    };

    update();

    container.addEventListener("mouseenter", enter);
    container.addEventListener("mousemove", move);
    container.addEventListener("mouseleave", leave);

    return () => {
      container.removeEventListener("mouseenter", enter);
      container.removeEventListener("mousemove", move);
      container.removeEventListener("mouseleave", leave);
      cancelAnimationFrame(rafId);
    };
  }, [containerRef]);
};

/* =========================================================
   EXPORT
========================================================= */
export { useSplitTextAnimation, useFloatingCursor };