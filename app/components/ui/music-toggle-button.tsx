// attribution to Skiper UI
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import useSound from "use-sound";

import { useBoolean } from "~/hooks/use-boolean";

const BARS = 5;
const AUDIO_SRC = "";

export const MusicToggleButton = () => {
  const getRandomHeights = () => {
    return Array.from({ length: BARS }, () => Math.random() * 0.8 + 0.2);
  };

  const [heights, setHeights] = useState(getRandomHeights());

  const [playing, { setTrue: setPlayingTrue, setFalse: setPlayingFalse }] =
    useBoolean(false);

  const [play, { pause }] = useSound(AUDIO_SRC, {
    loop: true,
    onplay: setPlayingTrue,
    onend: setPlayingFalse,
    onpause: setPlayingFalse,
    onstop: setPlayingFalse,
    soundEnabled: true,
  });

  useEffect(() => {
    if (playing) {
      const waveformIntervalId = setInterval(() => {
        setHeights(getRandomHeights());
      }, 100);

      return () => {
        clearInterval(waveformIntervalId);
      };
    }
    setHeights(Array(BARS).fill(0.1));
  }, [playing]);

  const handleClick = () => (playing ? pause() : play());

  return (
    <motion.div
      onClick={handleClick}
      key="audio"
      initial={{ scale: 1 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 1.1 }}
      transition={{ duration: 1, bounce: 0.6, type: "spring" }}
      style={{ transformOrigin: "center" }}
      className="bg-background flex cursor-pointer items-center rounded-full border border-dotted"
    >
      <motion.div
        initial={{ opacity: 0, filter: "blur(4px)" }}
        animate={{
          opacity: 1,
          filter: "blur(0px)",
        }}
        exit={{ opacity: 0, filter: "blur(4px)" }}
        transition={{ type: "spring", bounce: 0.35 }}
        className="flex h-6 w-auto items-center gap-1 px-4"
      >
        {/* Waveform visualization */}
        {heights.map((height, index) => (
          <motion.div
            key={index}
            className="bg-foreground w-px rounded-sm"
            initial={{ height: 1 }}
            animate={{
              height: Math.max(4, height * 14),
            }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 10,
            }}
          />
        ))}
      </motion.div>
    </motion.div>
  );
};
