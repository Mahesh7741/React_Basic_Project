import { useState } from "react";
import "./AddVideo.css";

function AddVideo() {
  const [Video, setVideo] = useState({
    varified: true,
    channel: "Code Dost",
    time: "2 year ago",
    id: "1",
  });
  
  function handleSubmit(){
    // console.log(Video)
  }
  function handleClick(e) {
    setVideo({ ...Video, [Video.target.name]: Video.target.value});
  }

  return (
    <>
      <div className="box1">
        <input onChange={handleClick} name="course" type="text" />
        <input onChange={handleClick} name="views" type="text" />
        <button type="button" onClick={handleSubmit}>Add Video</button>
      </div>
    </>
  );
}

export default AddVideo;
