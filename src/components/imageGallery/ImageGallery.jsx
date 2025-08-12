import ImageCard from "../imageCard/ImageCard";
import css from "./ImageGallery.module.css";

function ImageGallery({ images, onImageClick }) {
  return (
    <ul className={css.ImageGallery}>
      {images.map((image) => (
        <li key={image.id} className={css.ImageGalleryItem}>
          <ImageCard item={image} onClick={onImageClick} />
        </li>
      ))}
    </ul>
  );
}

export default ImageGallery;
