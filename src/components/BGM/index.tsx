import React from "react";
import Sound from "react-sound";

const BGM: React.FC = () => {
  return (
    <Sound
      url="song.mp3"
      playStatus="PLAYING"
      loop={true}
      playFromPosition={0 /* in milliseconds */}
    />
  );
};

export default BGM;
