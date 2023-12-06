import { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { Link } from "react-router-dom";
import Video from "../Video/Video";
import useVideoList from "../../Hooks/useVideoList";
import Loader from "../Pages/Loader/Loader";

const Videos = () => {
  // Using array destructuring to get values directly
  const [page, setPage] = useState(1);
  const { loading, error, videos, hasMore } = useVideoList(page);
  const loadMoreVideos = () => {
    setPage(page + 1);
  };

  return (
    <div>
      {videos.length > 0 && (
        <InfiniteScroll
          dataLength={videos.length}
          hasMore={hasMore}
          loader={<Loader />}
          next={loadMoreVideos}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {videos.map((video) => (
              <Link
                to={{
                  pathname: `/quiz/${video.youtubeID}`,
                  state: {
                    videoTitle: video.title,
                  },
                }}
                key={video.youtubeID}
              >
                <Video
                  title={video.title}
                  id={video.youtubeID}
                  noq={video.noq}
                />
              </Link>
            ))}
          </div>
        </InfiniteScroll>
      )}

      {/* Using ternary operator for conditional rendering */}
      {!loading && videos.length === 0 ? (
        <div>No data found!</div>
      ) : error ? (
        <div>There was an error!</div>
      ) : (
        loading && <Loader />
      )}
    </div>
  );
};

export default Videos;
