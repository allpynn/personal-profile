import { useMemo } from "react";
import useIsMobile from "./useIsMobile";

/**
 * Returns true if animations should be reduced:
 * - Device is mobile (< 768px), OR
 * - User prefers reduced motion
 */
export function useReducedMotion() {
  const isMobile = useIsMobile(768);
  return useMemo(() => {
    if (isMobile) return true;
    if (typeof window !== "undefined" && window.matchMedia) {
      return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    }
    return false;
  }, [isMobile]);
}

export default useReducedMotion;
