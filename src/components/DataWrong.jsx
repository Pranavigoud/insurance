import React from 'react';

const DataWrong = ({ onRetry, onManual }) => {
  return (
    <div className="max-w-2xl mx-auto text-center py-20">
      <h1 className="text-4xl font-bold text-text-primary mb-6">We couldn't read that vehicle</h1>
      <p className="text-text-secondary mb-6">
        The vehicle details we retrieved look incomplete or incorrect. You can try again, enter the details manually, or contact support for help.
      </p>

      <div className="flex justify-center gap-4">
        <button
          onClick={onRetry}
          className="bg-white border border-border-light py-3 px-6 rounded-full font-semibold hover:bg-gray-50"
        >
          Try again
        </button>
        <button
          onClick={onManual}
          className="bg-accent-pink text-white py-3 px-6 rounded-full font-semibold hover:opacity-95"
        >
          Enter details manually
        </button>
      </div>
    </div>
  );
};

export default DataWrong;
