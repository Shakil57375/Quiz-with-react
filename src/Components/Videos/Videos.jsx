import { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { Link } from "react-router-dom";
import Video from "../Video/Video";
import useVideoList from "../../Hooks/useVideoList";
import Loader from "../Pages/Loader/Loader";

export default function Videos() {
  const [page, setPage] = useState(1);
  const { loading, error, videos, hasMore } = useVideoList(page);

  return (
    <div>
      {videos.length > 0 && (
        <InfiniteScroll
          dataLength={videos.length}
          hasMore={hasMore}
          loader=<Loader />
          next={() => setPage(page + 8)}
        >
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
            {videos.map((video) =>
              video.noq > 0 ? (
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
              ) : (
                <Video
                  title={video.title}
                  id={video.youtubeID}
                  noq={video.noq}
                  key={video.youtubeID}
                />
              )
            )}
          </div>
        </InfiniteScroll>
      )}
      {!loading && videos.length === 0 && <div>No data found!</div>}
      {error && <div>There was an error!</div>}
      {loading && (
        <div>
          <Loader />
        </div>
      )}
    </div>
  );
}
