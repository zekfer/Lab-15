import nature from "../images/nature.jpg";
import "../index.css";

function Home({ title }) {
  return (
    <>
      {title === "first" ? (
        <div
          style={{
            display: "flex",
            textAlign: "center",
            gap: "3rem",
          }}
          className="text"
        >
          <img src={nature} alt="Random Nature" className="home-image" />
          <a
            href="wikipedia.com"
            className="link"
            style={{ marginTop: "2rem" }}
          >
            Wikipedia
          </a>
        </div>
      ) : title === "second" ? (
        <p style={{ fontSize: "1.5rem", padding: "1rem" }}>
          Welcome this is the first React App that we have created together hope
          yall enjoed our session today with greeting Anonymous
        </p>
      ) : (
        <p>No Matching Article</p>
      )}
    </>
  );
}

export default Home;
