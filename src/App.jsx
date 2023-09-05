import "./App.css";
import AddVideo from "./component/AddVideo";
import VideoTbm from "./component/VideoTbm";
import VideoDB from "./Data/VideoDB";
// import CounterB from "./component/CounterB";
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
            varified={video.varified}
            key={video.id}
          ></VideoTbm>
        ))}
        <AddVideo ></AddVideo>
        {/* <CounterB></CounterB> */}
      </div>
      
    </>
  );
}

export default App;
