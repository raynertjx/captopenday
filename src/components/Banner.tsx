import Cards from "./Cards";

export default function Banner(props) {
  return (
    <div className="w-full mt-8 flex flex-row flex-wrap justify-around">
      <div className="w-96 flex flex-col justify-center items-center mx-12">
        <div>
          <h2 className="text-xl font-semibold w-full my-4">
            Welcome to CAPT
            <br />
            Open House 2023!
          </h2>
          <h3 className="text-yellow-400">Explore CAPT here.</h3>
        </div>
      </div>
      <Cards />
    </div>
  );
}
