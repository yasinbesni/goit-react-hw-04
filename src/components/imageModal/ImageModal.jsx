import ReactModal from "react-modal";
import css from "./ImageModal.module.css";

ReactModal.setAppElement("#root");

function ImageModal({ image, onClose }) {
  return (
    <ReactModal
      isOpen={Boolean(image)}          // Burada açık/kapalı durumu kontrolü
      onRequestClose={onClose}
      className={css.modal}
      overlayClassName={css.overlay}
    >
      {image && (
        <img
          src={image.urls.regular}
          alt={image.description || "Image"}
        />
      )}
    </ReactModal>
  );
}

export default ImageModal;
