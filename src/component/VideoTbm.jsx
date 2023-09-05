
import './VideoTbm.css'

function VideoTbm({course,channel,views,time,id,varified})
{


    return(
        <>
        <div className="box-main">
            <div className="img">
                <img src={`https://picsum.photos/id/${id}/250/150`} alt="#" />
            </div>
            <div className="course">{course}</div>
            <div className="channel">{channel}{ varified && " ✅"}</div>
            <div className="box">
                <span className="views">{views} Views.</span>
                <span className="time">{time}</span>
            </div>
            </div>
        </>
    )

}

export default VideoTbm;