import React from 'react';

export default function StartPage() {
  return (
    <div
      style={{ zIndex: '100' }}
      className=" container m-auto placehold-player relative bg-gray-700 border-2 border-gray-500 "
    >
      <h1 className=" text-purple-500 font-bold mt-8 align-middle text-2xl flex justify-around load ">
        Watch Twitch clips forever.
      </h1>
      <img
        className="flex mx-auto content-between opacity-75"
        width="64"
        height="64"
        src="https://i.imgur.com/6fGJpj3.png"
      />
      <h1 className="text-purple-500 font-bold mt-2 align-middle text-2xl flex justify-around load2 underline">
        Start by typing out your favorite Twitch channel name above.
      </h1>
    </div>
  );
}
