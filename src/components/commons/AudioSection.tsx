"use client";
import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useState,
} from "react";
import { Button } from "../ui/button";
import { Volume2, VolumeOff } from "lucide-react";

const AudioSection = forwardRef((props: { audioUrl: string }, ref) => {
  const [audioLoaded, setAudioLoaded] = useState(false);
  const [audioPlaying, setAudioPlaying] = useState(false);

  useEffect(() => {
    const audioElement = document.getElementById("myAudio") as HTMLAudioElement;

    const handleCanPlayThrough = () => {
      setAudioLoaded(true);
    };

    audioElement.addEventListener("canplaythrough", handleCanPlayThrough);

    document.addEventListener("visibilitychange", function () {
      if (document.hidden) {
        // Page is not visible (tab switched or window minimized)
        pauseAudio();
      } else {
        // Page is visible (tab gained focus)
        playAudio();
      }
    });

    return () => {
      audioElement.removeEventListener("canplaythrough", handleCanPlayThrough);
    };
  }, []);

  const pauseAudio = () => {
    const audioElement = document.getElementById("myAudio") as HTMLAudioElement;
    audioElement.pause();
    setAudioPlaying(false);
  };

  const playAudio = () => {
    const audioElement = document.getElementById("myAudio") as HTMLAudioElement;
    audioElement.play();
    setAudioPlaying(true);
  };

  useImperativeHandle(ref, () => ({
    playAudio,
  }));

  return (
    <>
      <audio
        id="myAudio"
        className="hidden"
        preload="auto"
        loop
        onEnded={pauseAudio}
      >
        <source src={props.audioUrl} type="audio/mp3" />
        Your browser does not support the audio tag.
      </audio>
      <div className="fixed z-50 bottom-5 right-5">
        <Button
          className="rounded-full"
          size="icon"
          onClick={audioPlaying ? pauseAudio : playAudio}
        >
          {audioPlaying ? (
            <Volume2 className="w-5 h-5" />
          ) : (
            <VolumeOff className="w-5 h-5" />
          )}
        </Button>
      </div>
    </>
  );
});

AudioSection.displayName = "AudioSection";

export default AudioSection;
