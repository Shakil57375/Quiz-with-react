import Video from "../Video/Video";

const Videos = () => {
  return (
    <div className="videos grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-center gap-5 my-6 mx-auto lg:w-full w-[90%]">
      <Video />
      <Video />
      <Video />
      <Video />
      <Video />
      <Video />
    </div>
  );
};

export default Videos;