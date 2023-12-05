import { Link } from "react-router-dom";
import Video from "../Video/Video";
import useVideoList from "../../Hooks/useVideoList";
import Loader from "../Pages/Loader/Loader";

const Videos = () => {
  const { loading, error, videos } = useVideoList();
  console.log(videos)
  return (
    <div className="videos grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-center gap-5 my-6 mx-auto lg:w-full w-[90%]">
      {videos.length > 0 &&
        videos?.map((video) => {
          <Link to={"/quiz"} key={video.youtubeID}>
            <Video video = {video}/>
          </Link>;
        })}
      {!loading && videos.length === 0 && (
        <div className="text-yellow-400">No data found</div>
      )}
      {error && <div className="text-yellow-400">there was an error</div>}
      {loading && (
        <div>
          <Loader></Loader>
        </div>
      )}
    </div>
  );
};

export default Videos;
