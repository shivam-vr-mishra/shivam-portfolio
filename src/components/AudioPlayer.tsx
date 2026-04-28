"use client";

import { useState, useEffect, useRef } from "react";
import { Volume2, VolumeX } from "lucide-react";
import { motion } from "framer-motion";

export default function AudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Note: The user needs to provide a 'bg-music.mp3' file in the 'public' folder.
    audioRef.current = new Audio("/bg-music.mp3");
    audioRef.current.loop = true;
    audioRef.current.volume = 0.3; // Gentle background volume
  }, []);

  const togglePlay = () => {
    if (!audioRef.current) return;
    
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play()
        .then(() => setIsPlaying(true))
        .catch(e => {
          console.error("Audio playback failed.", e);
          alert("Audio playback failed. Please ensure you have added a 'bg-music.mp3' file to your 'public' folder.");
        });
    }
  };

  return (
    <motion.button
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-6 left-6 z-50 p-4 rounded-full glass border border-white/10 text-white hover:bg-white/10 transition-colors shadow-lg shadow-neon-blue/20"
      onClick={togglePlay}
      title={isPlaying ? "Pause Music" : "Play Music"}
    >
      {isPlaying ? <Volume2 size={24} className="text-neon-cyan" /> : <VolumeX size={24} className="text-gray-400" />}
    </motion.button>
  );
}
