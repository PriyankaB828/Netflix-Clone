import React, { useState } from "react";
import movieList from "../../data/movieList";
import Modal from "react-modal";

Modal.setAppElement("#root");

const MovieRow = () => {
  const [selectedTrailer, setSelectedTrailer] = useState(null);
  const [darkMode, setDarkMode] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredMovies = movieList.filter((movie) =>
    movie.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const themeStyles = {
    backgroundColor: darkMode ? "#121212" : "#f4f4f4",
    color: darkMode ? "#fff" : "#000",
    minHeight: "100vh",
    transition: "0.3s ease all",
  };

  return (
    <div style={{ ...themeStyles, padding: "2rem" }}>
      
      {/* Movie Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "1.5rem",
        }}
      >
        {filteredMovies.map((movie) => (
          <div
            key={movie.id}
            style={{ position: "relative", textAlign: "center" }}
          >
            <div
              style={{
                position: "relative",
                overflow: "hidden",
                borderRadius: "10px",
                transition: "transform 0.3s ease",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.transform = "scale(1.05)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.transform = "scale(1)")
              }
            >
              <img
                src={movie.poster_path}
                alt={movie.title}
                style={{
                  width: "100%",
                  height: "300px",
                  objectFit: "cover",
                  borderRadius: "10px",
                  display: "block",
                }}
              />

              {/* Glowing ▶ Play Button */}
              <button
                onClick={() => setSelectedTrailer(movie.trailerId)}
                style={{
                  position: "absolute",
                  bottom: "15px",
                  left: "50%",
                  transform: "translateX(-50%)",
                  backgroundColor: "#fff",
                  color: "#000",
                  padding: "10px 24px",
                  borderRadius: "6px",
                  border: "none",
                  fontWeight: "bold",
                  cursor: "pointer",
                  fontSize: "15px",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  boxShadow: "0 0 0 transparent",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateX(-50%) scale(1.1)";
                  e.currentTarget.style.boxShadow =
                    "0 0 15px rgba(255, 255, 255, 0.7)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateX(-50%) scale(1)";
                  e.currentTarget.style.boxShadow = "0 0 0 transparent";
                }}
              >
                ▶ Play
              </button>
            </div>

            {/* Title & Synopsis */}
            <h3 style={{ marginTop: "10px" }}>{movie.title}</h3>
            <p style={{ fontSize: "0.85rem", color: darkMode ? "#ccc" : "#555" }}>
              {movie.synopsis}
            </p>
          </div>
        ))}
      </div>

      {/* Trailer Modal */}
      <Modal
        isOpen={!!selectedTrailer}
        onRequestClose={() => setSelectedTrailer(null)}
        style={{
          content: {
            maxWidth: "800px",
            margin: "auto",
            background: "black",
            padding: "0",
            borderRadius: "12px",
            overflow: "hidden",
          },
        }}
      >
        <iframe
          width="100%"
          height="450"
          src={`https://www.youtube.com/embed/${selectedTrailer}`}
          title="YouTube Trailer"
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </Modal>
    </div>
  );
};

export default MovieRow;
