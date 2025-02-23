import AboutCountryCard from "../components/AboutCountryCard";

const facts = [
  {
    id: 1,
    countryName: "Saudi Arabia",
    capital: "Riyadh",
    population: 35340680,
    interestingFact:
      "Saudi Arabia is home to the largest sand desert in the world, the Rub' al Khali or 'Empty Quarter'.",
  },
  {
    id: 2,
    countryName: "Nepal",
    capital: "Kathmandu",
    population: 29609623,
    interestingFact:
      "Nepal is home to Mount Everest, the tallest mountain in the world, standing at 8,848 meters.",
  },
  {
    id: 3,
    countryName: "Egypt",
    capital: "Cairo",
    population: 104258327,
    interestingFact:
      "The Pyramids of Giza are one of the Seven Wonders of the Ancient World.",
  },
  {
    id: 4,
    countryName: "Australia",
    capital: "Canberra",
    population: 25687041,
    interestingFact:
      "Australia is home to the Great Barrier Reef, the largest coral reef system in the world.",
  },
  {
    id: 5,
    countryName: "Brazil",
    capital: "Brasilia",
    population: 213993437,
    interestingFact:
      "Brazil is home to the Amazon Rainforest, the largest tropical rainforest in the world.",
  },
  {
    id: 6,
    countryName: "France",
    capital: "Paris",
    population: 67407241,
    interestingFact:
      "The Eiffel Tower in Paris was once the tallest man-made structure in the world.",
  },
  {
    id: 7,
    countryName: "Russia",
    capital: "Moscow",
    population: 1324216107,
    interestingFact:
      "Russia is the largest country in the world by area, covering more than 17 million square kilometers.",
  },
  {
    id: 8,
    countryName: "China",
    capital: "Beijing",
    population: 1444216107,
    interestingFact:
      "The Great Wall of China is visible from space on rare occasions.",
  },
  {
    id: 9,
    countryName: "Canada",
    capital: "Ottawa",
    population: 38005238,
    interestingFact:
      "Canada has the longest coastline in the world, stretching over 202,080 kilometers.",
  },
  {
    id: 10,
    countryName: "Japan",
    capital: "Tokyo",
    population: 125836021,
    interestingFact:
      "Japan is home to the Shinkansen, also known as the bullet train, which can reach speeds of up to 320 km/h.",
  },
  {
    id: 11,
    countryName: "Germany",
    capital: "Berlin",
    population: 83166711,
    interestingFact:
      "Germany is known for its Autobahn highway system, which has sections with no speed limit.",
  },
  {
    id: 12,
    countryName: "India",
    capital: "New Delhi",
    population: 1417173173,
    interestingFact:
      "India is the birthplace of chess, with the earliest form of the game dating back to the 6th century.",
  },
  // {
  //   id: 13,
  //   countryName: "South Africa",
  //   capital:
  //     "Pretoria (administrative), Cape Town (legislative), Bloemfontein (judicial)",
  //   population: 59308690,
  //   interestingFact:
  //     "South Africa has three capital cities, each serving a different function of the government.",
  // },
  // {
  //   id: 14,
  //   countryName: "Mexico",
  //   capital: "Mexico City",
  //   population: 126190788,
  //   interestingFact:
  //     "Mexico City was built on the site of the ancient Aztec capital, Tenochtitlán.",
  // },
  // {
  //   id: 15,
  //   countryName: "United Kingdom",
  //   capital: "London",
  //   population: 67215293,
  //   interestingFact:
  //     "Big Ben is not the name of the tower, but rather the nickname for the Great Bell inside it.",
  // },
  // {
  //   id: 16,
  //   countryName: "Italy",
  //   capital: "Rome",
  //   population: 60244639,
  //   interestingFact:
  //     "Rome is home to the Vatican City, the smallest independent state in the world.",
  // },
  // {
  //   id: 17,
  //   countryName: "Argentina",
  //   capital: "Buenos Aires",
  //   population: 45604590,
  //   interestingFact:
  //     "Argentina is known for its tango music and dance, which originated in Buenos Aires in the late 19th century.",
  // },
];
const CountryCards = () => {
  return (
    <div>
      <div className="flex flex-wrap gap-5 justify-center  ">
        {facts.map((fact, i) => (
          <AboutCountryCard key={i} fact={fact} />
        ))}
      </div>
    </div>
  );
};

export default CountryCards;
