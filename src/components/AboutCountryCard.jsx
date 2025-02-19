
const AboutCountryCard = ({fact}) => {
  return (
    <div className="border-1 border-white rounded-3xl p-4 mx-4  md:m-0 max-w-80 md:w-70 bg-radial-[at_25%_25%] from-zinc-700 to-zinc-900 to-75%">
      <h1>{fact.countryName}</h1>
      <p><span className="text-zinc-500 font-semibold">Capital:</span>  {fact.capital}</p>
      <p><span className="text-zinc-500 font-semibold">Population:</span> {fact.population}</p>
      <p><span className="text-zinc-500 font-semibold">InterestingFact:</span > {fact.interestingFact}</p>
    </div>
  )
}

export default AboutCountryCard
