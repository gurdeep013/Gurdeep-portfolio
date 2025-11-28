import { useState, useRef, useEffect } from "react";
import { Volume2, VolumeX } from "lucide-react";
import audioFile from "@assets/Rascal Flatts - Life Is A Highway (Lyrics)_1764262917047.mp3";

export default function AudioPlayer() {
  const [isMuted, setIsMuted] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.volume = 0;
    audio.loop = true;

    const handleFirstInteraction = () => {
      if (!hasInteracted) {
        setHasInteracted(true);
        audio.play().catch(() => {});
      }
    };

    document.addEventListener("click", handleFirstInteraction, { once: true });
    document.addEventListener("keydown", handleFirstInteraction, { once: true });

    return () => {
      document.removeEventListener("click", handleFirstInteraction);
      document.removeEventListener("keydown", handleFirstInteraction);
    };
  }, [hasInteracted]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    let animationFrame: number;
    const targetVolume = isMuted ? 0 : 0.3;
    const fadeSpeed = 0.01;

    const fadeVolume = () => {
      if (!audio) return;
      
      if (isMuted && audio.volume > 0) {
        audio.volume = Math.max(0, audio.volume - fadeSpeed);
        animationFrame = requestAnimationFrame(fadeVolume);
      } else if (!isMuted && audio.volume < targetVolume) {
        audio.volume = Math.min(targetVolume, audio.volume + fadeSpeed);
        animationFrame = requestAnimationFrame(fadeVolume);
      }
    };

    fadeVolume();

    return () => {
      if (animationFrame) cancelAnimationFrame(animationFrame);
    };
  }, [isMuted]);

  const toggleMute = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (!hasInteracted) {
      setHasInteracted(true);
      audio.play().catch(() => {});
    }
    
    setIsMuted(!isMuted);
  };

  return (
    <>
      <audio ref={audioRef} src={audioFile} preload="auto" />
      <button
        onClick={toggleMute}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={`fixed bottom-6 right-6 z-50 p-3 rounded-full transition-all duration-300 ${
          isMuted 
            ? "bg-muted/80 text-muted-foreground" 
            : "bg-rust text-white shadow-lg shadow-rust/30"
        } backdrop-blur-sm hover:scale-110`}
        aria-label={isMuted ? "Unmute music" : "Mute music"}
        data-testid="button-audio-toggle"
      >
        {isMuted ? (
          <VolumeX className="h-5 w-5" />
        ) : (
          <Volume2 className="h-5 w-5 animate-pulse" />
        )}
      </button>
      
      {isHovered && (
        <div className="fixed bottom-6 right-20 z-50 bg-card/95 backdrop-blur-sm px-3 py-2 rounded-lg text-xs text-muted-foreground shadow-lg animate-fade-in">
          {isMuted ? "Play Life Is A Highway" : "Playing..."}
        </div>
      )}
    </>
  );
}
