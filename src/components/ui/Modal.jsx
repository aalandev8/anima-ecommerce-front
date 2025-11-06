import React, { useEffect } from "react";

export const Modal = ({ isOpen, onClose, children }) => {
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [onClose, isOpen]);

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };
  if (!isOpen) return null;
  return (
    <div
      className="
fixed inset-0 z-50
flex items-center justify-center
bg-[#556030]/10 backdrop-blur-sm"
      onClick={handleOverlayClick}
    >
      <div
        className="
bg-[#FCF4E8] rounded-lg shadow-xl
overflow-y-auto"
      >
        
        {children}
      </div>
    </div>
  );
};
