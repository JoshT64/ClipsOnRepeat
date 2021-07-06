import Head from 'next/head';
import TwitterIcon from '@material-ui/icons/Twitter';
import GitHubIcon from '@material-ui/icons/GitHub';
import VideoPage from './video';
import Search from '../components/search';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <Search />
        <VideoPage />
      </main>

      <footer className="relative flex items-center justify-center w-full h-24 border-t border-gray-500 opacity-40">
        <a
          className="flex items-center justify-center"
          href="https://twitter.com/BlameBlizzard"
        >
          <TwitterIcon
            alt=""
            className="h-4 ml-2 hover:text-blue-600"
            color="primary"
          />
        </a>
        <a
          className="flex items-center justify-center"
          href="https://github.com/JoshT64/"
        >
          <GitHubIcon
            alt=""
            className="h-4 ml-4 hover:text-gray-400"
            color="primary"
          />
        </a>
      </footer>
    </div>
  );
}
