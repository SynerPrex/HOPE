import React, { useState } from 'react';
import MoodForm from './components/MoodForm';
import SongList from './components/SongList';
import axios from 'axios';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  const [songs, setSongs] = useState([]);
  const [error, setError] = useState('');
  const [formVisible, setFormVisible] = useState(true);

  const handleMoodSubmit = async (mood) => {
    try {
      const response = await axios.post('https://hope-backend-dzmc.onrender.com/recommend', { mood });
      setSongs(response.data.recommended_songs);
      setError('');
      setFormVisible(false); // Hide the form after successful submission
    } catch (error) {
      setError('Failed to fetch recommendations. Please try again later.'); // Custom error message
      console.error(error);
    }
  };

  return (
    <div className='w-[100vw] h-[100vh] flex flex-col'>
      <Header/>
      {formVisible ? (
        <MoodForm onMoodSubmit={handleMoodSubmit} />
      ) : (
        <SongList songs={songs} />
      )}
      {error && <div className="text-red-500 text-center">{error}</div>} {/* Styling for error message */}
      <Footer/>
    </div>
  );
}

export default App;
