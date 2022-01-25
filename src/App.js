import React from "react";
import "./App.css";
import Video from "./Video";

function App() {
  return (
    <div className="app">
      <div className="app__videos">
        <Video
          url="https://v16-webapp.tiktok.com/2696f9712edd4b3b8f0ec4aab4680658/61f03bba/video/tos/alisg/tos-alisg-pve-0037c001/1e7adceeb6aa4532a030794fa5c467a2/?a=1988&br=3518&bt=1759&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=XOQ9-3tqnz7ThcTd5lXq&l=202201251204270102230751600F0F60A0&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=MzQ3MzY6Zjo4OTMzODczNEApaDc1OzQzNjxmNzc0M2Q5O2dlZDRpcjRvXi9gLS1kMS1zczQuNF4vMGItLWJeNjU0MzM6Yw%3D%3D&vl=&vr="
          channel="@O'neal"
          song="usher-yooo! tik tok is cool"
          likes={99}
          messages={124}
          description="The Clone looks Cool"
          shares={15}
        />
        <Video />
        <Video />
        <Video />
        <Video />
      </div>
    </div>
  );
}

export default App;
