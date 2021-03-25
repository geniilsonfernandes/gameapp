import React from "react";
import WinSvg from "../../../svg/cover/WinSvg";
import PsSvg from "../../../svg/cover/PsSvg";
import XboxSvg from "../../../svg/cover/XboxSvg";



const GamePlatforms = (props) => {
  const { platforms } = props;
  console.log(platforms);
  return (
    <>
      {platforms.map((item,id) => {
        switch (item.platform.id) {
          case 2:
            return <PsSvg key={id} color={"#f2f2f2"} />;
          case 1:
            return <WinSvg key={id} color={"#f2f2f2"} />;
          case 3:
            return <XboxSvg key={id} color={"#f2f2f2"} />;
          default:
            break;
        }
        return null;
      })}
      
    </>
  );
};

export default GamePlatforms;
