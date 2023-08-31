import './VideoTbm.css'

function VideoTbm({course,channel,views,time,id})
{
    return(
        <>
        <div className="box-main">
            <div className="img">
                <img src={`https://picsum.photos/id/${id}/200/100`} alt="#" />
            </div>
            <div className="course">{course}</div>
            <div className="channel">{channel}</div>
            <div className="box">
                <span className="views">{views} Views.</span>
                <span className="time">{time}</span>
            </div>
            </div>
        </>
    )

}

export default VideoTbm;