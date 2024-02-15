import React, { useState, useEffect, useRef } from 'react';
import { baseImageUrl } from '../utils/constants';

const MovieCard = ({ poster, desc, release, movie_title }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dialogRef = useRef(null);

  useEffect(() => {
    const handleEscapeKey = (event) => {
      if (event.key === 'Escape') {
        closeDialog();
      }
    };

    const handleClickOutside = (event) => {
      if (dialogRef.current && !dialogRef.current.contains(event.target)) {
        closeDialog();
      }
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden'; // Disable scrolling
      document.addEventListener('keydown', handleEscapeKey);
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.body.style.overflow = 'auto'; // Enable scrolling
      document.removeEventListener('keydown', handleEscapeKey);
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.body.style.overflow = 'auto'; // Enable scrolling
      document.removeEventListener('keydown', handleEscapeKey);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const openDialog = () => {
    setIsOpen(true);
  };

  const closeDialog = () => {
    setIsOpen(false);
  };

  if (!poster) {
    return null; // Don't render if no poster
  }

  return (
    <div>
      <div className='w-48 pr-4 movie_div' onClick={openDialog}>
        <img alt='movie_poster' src={baseImageUrl + poster}/>
      </div>
      {isOpen && (
        <div className="fixed inset-0 z-40 bg-black opacity-90 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none">
          <div ref={dialogRef} className="relative col-11 col-sm-6 col-md-8 col-lg-8 dialog_width mx-auto my-6">
            <div className="bg-white rounded shadow-lg text-black">
              <div className="flex items-start justify-between p-5 border-b border-gray-500 rounded-t">
                <h3 className="text-xl font-semibold text-black pl-2 pt-2">{movie_title}</h3>
                <button onClick={closeDialog} className="text-gray-500 pr-2 pt-2">
                  Close
                </button>
              </div>
              <div className="relative p-6">
                <h6>{desc}</h6>
                <p className='fw-bold'>Release Date: {release}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MovieCard;
