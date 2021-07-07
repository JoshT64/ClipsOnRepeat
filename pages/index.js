import Head from 'next/head';
import TwitterIcon from '@material-ui/icons/Twitter';
import GitHubIcon from '@material-ui/icons/GitHub';
import VideoPage from './video';
import Search from '../components/search';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Clips on Repeat</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="/fonts/HAFFERXHTRIAL-REGULAR.OTF" />
        <link rel="stylesheet" href="/fonts/ROOBERTTRIAL-MEDIUM.OTF" />
        {/* <link
          rel="preload"
          type="font/otf"
          href="/fonts/HAFFERXHTRIAL-REGULAR.otf"
          as="font"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/ROOBERTTRIAL-MEDIUM.otf"
          as="font"
          type="font/otf"
          crossOrigin="anonymous"
        /> */}
      </Head>
      {/* <style jsx global>{`
          @font-face {
            font-family: 'Roobert';
            src: url('/public/fonts/RoobertTRIAL-Medium.otf') format('embedded-opentype')
            font-style: normal;
            font-weight: 400;
            font-display: swap;
          }
          html {
            font-family: 'Roobert';
          }
        `}</style> */}
      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <Search />
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
