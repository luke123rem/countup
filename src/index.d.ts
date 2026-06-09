import * as React from "react";

export declare function useCountUpOnView(
  target?: number,
  duration?: number
): {
  ref: React.RefObject<HTMLElement>;
  value: number;
};