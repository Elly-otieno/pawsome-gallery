const { useState, useEffect } = React;

const DogBreedExplorer = () => {
  const [breeds, setBreeds] = useState([]);
  const [selectedBreed, setSelectedBreed] = useState(null);
  const [breedImages, setBreedImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(false);

  // Fetch list of dog breeds
  const fetchBreeds = async () => {
    const response = await fetch('https://dog.ceo/api/breeds/list/all');
    const data = await response.json();
    setBreeds(Object.keys(data.message));
  };

  // Fetch all images for a selected dog breed
  const fetchBreedImages = async (breed) => {
    setLoading(true);
    const response = await fetch(`https://dog.ceo/api/breed/${breed}/images`);
    const data = await response.json();
    setBreedImages(data.message);
    setCurrentIndex(0); // Reset the image index
    setSelectedBreed(breed);
    setLoading(false);
  };

  // Handle next image
  const handleNextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % breedImages.length);
  };

  // Handle previous image
  const handlePreviousImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? breedImages.length - 1 : prevIndex - 1
    );
  };

  // Fetch breeds on component mount
  useEffect(() => {
    fetchBreeds();
  }, []);

  return (
    <div className="container">
      <h1>Dog Breed Explorer</h1>

      {/* Breed List */}
      <div className="breed-list">
        <h2>Available Breeds</h2>
        <ul>
          {breeds.map((breed) => (
            <li key={breed} onClick={() => fetchBreedImages(breed)}>
              {breed}
            </li>
          ))}
        </ul>
      </div>

      {/* Breed Details */}
      {selectedBreed && (
        <div className="breed-details">
          <h2>{selectedBreed.charAt(0).toUpperCase() + selectedBreed.slice(1)}</h2>
          {loading ? (
            <p>Loading images...</p>
          ) : (
            <React.Fragment>
              <img
                src={breedImages[currentIndex]}
                alt={selectedBreed}
                className="breed-image"
              />
              <div className="navigation-buttons">
                <button onClick={handlePreviousImage}>Previous</button>
                <button onClick={handleNextImage}>Next</button>
              </div>
            </React.Fragment>
          )}
        </div>
      )}
    </div>
  );
};

ReactDOM.render(<DogBreedExplorer />, document.getElementById('root'));
