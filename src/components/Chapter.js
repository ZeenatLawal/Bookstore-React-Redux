import React from 'react';
import '../styles/Chapter.css';

const Chapter = () => (
  <div className="chap">
    <p className="current">CURRENT CHAPTER</p>
    <p className="chapter">Chapter 17</p>
    <button type="button" className="update">UPDATE PROGRESS</button>
  </div>
);

export default Chapter;
