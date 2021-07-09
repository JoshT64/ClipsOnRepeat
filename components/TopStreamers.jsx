import React, { useEffect, useState } from 'react';
import axios from 'axios';

let channels = [];

export default function TopStreamers(props) {
  const [channelList, setChannelList] = useState([{}]);

  useEffect(() => {
    const getStreams = () => {
      axios({
        method: 'GET',
        headers: {
          'Client-ID': 'wuresifx2vrlunnamky2hgnwx9241b',
          Accept: 'application/vnd.twitchtv.v5+json',
        },
        url: `https://api.twitch.tv/kraken/streams/?limit=27`,
      })
        .then((response) => {
          for (let i = 0; i < response.data.streams.length; i++) {
            const element = response.data.streams[i].channel.name;
            channels.push(element);
            setChannelList(element);
            // console.log(channelList);
          }
          //   console.log(channels);
          // console.log(response.data.streams.length);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    getStreams();
  }, []);
  // props.streamerName(channelName);
  const channelMap = channels.map((channel, index, arr) => (
    <div>
      <li
        className="hover:text-gray-700 cursor-pointer"
        onClick={(event, index, arr) => {
          props.streamerName(event.target.innerHTML);
        }}
      >
        {channel}
      </li>
    </div>
  ));

  return (
    <div className="absolute left-8 p-2 top-streamer-border">
      <h1 className="text-purple-600 cursor-default border-b-2 pb-0 border-opacity-75 border-gray-500 font-bold ">
        Top Channels
      </h1>

      <ul className="text-gray-500 ">{channelMap}</ul>
    </div>
  );
}
