import css from "./SearchBar.module.css";
import toast, { Toaster } from "react-hot-toast";

const SearchBar = ({ onSearch }) => {
  const handleSearch = (evt) => {
    evt.preventDefault();

    const form = evt.target;
    const query = form.elements.query.value;
    if (query.trim() === "") {
      toast.error("Please enter search term!");
      return;
    }
    onSearch(query);
    form.reset();
  };

  // SVG için ayrı fonksiyon
  const handleIconClick = () => {
    const input = document.querySelector(`.${css.searchbar}`);
    const query = input.value;
    if (query.trim() === "") {
      toast.error("Please enter search term!");
      return;
    }
    onSearch(query);
    input.value = "";
  };

  return (
    <>
      <header className={css.header}>
        <form className={css.form} onSubmit={handleSearch}>
          <div className={css.inputWrapper}>
            <input
              className={css.searchbar}
              type="text"
              name="query"
              autoComplete="off"
              autoFocus
              placeholder="Search images and photos"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className={`${css.searchIcon}`}
              onClick={handleIconClick}
              style={{ cursor: "pointer" }}
            >
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.3-4.3" />
            </svg>
          </div>
        </form>
      </header>

      <Toaster />
    </>
  );
};

export default SearchBar;
