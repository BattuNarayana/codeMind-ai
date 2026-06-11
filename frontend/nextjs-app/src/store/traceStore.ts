import { create } from "zustand";
import { sampleTrace } from "@/data/sampleTrace";

interface TraceStore {
  currentIndex: number;

  isPlaying: boolean;

  playbackSpeed: number;

  nextStep: () => void;

  previousStep: () => void;

  play: () => void;

  pause: () => void;

  reset: () => void;

  setSpeed: (speed: number) => void;

  setStep: (index: number) => void;
}

export const useTraceStore = create<TraceStore>((set) => ({
  currentIndex: 0,

  isPlaying: false,

  playbackSpeed: 1000,

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

  play: () =>
    set({
      isPlaying: true,
    }),

  pause: () =>
    set({
      isPlaying: false,
    }),

    reset: () =>
    set({
      currentIndex: 0,
      isPlaying: false,
    }),

  setSpeed: (speed) =>
    set({
      playbackSpeed: speed,
    }),

   setStep: (index) =>
  set({
    currentIndex: index,
  }), 
}));