import ReactModal from "react-modal";
import css from "./ImageModal.module.css";

ReactModal.setAppElement("#root"); // Accessibility için zorunlu

function ImageModal({ image, onClose }) {
  return (
    <ReactModal
      isOpen={Boolean(image)}             // Modal açık/kapalı durumu
      onRequestClose={onClose}            // ESC veya overlay tıklamasıyla kapanma
      className={css.modal}
      overlayClassName={css.overlay}
      shouldCloseOnOverlayClick={true}
      shouldCloseOnEsc={true}
    >
      {image && (
        <img
          src={image.urls.regular}
          alt={image.description || "Image"}
          className={css.modalImage}
        />
      )}
    </ReactModal>
  );
}

export default ImageModal;
