// VideoModal.tsx

import React, { useEffect } from "react";
import "./VideoModal.scss";

interface VideoModalProps {
  isOpen: boolean;
  videoId: string;
  onClose: () => void;
}

const VideoModal: React.FC<VideoModalProps> = ({
  isOpen,
  videoId,
  onClose,
}) => {

  /* ESC CLOSE */
  useEffect(() => {

    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleEsc);
    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleEsc);
    };

  }, [isOpen, onClose]);

  if (!isOpen || !videoId) return null;

  return (
    <div className="videoModal">

      {/* OVERLAY */}
      <div
        className="videoOverlay"
        onClick={onClose}
      ></div>

      {/* CONTENT */}
      <div className="videoContent">

        <button
          className="closeBtn"
          onClick={onClose}
        >
          ×
        </button>

        <iframe
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
          title="Video Player"
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
        />

      </div>

    </div>
  );
};

export default VideoModal;