import React from 'react';

const SongList = ({ songs }) => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-[calc(100vh-100px)]">
      <h2 className="mb-6 text-lg font-semibold text-gray-900">Recommended Songs:</h2>
      <div className="w-full max-w-[600px] overflow-y-auto p-4">
        <ul className="space-y-1 text-black list-disc list-inside">
          {songs.map((song, index) => (
            <li key={index}>{song}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SongList;
