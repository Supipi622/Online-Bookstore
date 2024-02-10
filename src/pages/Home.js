import React from "react";
import "./Home.css";
import BookList from "../components/BookList";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/addbook");
  };
  return (
    <>
      <div className="home-container">
        <div className="content">
          <h1>Knowledge Collection</h1>
          <p>
            A Microsoft Certified Trainer (MCT) and Certified Speaking
            Professional (CSP), Dawn Bjork is known as The Software Pro® for her
            work as a productivity speaker, software trainer, virtual presenter,
            and author of numerous training courses and videos. In addition to
            these credentials, Dawn is also a certified Microsoft Office
            Specialist Master (MOSM) and Certified Virtual Presenter (CVP).
          </p>
          <button onClick={handleClick}>Add collection</button>
        </div>
        <div className="image"> </div>
      </div>

      <BookList />
    </>
  );
};

export default Home;
