import "./App.css";
import { useState } from "react";
import SearchBar from "./components/searchBar/SearchBar";
import fetchImages from "./pictures-api";
import ImageGallery from "./components/imageGallery/ImageGallery";
import Loader from "./components/loader/Loader";
import ErrorMessage from "./components/errorMessage/ErrorMessage";
import LoadMoreBtn from "./components/loadMoreBtn/LoadMoreBtn";
import ImageModal from "./components/imageModal/ImageModal";

function App() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);

  const handleSearch = async (searchQuery) => {
    try {
      setLoading(true);
      setQuery(searchQuery);
      setPage(1);
      const data = await fetchImages(searchQuery, 1);
      setImages(data);
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  const handleLoadMore = async () => {
    try {
      setLoading(true);
      const nextPage = page + 1;
      const data = await fetchImages(query, nextPage);
      setImages((prevImages) => [...prevImages, ...data]);
      setPage(nextPage);
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: "smooth",
      });
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <>
      <SearchBar onSearch={handleSearch} />
      <ImageGallery images={images} onImageClick={handleImageClick} />
      {loading && <Loader />}
      {error && <ErrorMessage message={error} />}
      {images.length > 0 && <LoadMoreBtn onClick={handleLoadMore} />}
      {selectedImage && (
        <ImageModal image={selectedImage} onClose={closeModal} />
      )}
    </>
  );
}

export default App;
