import { useEffect } from "react";

export const useAsyncEffect = (
  effect: () => Promise<void>,
  deps: Array<unknown>
) => {
  useEffect(() => {
    effect();
  }, deps);
};
