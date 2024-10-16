import React, { useEffect, useState } from 'react';

function End() {
  const [isGlowing, setIsGlowing] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsGlowing((prev) => !prev); // Toggle glowing state every second
    }, 1000); // Change the interval as desired

    return () => clearInterval(interval); // Clean up interval on unmount
  }, []);

  return (
    <div
      className="flex flex-col items-center justify-center h-screen bg-black p-5"
      style={{ height: '100px' }} // Adjust height to make it small
    >
      <h1
        className="text-xl font-Code font-semibold text-white"
        style={{
          textShadow: isGlowing
            ? "0px 0px 25px rgba(255, 255, 255, 0.9)" // Thicker glowing effect
            : "none", // No glow effect
          margin: 0, // Remove default margin
          transition: "text-shadow 0.5s ease", // Smooth transition for the glow effect
        }}
      >
        End of our Journey.
      </h1>
    </div>
  );
}

export default End;
