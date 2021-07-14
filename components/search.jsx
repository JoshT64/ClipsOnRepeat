import React, { useEffect, useState } from 'react';
import axios from 'axios';
import MovieIcon from '@material-ui/icons/MovieTwoTone';
import StartPage from './400page';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import TopStreamers from './TopStreamers';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import ToggleButton from '@material-ui/lab/ToggleButton';
const id = process.env.NEXT_PUBLIC_TWITCH_CLIENT_ID;

export default function Search() {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [channel, setChannel] = useState('');
  const [embed, setEmbed] = useState();
  const [clipLength, setClipLength] = useState(0);
  const [time, setTime] = useState(0);
  const [period, setPeriod] = useState('all');

  useEffect(() => {
    getVideo();
  }, [channel]);

  useEffect(() => {
    let timer = setTimeout(() => {
      //On update of embed state
      getVideo();
    }, clipLength * 1000 + 1500);

    return () => clearInterval(timer); //When unmounted
  }, [embed, setChannel]);

  const setVidPeriod = (vidPeriod) => {
    setPeriod(vidPeriod);
  };

  const getVideo = (channelName) => {
    axios({
      method: 'GET',
      headers: {
        'Client-ID': 'wuresifx2vrlunnamky2hgnwx9241b',
        Accept: 'application/vnd.twitchtv.v5+json',
      },
      url: `https://api.twitch.tv/kraken/clips/top?channel=${channel}&limit=99&period=${period}`,
    })
      .then((response) => {
        const randomMath = Math.round(
          Math.random() * response.data.clips.length
        );
        const currentHref = window.location.host;
        const url = currentHref.replace(/(^\w+:|^)\/\//, '');
        let clipTime = response.data.clips[randomMath].duration;
        console.log(period, time);
        const clip =
          response.data.clips[randomMath].embed_url +
          '&autoplay=true' +
          '&parent=' +
          url;
        // 'localhost';
        setIsVideoLoaded(true);
        setClipLength(clipTime);
        setEmbed(clip);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleChange = (event) => {
    setChannel(event.target.value);
  };

  // const handleToggle = (event, newTime) => {
  //   if (newTime !== null) {
  //     setTime(newTime);
  //   }
  // };
  console.log(period);
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
            onChange={handleChange}
            className="rounded relative border m-1 focus:opacity-90 transition ease-in text-input  hover:ring-2 hover:placeholder-opacity-70 hover:ring-gray-500 hover:placeholder-purple-800 placeholder-purple-500 opacity-80 focus:placeholder-purple-700 border border-transparent focus:outline-none focus:ring-4 focus:ring-purple-500 focus:ring-opacity-100 focus:placeholder-opacity-50"
            defaultValue={channel}
            placeholder="Enter Twitch Channel"
          ></input>
          <ToggleButtonGroup
            exclusive="true"
            className="absolute buttons m-auto"
            size="small"
            aria-label="small outlined button group"
            value={period}
          >
            <ToggleButton
              value={'week'}
              onClick={() => setVidPeriod('week')}
              disableRipple={true}
            >
              Week
            </ToggleButton>
            <ToggleButton
              value={'month'}
              onClick={() => setVidPeriod('month')}
              disableRipple={true}
            >
              Month
            </ToggleButton>
            <ToggleButton
              value={'all'}
              onClick={() => setVidPeriod('all')}
              disableRipple={true}
            >
              All Time
            </ToggleButton>
          </ToggleButtonGroup>
        </form>
      </header>
      <TopStreamers streamerName={setChannel} />
      <div
        onClick={() => {
          getVideo();
        }}
        className="absolute next-button right-16 w-12 p-2 border-b-2 border-purple-500 text-gray-500 hover:border-purple-600 hover:text-gray-700 transition ease-out "
      >
        <button>
          <ArrowForwardIosIcon />
        </button>
      </div>

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
    </div>
  );
}
