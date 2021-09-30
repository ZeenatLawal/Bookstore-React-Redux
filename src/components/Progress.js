import React from 'react';
import '../styles/Progress.css';

const Progress = () => (
  <div className="progress flex">
    <div className="Oval-2" />
    <div className="text flex">
      <span className="percent">64%</span>
      <span className="status">Completed</span>
    </div>
  </div>
);

export default Progress;
