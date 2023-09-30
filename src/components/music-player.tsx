import { Container } from "@mui/material";
import React from "react";

export function MusicPlayer() {
  return (
    <>
      <Container
        style={{
          width: 110,
          height: 60,
          overflow: "hidden",
          position: "absolute",
          right: "1%",
          top: "1%",
        }}
      >
        <iframe
          width="100%"
          height="300"
          scrolling="no"
          frameBorder="no"
          allow="autoplay"
          src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1697441319&color=%23ff5500&auto_play=true&hide_related=true&show_comments=false&show_user=false&show_reposts=false&show_teaser=false&visual=false"
        ></iframe>
      </Container>
    </>
  );
}
