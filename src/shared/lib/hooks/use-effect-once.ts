import { EffectCallback, useEffect } from 'react';

/**
 * The `useEffectOnce` function in TypeScript is used to run a side effect only once when a component
 * mounts.
 * @param {EffectCallback} effect - The `effect` parameter in the `useEffectOnce` function is a
 * function that contains the side effect you want to perform. This function will be executed only once
 * when the component mounts.
 */
export function useEffectOnce(effect: EffectCallback) {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(effect, []);
}
