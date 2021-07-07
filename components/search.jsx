import React, { useEffect, useState } from 'react';
import axios from 'axios';
import MovieIcon from '@material-ui/icons/MovieTwoTone';
import StartPage from './400page';

export default function Search() {
  const randomMath = Math.round(Math.random() * 10);

  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [channel, setChannel] = useState('');
  const [embed, setEmbed] = useState();
  const [clipLength, setClipLength] = useState(0);

  useEffect(() => {
    getVideo();
    setIsVideoLoaded(true);
  }, [channel]);

  useEffect(() => {
    var timer = setTimeout(getVideo, clipLength * 1000);

    clearTimeout(timer);
  }, [embed]);

  var getVideo = () => {
    axios({
      method: 'GET',
      headers: {
        'Client-ID': 'wuresifx2vrlunnamky2hgnwx9241b',
        Accept: 'application/vnd.twitchtv.v5+json',
      },
      url: `https://api.twitch.tv/kraken/clips/top?channel=${channel}&limit=100`,
    })
      .then((response) => {
        var currentHref = window.location.host;
        var url = currentHref.replace(/(^\w+:|^)\/\//, '');
        const clipTime = response.data.clips[randomMath].duration;

        console.log(url);
        const clip =
          response.data.clips[randomMath].embed_url +
          '&autoplay=true' +
          '&parent=' +
          url;

        setClipLength(clipTime);
        console.log(clipTime);
        setEmbed(clip);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // var timer = () => {
  //   return setTimeout(timerFunction, clipLength * 1000);
  // };

  // if (clipLength > 0) {
  //   console.log(clipLength);
  //   timer();
  //   console.log('timer: ' + clipLength);
  //   clearTimeout(timer);
  //   setTimeout(timerFunction, clipLength * 1000);
  // } else return;

  return (
    <div style={{ width: '100%' }}>
      <header className="header container inline-block bg-gray-700 border-b-2 border-blue-100 ">
        <form
          className=" m-auto mt-4 mb-4"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="logo-container">
            <MovieIcon className="mb-2 absolute movie" />
            <span className="absolute logo-text">Clips on Repeat</span>
          </div>

          <input
            onChange={(event) => setChannel(event.target.value)}
            value={channel}
            className=" rounded relative border m-1 focus:opacity-90 transition ease-in text-input  hover:ring-2 hover:placeholder-opacity-70 hover:ring-gray-500 hover:placeholder-purple-800 placeholder-purple-500 opacity-80 focus:placeholder-purple-700 border border-transparent focus:outline-none focus:ring-4 focus:ring-purple-500 focus:ring-opacity-100 focus:placeholder-opacity-50"
            placeholder="Enter Twitch Channel"
          ></input>
        </form>
      </header>

      {isVideoLoaded ? (
        <iframe
          className=" m-4 relative video-player"
          src={embed}
          width="1500"
          height="785"
          scrolling="no"
          allowfullscreen="true"
        ></iframe>
      ) : (
        <StartPage />
      )}
      {console.log(channel, embed)}
    </div>
  );
}
