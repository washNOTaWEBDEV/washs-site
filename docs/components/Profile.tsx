import React from "react";
import Tanaka from "../public/assets/tanaka.png";
import InstagramBlack from "../public/assets/instagram_logo_black.png"
import InstagramColoured from "../public/assets/instagram_logo_colour.png"
import Discord from "../public/assets/discord_icon.png"
import Youtube from "../public/assets/youtube_icon.png"
import BlueFullstop from "./BlueFullstop";
import Image from "next/image";

const Profile = () => {
  return (
    <div className="w-full">
      <div className="h-14"></div>
      <div className="h-80 flex items-center justify-center">
        <Image src={Tanaka.src} alt="Tanaka-kun" width={0} height={0} className="md:ml-auto rounded-full size-40 shadow-md opacity-90" quality={100} />
        <div className=" w-2/5 ml-20 mr-auto">
          <h1 className=" font-bold font-mono text-5xl mb-3">Greetings, I am wash<BlueFullstop /></h1>
          <p className=" font-serifs font-medium text-lg ">
            I&apos;m a first-year student at the University of Melbourne studying CS. <br></br>
            Please send me your book recommendations. I am quite a free person.
          </p>
          <div className="my-2 flex flex-row gap-x-3 items-center">
              <a href="https://www.youtube.com/@washsmusic"><img src={Youtube.src} className=" h-5 hover:youtube-red"></img></a>
            <div className="h-5 w-5 flex-col group">
              <a href="https://www.instagram.com/washington__do/"><img id="color_ig" src={InstagramColoured.src} className="h-5 opacity-0 group-hover:opacity-100"></img></a>
              <a href="https://www.instagram.com/washington__do/"><img id="black_ig" src={InstagramBlack.src} className=" h-5 -mt-[100%] group-hover:opacity-0"></img></a>
            </div>
            <a href="https://www.discord.com/users/221512613450743809"><img src={Discord.src} className=" h-5 hover:discord-blue "></img></a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
