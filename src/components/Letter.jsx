import React, { useState } from "react";
import { motion } from "framer-motion";
import './Letter.css';
import ValentineResponse from './ValentineResponse'; // Import the new component
import LoadingGif from '../images/loading.gif'; // Add your loading GIF here

const Letter = () => {
  const [hovered, setHovered] = useState(false);
  const [password, setPassword] = useState(""); 
  const [buttonPosition, setButtonPosition] = useState({ x: 0, y: 0 });
  const [showResponse, setShowResponse] = useState(false); // State for showing the response
  const [loading, setLoading] = useState(false); // State for loading GIF

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handlePasswordSubmit = (e) => {
  };

  const generateRandomPosition = () => {
    const x = Math.floor(Math.random() * 400) - 200;
    const y = Math.floor(Math.random() * 400) - 200;
    setButtonPosition({ x, y });
  };

  const handleYesClick = () => {
    setLoading(true); // Start loading
    setTimeout(() => {
      setLoading(false); // Stop loading after 5 seconds
      setShowResponse(true); // Show the ValentineResponse component
    }, 5000); // 5 seconds delay
  };

  const handleCloseResponse = () => {
    setShowResponse(false); // Close the response
  };

  return (
    <div className="envelope-container">
      {/* Show loading screen and hide envelope when loading is true */}
      {loading ? (
        <div className="loading-container">
          <img src={LoadingGif} alt="Loading..." className="loading-gif" />
        </div>
      ) : (
        <>
          {false ? (
            <>
              <p>Oops! Looks like the letter is locked...It’s a secret! But, I’ll tell you what... type the date when we first met to unlock the mystery inside. 🥰</p>
              <form onSubmit={handlePasswordSubmit} className="password-form">
                <input
                  type="password"
                  value={password}
                  onChange={handlePasswordChange}
                  placeholder="Enter password"
                  className="password-input"
                />
                <button type="submit" className="password-submit">
                  Submit
                </button>
              </form>
            </>
          ) : (
            <>
              <motion.div
                className="envelope"
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
                transition={{ duration: 0.6 }}
              >
                <motion.div className="flap" transition={{ duration: 0.6 }} />
                <motion.div className="body" transition={{ duration: 0.6 }}>
                  <motion.div
                    className="letter"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: hovered ? 1 : 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <p>Shivani,</p>
                    <p>Today’s the day I get to ask... will you be my Valentine? 💖</p>
                    <p>I know things aren't very great between us but trust me I try my best to make you comfortable around me everyday.</p>
                    <p>I know I over-react sometimes but trust me , I love you💓 </p>
                    <p>I want to spend my every valentine with you.</p>
                    <p>I want to be there for you forever ♾️</p>
                    <p>Only Yours, Kavish 💞</p>
                  </motion.div>
                </motion.div>
              </motion.div>

              <div className="buttons-container">
                <button className="yes-button" onClick={handleYesClick}>Yes</button>
                <motion.button
                  className="no-button"
                  onHoverStart={generateRandomPosition}
                  style={{
                    transform: `translate(${buttonPosition.x}px, ${buttonPosition.y}px)`
                  }}
                >
                  No
                </motion.button>
              </div>
            </>
          )}
        </>
      )}

      {/* Show the ValentineResponse component after loading */}
      {showResponse && (
        <ValentineResponse
          message="You're officially my Valentine, my love 💕. I hope you like this surprise and this brings a smile to your face. 🌟"
          onClose={handleCloseResponse}
        />
      )}
    </div>
  );
};

export default Letter;
