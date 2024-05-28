import { useEffect, useState } from "react";
import { useReducedMotion as FMuseReducedMotion } from "framer-motion";

export default function useReducedMotion(motionState) {
  const reducedMotion = FMuseReducedMotion();

  useEffect(() => {}, [motionState, reducedMotion]);

  return motionState.noMotion || reducedMotion;
}
