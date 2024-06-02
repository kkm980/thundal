import { useEffect, useRef } from "react";
import { locales } from "./languageSelectorConstant";
import "./style.css";

/**
 * React component that automatically scrolls a container of language titles vertically.
 * @param scrollSpeed - The speed at which the container scrolls in milliseconds.
 * @param className - A CSS class to apply to each language title.
 * @returns A JSX element that renders a scrollable container with language titles.
 */
const AutoScroller = ({ scrollSpeed = 50, className }: { scrollSpeed: number, className: string }): JSX.Element => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;

    const scrollStep = 5; // pixels per step
    const scrollInterval = setInterval(() => {
      scrollContainer.scrollTop += scrollStep;
      if (scrollContainer.scrollTop + scrollContainer.clientHeight >= scrollContainer.scrollHeight) {
        scrollContainer.scrollTop = 0; // reset to top when reaching the bottom
      }
    }, scrollSpeed);

    return () => clearInterval(scrollInterval); // cleanup interval on unmount
  }, [scrollSpeed]);

  return (
    <div ref={scrollContainerRef} className={`w-[100px] h-[60px] overflow-y-scroll overflow-x-hidden autoScrollContainer`}>
      {Object.entries(locales).map(([_, languageObj]: [string, any], index: number) => (
        <div className={`opacity-50 text-center text-[grey] ${className}`} key={index}>
          {languageObj?.title.split(" ")[0]}
        </div>
      ))}
    </div>
  );
};

export default AutoScroller;
