type Props = {
  onPrevious: () => void;
  onNext: () => void;

  onPlay: () => void;
  onPause: () => void;

  isPlaying: boolean;

  onSpeedChange: (
    speed: number
  ) => void;
};

export default function Controls({
  onPrevious,
  onNext,
  onPlay,
  onPause,
  isPlaying,
  onSpeedChange,
}: Props) {
  return (
    <div className="flex gap-4">

      <button
        onClick={onPrevious}
        className="
          border
          px-4
          py-2
          rounded
        "
      >
        Previous
      </button>

      {isPlaying ? (
        <button
          onClick={onPause}
          className="
            border
            px-4
            py-2
            rounded
          "
        >
          Pause
        </button>
      ) : (
        <button
          onClick={onPlay}
          className="
            border
            px-4
            py-2
            rounded
          "
        >
          Play
        </button>
      )}

      <button
        onClick={onNext}
        className="
          border
          px-4
          py-2
          rounded
        "
      >
        Next
      </button>

      <div className="flex gap-2 ml-8">

  <button
    onClick={() =>
      onSpeedChange(2000)
    }
    className="
      border
      px-4
      py-2
      rounded
    "
  >
    0.5x
  </button>

  <button
    onClick={() =>
      onSpeedChange(1000)
    }
    className="
      border
      px-4
      py-2
      rounded
    "
  >
    1x
  </button>

  <button
    onClick={() =>
      onSpeedChange(500)
    }
    className="
      border
      px-4
      py-2
      rounded
    "
  >
    2x
  </button>

</div>

    </div>
  );
}