import React, { useState } from 'react';
import axios from 'axios';
import Joke from './Joke';
import './DadJokeGenerator.css';

const DadJokeGenerator = () => {
  const [joke, setJoke] = useState('');

  const fetchJoke = async () => {
    try {
      const response = await axios.get('https://icanhazdadjoke.com/', {
        headers: {
          Accept: 'application/json',
        },
      });
      setJoke(response.data.joke);
    } catch (error) {
      console.error('Error fetching joke:', error);
    }
  };

  return (
    <div className="dad-joke-generator">
      <div className="joke-container">
        <h1>Dad Joke Generator</h1>
        <button onClick={fetchJoke}>Get a Dad Joke</button>
        {joke && <Joke joke={joke} />}
      </div>
    </div>
  );
};

export default DadJokeGenerator;
