import css from "./ImageCard.module.css";
function ImageCard({ item }) {
  return (
    <div className={css.imageCard}>
      <img
        src={item.urls.small}
        alt={item.description}
        className={css.imageCardItem}
      />
    </div>
  );
}
export default ImageCard;
