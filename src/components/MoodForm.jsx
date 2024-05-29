import React, { useState } from 'react';

const MoodForm = ({ onMoodSubmit }) => {
  const [mood, setMood] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onMoodSubmit(mood);
  };

  return (
    <form onSubmit={handleSubmit} className="flex w-full h-[calc(100vh-200px)]  flex-col items-center justify-center">
      <input
        type="text"
        value={mood}
        onChange={(e) => setMood(e.target.value)}
        placeholder="Enter your mood"
        className="p-2 border w-52 border-gray-300 rounded mb-4 outline-none"
      />
      <button type="submit" className="bg-gray-900 p-2 pr-5 pl-5 text-white rounded">
        Get Recommendations
      </button>
    </form>
  );
};

export default MoodForm;
