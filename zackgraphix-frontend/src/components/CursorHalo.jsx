import { useEffect, useRef } from "react";

export default function CursorHalo() {
  const ref = useRef(null);

  useEffect(() => {
    const media = window.matchMedia(
      "(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)"
    );
    let detach = () => {};

    const attach = () => {
      const halo = ref.current;
      let frame = 0;
      let x = 0;
      let y = 0;

      const move = (event) => {
        x = event.clientX;
        y = event.clientY;
        halo.dataset.active = String(
          Boolean(event.target.closest?.("a, button, summary"))
        );

        if (!frame) {
          frame = requestAnimationFrame(() => {
            halo.style.transform = `translate3d(${x}px, ${y}px, 0)`;
            halo.style.opacity = "1";
            frame = 0;
          });
        }
      };

      const hide = () => { halo.style.opacity = "0"; };

      window.addEventListener("pointermove", move);
      document.documentElement.addEventListener("pointerleave", hide);
      window.addEventListener("blur", hide);

      return () => {
        cancelAnimationFrame(frame);
        window.removeEventListener("pointermove", move);
        document.documentElement.removeEventListener("pointerleave", hide);
        window.removeEventListener("blur", hide);
        hide();
      };
    };

    const sync = () => {
      detach();
      detach = media.matches ? attach() : () => {};
    };

    sync();
    media.addEventListener("change", sync);

    return () => {
      detach();
      media.removeEventListener("change", sync);
    };
  }, []);

  return <div ref={ref} className="cursor-halo" aria-hidden="true" />;
}