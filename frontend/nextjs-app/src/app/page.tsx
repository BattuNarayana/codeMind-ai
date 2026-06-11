"use client";

import { sampleTrace } from "@/data/sampleTrace";
import { useTraceStore } from "@/store/traceStore";
import TreePanel from "@/components/TreePanel";
import StackPanel from "@/components/StackPanel";
import ResultPanel from "@/components/ResultPanel";
import TraceInfo from "@/components/TraceInfo";
import Controls from "@/components/Controls";
import CodePanel from "@/components/CodePanel";
import CodePanelV2 from "@/components/CodePanelV2";
import { useEffect } from "react";
import Timeline from "@/components/Timeline";

export default function Home() {

  const {
  currentIndex,
  nextStep,
  previousStep,
  isPlaying,
  playbackSpeed,
  play,
  pause,
  reset,
  setSpeed,
  setStep,
} = useTraceStore();

  const snapshot =
    sampleTrace.snapshots[currentIndex];


    useEffect(() => {

  if (!isPlaying) {
    return;
  }

  const interval = setInterval(() => {

    nextStep();

  }, playbackSpeed);

  return () => {
    clearInterval(interval);
  };

}, [
  isPlaying,
  playbackSpeed,
  nextStep,
]);

useEffect(() => {

  if (
    currentIndex ===
    sampleTrace.snapshots.length - 1
  ) {
    pause();
  }

}, [
  currentIndex,
  pause,
]);

const handlePlay = () => {

  if (
    currentIndex ===
    sampleTrace.snapshots.length - 1
  ) {
    reset();
  }

  play();
};


  return (
    <main className="min-h-screen p-8">

      <h1 className="text-3xl font-bold mb-6">
        CodeMind AI
      </h1>

      <TreePanel
        currentNode={snapshot.current_node}
        currentPointer={
            snapshot.metadata?.curr ?? null
        }
        />

      <div className="grid grid-cols-3 gap-4">

  

  <StackPanel
    stack={snapshot.stack}
  />

  <ResultPanel
    result={snapshot.result}
  />

  <CodePanelV2
  activeStatement={snapshot.source_code}
  />

</div>

<div className="mt-6">

  <TraceInfo
    snapshot={snapshot}
  />

</div>

<div className="mt-6">

  <Controls
  onPrevious={previousStep}
  onNext={nextStep}

  onPlay={handlePlay}
  onPause={pause}

  isPlaying={isPlaying}

  onSpeedChange={setSpeed}

  
  />

  <Timeline
  currentIndex={currentIndex}
  maxIndex={
    sampleTrace.snapshots.length - 1
  }
  onChange={setStep}
/>

</div>

    </main>
  );
}