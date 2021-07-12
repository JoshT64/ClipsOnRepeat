import Head from 'next/head';
import TwitterIcon from '@material-ui/icons/Twitter';
import GitHubIcon from '@material-ui/icons/GitHub';
import VideoPage from './video';
import Search from '../components/search';
import NextButton from '../components/nextButton';
import BackButton from '../components/backButton';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Clips on Repeat</title>
        <link rel="icon" href="/clips.png" />
        <link rel="stylesheet" href="fonts/HAFFERXHTRIAL-REGULAR.OTF" />
        <link rel="stylesheet" href="fonts/ROOBERTTRIAL-MEDIUM.OTF" />
        <meta
          name="application-name"
          content="Clips On Repeat | Watch Twitch Clips Forever"
        />
        <meta
          name="description"
          content="Watch Twitch Clips forever by simply typing or selecting a Twitch Channel."
        />
      </Head>

      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <Search />
        {/* <NextButton />
        <BackButton /> */}
        <VideoPage />
      </main>

      <footer className="fixed left-0 bottom-0 flex items-center justify-center w-full h-16 border-t border-gray-500 opacity-40">
        <a
          className="flex items-center justify-center"
          href="https://twitter.com/BlameBlizzard"
        >
          <TwitterIcon alt="" className="h-4 mx-auto twitter" color="primary" />
        </a>
        <a
          className="flex items-center justify-center"
          href="https://github.com/JoshT64/"
        >
          <GitHubIcon
            alt=""
            className="h-4 ml-2 mx-auto hover:text-gray-400"
            color="primary"
          />
        </a>
      </footer>
    </div>
  );
}
