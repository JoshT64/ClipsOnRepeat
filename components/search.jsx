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
    <div>
      <form className="mx-auto border-b-2 ">
        <input
          onChange={(event) => setChannel(event.target.value)}
          value={channel}
          className="text-input hover:placeholder-purple-700 placeholder-purple-500 opacity-70 focus:placeholder-purple-700 border border-transparent focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50"
          placeholder="Enter Twitch Channel"
        ></input>
        {console.log(channel, embed)}
      </form>
      <iframe
        src={embed + '&parent=localhost'}
        width="640"
        height="360"
        scrolling="no"
        allowFullScreen="true"
      ></iframe>
    </div>
  );
}
