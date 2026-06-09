import * as React from "react";

export declare function useCountUp(
  target?: number,
  duration?: number
): {
  ref: React.RefObject<HTMLElement>;
  value: number;
};