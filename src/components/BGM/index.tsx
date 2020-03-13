import React from "react";
import Sound from "react-sound";

const BGM: React.FC = () => {
  return (
    <>
      {window.location.pathname != `/ending` &&
        window.location.pathname != `/ending2` && (
          <>
            <Sound
              url="song.mp3"
              playStatus="PLAYING"
              loop={true}
              playFromPosition={0 /* in milliseconds */}
            />
          </>
        )}
      {(window.location.pathname === `/ending` ||
        window.location.pathname == `/ending2`) && (
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
