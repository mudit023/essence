import React, { useRef, useEffect, useState } from "react";
import "./App.css";
import * as tf from "@tensorflow/tfjs";
import * as posenet from "@tensorflow-models/posenet";
import { showNotification } from "./components/notification";
import Webcam from "react-webcam";
// import { drawKeypoints, drawSkeleton } from "./components/utilities";

function App() {
  const webcRef = useRef(null);
  // const canvRef = useRef(null);

  const runPosenet = async () => {
    const net = await posenet.load({
      inputResolution: { width: 176, height: 144 },
      scale: 0.8,
    });

    setInterval(() => {
      detect(net);
    }, 20000);
  };
  const [go, setgo] = useState(null);
  const [Notificationflag, setNotificationflag] = useState(false);
  async function detect(net) {
    if (
      typeof webcRef.current !== "undefined" &&
      webcRef.current !== null &&
      webcRef.current.video.readyState === 4
    ) {
      const video = webcRef.current.video;
      const videoWidth = webcRef.current.video.videoWidth;
      const videoHeight = webcRef.current.video.videoHeight;

      webcRef.current.video.width = videoWidth;
      webcRef.current.video.height = videoHeight;

      const pose = await net.estimateSinglePose(video);
      setgo(pose.score);

      // requestAnimationFrame(() => {
      //   dCanvas(pose, video, videoWidth, videoHeight, canvRef);
      // });
    }
  }

  // const dCanvas = (pose, video, videoWidth, videoHeight, canvas) => {
  //   const ctx = canvas.current.getContext("2d");
  //   canvas.current.width = videoWidth;
  //   canvas.current.height = videoHeight;

  //   drawKeypoints(pose["keypoints"], 0.6, ctx);
  //   drawSkeleton(pose["keypoints"], 0.7, ctx);
  // };

  useEffect(() => {
    if (!go || go > 0.4) return;
    console.log("go: ", go);
    showNotification();
  }, [go]);

  runPosenet();

  return (
    <div className="App">
      <header className="App-header">
        <Webcam
          ref={webcRef}
          style={{
            position: "absolute",
            marginLeft: "auto",
            marginRight: "auto",
            left: 0,
            right: 0,
            textAlign: "center",
            zindex: 9,
            width: 177,
            height: 144,
          }}
        />

        {/* <canvas
          ref={canvRef}
          style={{
            position: "absolute",
            marginLeft: "auto",
            marginRight: "auto",
            left: 0,
            right: 0,
            textAlign: "center",
            zindex: 9,
            width: 640,
            height: 480,
          }}
        /> */}
      </header>
    </div>
  );
}

// console.log(Notification.permission);

// if (Notification.permission === "granted") {
//   showNotification();
// } else if (Notification.permission !== "denied") {
//   Notification.requestPermission().then((permission) => {
//     if (permission === "granted") {
//       showNotification();
//     }

/* <ReactAudioPlayer
  src="1663436351494-voicemaker.in-speech.mp3"
  autoPlay
  controls
/> */

//const x = new Audio("")
export default App;
