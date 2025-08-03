import { useEffect } from "react";
import css from "./ImageModal.module.css";

function ImageModal({ image, onClose }) {
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  return (
    <div className={css.overlay} onClick={onClose}>
      <div className={css.modal}>
        <img src={image.urls.regular} alt={image.description} />
      </div>
    </div>
  );
}

export default ImageModal;
