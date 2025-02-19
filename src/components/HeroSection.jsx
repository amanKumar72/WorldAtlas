import { Link } from "react-router-dom";
import { FaLongArrowAltRight } from "react-icons/fa";
const HeroSection = () => {
  return (
    <div className="flex flex-col md:flex-row">
        <div className="mx-4 my-2 flex flex-col gap-4 md:w-[50%]">
          <h1 className="text-2xl md:3xl font-bold">
            Explore the World, One Country at a Time.
          </h1>
          <p>
            Discover the history, culture, and beauty of every nation. Sort,
            search, and filter through countries to find the details you need.
          </p>
          <Link
            to={"/country"}
            className="flex items-center gap-2 border-1 border-white w-40 p-2 rounded-xl bg-[#1f1f1f] hover:bg-[#303030] relative"
          >
            Start Exploring{" "}
            <FaLongArrowAltRight className=" text-xl absolute right-5 top-3" />
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
