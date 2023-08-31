import "./App.css";
import VideoTbm from "./component/VideoTbm";
import VideoDB from "./Data/VideoDB";

function App() {
  return (
    <>
      <div className="contener">
        {VideoDB.map((video) => (
          <VideoTbm
            course={video.course}
            channel={video.channel}
            views={video.views}
            time={video.time}
            id={video.id}
          ></VideoTbm>
        ))}
      </div>
    </>
  );
}

export default App;
