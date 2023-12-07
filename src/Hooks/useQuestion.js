/* eslint-disable no-undef */
import { useEffect, useState } from "react";
import {
  get,
  getDatabase,
  limitToFirst,
  orderByKey,
  query,
  ref,
  startAt,
} from "firebase/database";
const useQuestion = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(true);
  const [videos, setVideos] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  useEffect(() => {
    async function fetchVideos() {
      // * database related work
      const db = getDatabase();
      const videosRef = ref(db, "videos");
      const videoQuery = query(
        videosRef,
        orderByKey(),
        startAt("" + page),
        limitToFirst(8)
      );
      try {
        setError(false);
        setLoading(true);
        // request firebase database
        const snapshot = await get(videoQuery);
        setLoading(false);
        if (snapshot.exists()) {
          setVideos((previousVideo) => {
            return [...previousVideo, ...Object.values(snapshot.val())];
          });
          /* empty */
        } else {
          setHasMore(false)
        }
      } catch (err) {
        console.log(err);
        setLoading(false);
        setError(true);
      }
    }
    fetchVideos();
  }, []);
  return {
    loading,
    error,
    videos,
    hasMore
  };
};

export default useQuestion;
