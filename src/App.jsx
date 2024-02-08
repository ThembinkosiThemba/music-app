// import { useSelector } from 'react-redux';
import { Route, Routes } from "react-router-dom";

import {
  Create,
  MusicPlayer,
  Searchbar,
  Sidebar,
  // SignInPageFull,
  SignInPage,
  SignInPageFull,
  SignUpPage,
  TopPlay,
} from "./components";
import {
  ArtistDetails,
  TopArtists,
  AroundYou,
  Discover,
  Search,
  SongDetails,
  TopCharts,
} from "./pages";
import { SignedIn, useUser } from "@clerk/clerk-react";
import { useSelector } from "react-redux";

const App = () => {
  const { activeSong } = useSelector((state) => state.player);
  const { isSignedIn, user } = useUser();

  return (
    <div className="relative flex">
      {isSignedIn ? (
        <SignedIn>
          <Sidebar />
          <div className="flex-1 flex flex-col bg-gradient-to-br from-black to-[#585864]">
            <Searchbar />

            

            <div className="px-6 h-[calc(100vh-72px)] overflow-y-scroll hide-scrollbar flex xl:flex-row flex-col-reverse">
              <div className="flex-1 h-fit pb-40">
                <Routes>
                  <Route path="/" element={<AroundYou />} />

                  <Route path="/discover" element={<Discover />} />
                  <Route path="/top-artists" element={<TopArtists />} />
                  <Route path="/top-charts" element={<TopCharts />} />
                  <Route path="/create" element={<Create />} />
                  <Route path="/artists/:id" element={<ArtistDetails />} />
                  <Route path="/songs/:songid" element={<SongDetails />} />
                  <Route path="/search/:searchTerm" element={<Search />} />
                </Routes>
              </div>
              <div className="xl:sticky relative top-0 h-fit">
                <SignedIn>
                  <TopPlay />
                </SignedIn>
              </div>
            </div>
          </div>
        </SignedIn>
      ) : (
        <SignInPageFull />
      )}

      {activeSong?.title && (
        <div className="absolute h-28 bottom-0 left-0 right-0 flex animate-slideup bg-gradient-to-br from-white/10 to-[#2a2a80] backdrop-blur-lg rounded-t-3xl z-10">
          <MusicPlayer />
        </div>
      )}
    </div>
  );
};

export default App;
