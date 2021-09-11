import React from "react";
import Image from "next/image";

export const Header = () => {
  return (
    <div className="header-container">
      <div className="logo">
        <Image src="/logo.svg" width={150} height={100}></Image>
      </div>
      <div className="menu">
        <p>Main Page</p>
        <p>Join a Chapter</p>
        <p>Lead a chapter</p>
        <p>Meetups</p>
        <p>Forums</p>
        <p>Chat</p>
        <Image src="/profile.png" width={34} height={34}></Image>
      </div>
    </div>
  );
};
