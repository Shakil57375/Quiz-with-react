import { Dna } from "react-loader-spinner";

const Loader = () => {
  return (
    <div className="container mx-auto">
      <div className="flex justify-center items-center  my-8 mt-48">
        <Dna
          visible={true}
          height="80"
          width="80"
          ariaLabel="dna-loading"
          wrapperStyle={{}}
          wrapperClass="dna-wrapper"
        />
      </div>
    </div>
  );
};

export default Loader;
