import { create } from "zustand";
import { sampleTrace } from "@/data/sampleTrace";

interface TraceStore {
  currentIndex: number;

  nextStep: () => void;

  previousStep: () => void;
}

export const useTraceStore = create<TraceStore>((set) => ({
  currentIndex: 0,

  nextStep: () =>
    set((state) => ({
      currentIndex: Math.min(
        state.currentIndex + 1,
        sampleTrace.snapshots.length - 1
      ),
    })),

  previousStep: () =>
    set((state) => ({
      currentIndex: Math.max(
        state.currentIndex - 1,
        0
      ),
    })),
}));