import React from 'react';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

export default function BackButton() {
  return (
    <div className="absolute next-button left-10">
      <button onClick={() => {return prevVideo}}>
        <ArrowBackIosIcon />
      </button>
    </div>
  );
}
