import { useEffect, useTransition, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getCountryIndData } from "../components/Axios";
import Loader from "../components/Loader";

const CountryDetails = () => {
  const param = useParams();
  console.log(param.name);
  const [isPending, startTransection] = useTransition();
  const [country, setcountry] = useState(null);
  useEffect(() => {
    startTransection(async () => {
      const res = await getCountryIndData(param.name);
      if (res.status == 200) {
        setcountry(res.data[0]);
        console.log(res.data[0]);
      }
    });
  }, []);

  if (isPending)
    return (
      <div>
        <Loader />
      </div>
    );

  return (
    <>
      {country ? (
        <div className="w-full md:p-15 p-2 flex flex-col gap-5 lg:gap-7 ">
          <div className="container flex flex-col md:flex-row  gap-2 md:gap-4 px-4 md:px-10 py-2 md:py-5 lg:py-16 bg-radial-[at_25%_25%] from-zinc-700 to-zinc-900 to-75% shadow-xl shadow-zinc-700 rounded-xl">
            <div className="img flex justify-center items-center md:w-[40%] ">
              <img
                src={country.flags.svg}
                alt={country.flags.alt}
                className="h-50 w-50 lg:h-70 lg:w-70 object-contain rounded-xl"
              />
            </div>
            <div className="details flex flex-col py-3 md:gap-4 lg:gap-6 gap-2">
              <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold">
                {country.name.common}
              </h1>
              <h3 className="text-md md:text-lg lg:text-2xl">
                <span className="text-gray-300 ">Common Names : </span>{" "}
                {Object.keys(country.name.nativeName)
                  .map((key) => country.name.nativeName[key].common)
                  .join(", ") || " country name"}{" "}
              </h3>
              <h3 className="text-md md:text-lg lg:text-2xl">
                <span className="text-gray-300 ">Capital : </span>{" "}
                {country.capital.map((key) => key).join(", ")}
              </h3>
              <h3 className="text-md md:text-lg lg:text-2xl">
                <span className="text-gray-300 ">Population : </span>
                {country.population}{" "}
              </h3>
              <h3 className="text-md md:text-lg lg:text-2xl">
                <span className="text-gray-300 ">Region : </span>
                {country.region}{" "}
              </h3>
              <h3 className="text-md md:text-lg lg:text-2xl">
                <span className="text-gray-300 ">Sub Region : </span>
                {country.subregion || "no subregion"}
              </h3>
              <h3 className="text-md md:text-lg lg:text-2xl">
                <span className="text-gray-300 ">Borders : </span>{" "}
                {country.borders.map((border) => border).join(", ") ||
                  "no border"}{" "}
              </h3>
              <h3 className="text-md md:text-lg lg:text-2xl">
                <span className="text-gray-300 ">Top level domain : </span>
                {country.tld[0]}
              </h3>
              <h3 className="text-md md:text-lg lg:text-2xl">
                <span className="text-gray-300 ">Currencies : </span>{" "}
                {Object.keys(country.currencies)
                  .map(
                    (curr) =>
                      `${country.currencies[curr].name} ( ${country.currencies[curr].symbol} )`
                  )
                  .join(", ")}
              </h3>
              <h3 className="text-md md:text-lg lg:text-2xl">
                <span className="text-gray-300 ">Languages : </span>{" "}
                {Object.keys(country.languages)
                  .map((lang) => country.languages[lang])
                  .join(", ")}
              </h3>
            </div>
          </div>
          <Link to={'/country'} className="px-5 lg:px-8 py-2 md:py-3 lg:text-2xl w-30 lg:w-50 self-end cursor-pointer bg-radial-[at_25%_25%] from-zinc-400 to-gray-500 to-75% shadow-md shadow-gray-400 rounded-xl">Go Back </Link>
        </div>
      ) : null}
      
    </>
  );
};

export default CountryDetails;
