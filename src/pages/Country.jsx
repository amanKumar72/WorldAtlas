import { useEffect, useState, useTransition } from "react";
import { getCountryData } from "../components/Axios";
import CountryCard from "../components/CountryCard";
import Loader from "../components/Loader";
import FilterCountry from "../components/FilterCountry";

const Country = () => {
  const [isPending, startTransection] = useTransition();
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");

  useEffect(() => {
    startTransection(async () => {
      const res = await getCountryData();
      setCountries(res.data);
    });
  }, [filter]);

  const isSearchedCountry = (country) => {
    return country.name.common.toLowerCase().includes(search.toLowerCase());
  };
  const isFilteredCountry = (country) => {
    if (filter === "All") return country;
    return country.region === filter;
  };

  const filteredCountries = countries.filter(
    (country) => isSearchedCountry(country) && isFilteredCountry(country)
  );

  if (isPending)
    return (
      <div>
        <Loader />
      </div>
    );



  return (
    <div className=" px-8 py-5 flex flex-col gap-5 md:gap-7 lg:gap-9">
      <FilterCountry
        search={search}
        filter={filter}
        setFilter={setFilter}
        setSearch={setSearch}
        countries={countries}
        setCountries={setCountries}
      />
      <div className="countries flex flex-wrap gap-5 md:gap-7 justify-center">
        {filteredCountries ? (
          filteredCountries.length == 0 && (filter || search) ? (
            <div className="text-center py-10">
              <p className=" md:text-lg lg:text-xl">No countries found with the given filter and search criteria.</p>
            </div>
          ) : (
            filteredCountries.map((country, index) => (
              <CountryCard key={index} country={country} />
            ))
          )
        ) : (
          countries.map((country, index) => (
            <CountryCard key={index} country={country} />
          ))
        )}
      </div>
    </div>
  );
};

export default Country;
