import { FaLongArrowAltRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const CountryCard = ({country}) => {
  
  return (
    <div className="flex flex-col gap-2 md:gap-3 w-60 md:w-70 p-2 md:p-4 h-72 rounded-xl shadow-lg  shadow-[#8c8b8b]   bg-radial-[at_25%_25%] from-zinc-700 to-zinc-900 to-75%   " >
      <div className="flex justify-center" ><img src={country.flags.png} alt=""  className="h-20 object-cover rounded"/></div>
      <div> 
        <h1 className="text-xl md:text-2xl font-bold truncate w-full ">{country.name.common}</h1>
        <p ><span className="text-zinc-500">Capital : </span>{country.capital}</p>
        <p ><span className="text-zinc-500">Population : </span>{country.population}</p>
        <p ><span className="text-zinc-500">Region : </span>{country.region}</p>
        
        <Link
            to={`/country/${country.name.common}`}
            className="flex items-center gap-2 border-1 border-white w-40 p-2 my-4 rounded-xl bg-zinc-700  hover:bg-[#303030] relative "
          >
            Start Exploring{" "}
            <FaLongArrowAltRight className=" text-xl absolute right-5 top-3" />
          </Link>
      </div>
    </div>
  )
}

export default CountryCard
