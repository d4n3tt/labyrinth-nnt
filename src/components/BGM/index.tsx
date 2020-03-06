import React from "react";
import Sound from "react-sound";

const BGM: React.FC = () => {
  return (
    <>
      {window.location.pathname != `/ending` && (
        <>
          <Sound
            url="song.mp3"
            playStatus="PLAYING"
            loop={true}
            playFromPosition={0 /* in milliseconds */}
          />
        </>
      )}
      {window.location.pathname === `/ending` && (
        <>
          <Sound
            url="song2.mp3"
            playStatus="PLAYING"
            loop={true}
            playFromPosition={0 /* in milliseconds */}
          />
        </>
      )}
    </>
  );
};

export default BGM;
