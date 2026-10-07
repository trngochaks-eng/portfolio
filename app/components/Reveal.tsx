"use client";

import {
  type CSSProperties,
  type ElementType,
  type ReactNode,
  useEffect,
  useRef,
} from "react";

type RevealProps = {
  as?: ElementType;
  delay?: number;
  id?: string;
  className?: string;
  style?: CSSProperties;
  children?: ReactNode;
};

/**
 * Fades an element in once its top edge enters the viewport.
 * Content stays visible without JavaScript, for blocks already on screen,
 * and for blocks the reader has jumped past with an anchor link.
 */
export default function Reveal({
  as,
  delay = 0,
  className = "",
  style,
  ...rest
}: RevealProps) {
  const Tag: ElementType = as ?? "div";
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const isReached = () =>
      element.getBoundingClientRect().top < window.innerHeight * 0.88;

    if (isReached()) return;

    element.setAttribute("data-reveal", "hidden");

    let frame = 0;
    const cleanup = () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
    const check = () => {
      frame = 0;
      if (isReached()) {
        element.setAttribute("data-reveal", "shown");
        cleanup();
      }
    };
    function onScroll() {
      if (!frame) frame = requestAnimationFrame(check);
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return cleanup;
  }, []);

  return (
    <Tag
      ref={ref}
      className={`reveal ${className}`}
      style={{ ...style, transitionDelay: delay ? `${delay}ms` : undefined }}
      {...rest}
    />
  );
}
