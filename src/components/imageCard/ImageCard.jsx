import css from "./ImageCard.module.css";

function ImageCard({ item, onClick }) {
  return (
    <div className={css.imageCard}>
      <img
        src={item.urls.small}
        alt={item.description || "Image"}
        className={css.imageCardItem}
        onClick={() => onClick(item)} // Tıklama olayı eklendi
      />
    </div>
  );
}

export default ImageCard;
