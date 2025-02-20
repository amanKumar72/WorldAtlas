import { Link } from "react-router-dom";
import { FaLongArrowAltRight } from "react-icons/fa";
const HeroSection = () => {
  return (
    <div className="flex flex-col md:flex-row lg:items-center">
        <div className="mx-4 my-2 flex flex-col items-center gap-4 lg:gap-6 md:w-[50%]">
          <h1 className="text-2xl md:3xl lg:text-4xl font-bold">
            Explore the World, One Country at a Time.
          </h1>
          <p className="lg:text-xl">
            Discover the history, culture, and beauty of every nation. Sort,
            search, and filter through countries to find the details you need.
          </p>
          <Link
            to={"/country"}
            className="flex items-center gap-2 border-1 border-white w-40 lg:w-50 p-2 lg:p-4 rounded-xl lg:text-xl bg-radial-[at_25%_25%] from-zinc-700 to-zinc-900 to-75% hover:bg-[#303030] relative"
          >
            Start Exploring{" "}
            <FaLongArrowAltRight className=" text-xl absolute right-5 top-3 lg:top-5 lg:text-2xl" />
          </Link>
        </div>
        <div className="mx-4 my-2  md:w-[50%]">
          <img
            src="world.png"
            className="w-full h-full object-cover rounded"
            alt="world"
          />
        </div>
      </div>
  )
}

export default HeroSection
