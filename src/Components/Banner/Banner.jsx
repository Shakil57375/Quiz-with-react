const Banner = () => {
  return (
    <div>
      <div className="flex lg:flex-row flex-col-reverse  gap-10 items-center justify-between pb-10 md:pb-16 md:px-12 lg:px-10">
        <div className="w-full px-10 lg:px-0 md:w-1/2 lg:w-5/12">
          <h1 className="text-xl md:text-2xl lg:text-4xl font-bold font-Marcellus mb-4">
            Challenge Yourself with CodeHat
          </h1>
          <h2 className="text-lg lg:text-xl font-semibold text-green-400 font-Montserrat  mb-4">
          The Ultimate Playground for Aspiring Coders
          </h2>
          <p className="font-Poppins text-base font-Poppins">
            At CodeHat, we believe in learning through doing. Join our
            community, participate in quizzes, and transform theoretical
            knowledge into practical coding expertise. Your coding journey
            starts here – embrace the challenge!
          </p>
        </div>
        <div className="w-full md:w-1/2 lg:w-7/12 mt-8 md:mt-0">
          <img
            src={"https://i.ibb.co/S6xKzVN/quiz-banner-img.png"}
            alt="Banner"
            className="w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
