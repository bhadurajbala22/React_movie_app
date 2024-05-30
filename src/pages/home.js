// src/pages/Home.js
// src/pages/Home.js
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="container mx-auto text-center">
      <h1 className="text-4xl font-bold my-8">Welcome to the Movie Library</h1>
      <div className="mt-4">
        <Link to="/signin">
          <button className="bg-blue-500 text-white p-2 rounded m-2">Sign In</button>
        </Link>
        <Link to="/signup">
          <button className="bg-green-500 text-white p-2 rounded m-2">Sign Up</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
