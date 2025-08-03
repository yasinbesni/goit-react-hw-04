import css from "./LoadMoreBtn.module.css";

function LoadMoreBtn(onClick) {
    onClick = onClick.onClick;  
  return (
    <div className={css.loadMore}>
      <button className={css.button} onClick={onClick}>Load More</button>
    </div>
  );
}

export default LoadMoreBtn;
