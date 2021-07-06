import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function Search(props) {
  const [channel, setChannel] = useState('');
  const [embed, setEmbed] = useState();

  useEffect(() => {
    axios({
      method: 'GET',
      headers: {
        'Client-ID': 'wuresifx2vrlunnamky2hgnwx9241b',
        Accept: 'application/vnd.twitchtv.v5+json',
      },
      url: `https://api.twitch.tv/kraken/clips/top?channel=${channel}`,
    })
      .then((response) => {
        console.log(response.data.clips[Math.round(Math.random() * 10)].url);
        const clip = response.data.clips[Math.round(Math.random() * 10)].url;
        setEmbed(clip);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [channel]);

  return (
    <div style={{ width: '100%' }}>
      <header className="header container inline-block bg-gray-700 border-b-2">
        <form className="w-44 mx-auto mt-4 mb-4">
          <input
            onChange={(event) => setChannel(event.target.value)}
            value={channel}
            className="m-1 focus:opacity-90 transition ease-in text-input ring-2 ring-gray-500 hover:ring-2 hover:placeholder-opacity-70 hover:ring-gray-500 hover:placeholder-purple-800 placeholder-purple-500 opacity-80 focus:placeholder-purple-700 border border-transparent focus:outline-none focus:ring-4 focus:ring-purple-500 focus:ring-opacity-100 focus:placeholder-opacity-50"
            placeholder="Enter Twitch Channel"
          ></input>
          {console.log(channel, embed)}
        </form>
      </header>

      <iframe
        className="m-4 relative video-player"
        src={embed + '&parent=https://clips-on-repeat.vercel.app/'}
        width="1500"
        height="790"
        scrolling="no"
        allowFullScreen="true"
      ></iframe>
    </div>
  );
}
